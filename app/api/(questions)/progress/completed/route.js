import User from "../../../../../lib/modals/users.modal.js";
import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/middleware/auth.middleware.js";

export const POST = async (req) => {
  // Verify the JWT token
  const user = await verifyToken(req);

  // If the user is authenticated, fetch their user data
  if (user) {
    const userData = await User.findById(user._id);
    const progress = userData.progress.filter(
      (user) => user.isCompleted === true
    );
    return NextResponse.json(
      {
        success: true,
        message: "User progress fetched successfully",
        progress: progress,
      },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized: Invalid token",
      },
      { status: 401 }
    );
  }
};
