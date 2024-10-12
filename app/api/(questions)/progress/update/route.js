import { verifyToken } from "@/lib/middleware/auth.middleware.js";
import User from "../../../../../lib/modals/users.modal.js";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const user = await verifyToken(request);
  // console.log(user);
  if (!user) {
    return NextResponse.json(
      {
        success: false,
        message: "Authentication failed",
      },
      { status: 401 }
    );
  }

  const { question, isCompleted } = await request.json();

  if (!question || isCompleted === undefined) {
    return NextResponse.json(
      {
        success: false,
        message: "All fields are required",
      },
      { status: 400 }
    );
  }
  try {
    const userData = await User.findById(user._id);
    console.log(userData);
    const questionProgress = userData.progress.find(
      (q) => q.question === question
    );

    if (questionProgress) {
      questionProgress.isCompleted = isCompleted;
    } else {
      // If the question doesn't exist in progress, add it with the current status
      userData.progress.push({
        question,
        isCompleted, // Dynamic link to the question
      });
    }
    await userData.save();
    return NextResponse.json(
      {
        success: true,
        message: "Question progress updated successfully",
        data: userData.progress,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while updating question progress",
        error: error.message,
      },
      { status: 500 }
    );
  }
};
