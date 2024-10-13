import connectDB from "@/lib/db";
import User from "@/lib/modals/users.modal.js";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDB();
    const users = await User.find().select("-password");
    return NextResponse.json({
      success: true,
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "An error occurred while fetching users",
      error: error.message,
    });
  }
};

export const POST = async (request) => {
  try {
    const { username, email, password } = await request.json();
    await connectDB();
    const user = await User.create({ username, email, password });
    return NextResponse.json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "An error occurred while creating the user",
      error: error.message,
    });
  }
};

export const DELETE = async (request) => {
  try {
    const { id } = await request.json();
    await connectDB();
    const user = await User.findByIdAndDelete(id).select(
      "-password",
      "-refreshToken"
    );
    if (!user) {
      return NextResponse.json({
        success: false,
        message: "User not found",
      });
    }
    return NextResponse.json({
      success: true,
      message: "User deleted successfully",
      data: user,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "An error occurred while deleting the user",
      error: error.message,
    });
  }
};
