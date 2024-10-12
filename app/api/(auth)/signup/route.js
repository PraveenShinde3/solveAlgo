import { NextResponse } from "next/server";
import User from "@/lib/modals/users.modal";
import connectDB from "@/lib/db";

// POST request for login
export async function POST(request) {
  try {
    await connectDB();
    const { username, email, password } = await request.json();

    const userExisted = await User.findOne({ $or: [{ email }, { username }] });
    if (userExisted) {
      return NextResponse.json(
        {
          success: false,
          message: "User already exsist",
        },
        { status: 409 }
      );
    }

    const user = await User.create({ username, email, password });
    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    if (!createdUser) {
      return NextResponse.json(
        {
          success: false,
          message: "User creation failed",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Login successful",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "An error occurred during login",
      error: error.message,
    });
  }
}
