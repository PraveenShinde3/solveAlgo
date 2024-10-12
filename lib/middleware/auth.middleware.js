import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "../modals/users.modal.js";

export const verifyToken = async (req) => {
  // Extract the token from cookies or Authorization header
  const token =
    req.cookies?.accessToken ||
    req.headers.get("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized: No token provided",
      },
      { status: 401 }
    );
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // Find the user in the database
    const user = await User.findById(decoded._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized: Invalid token",
        },
        { status: 401 }
      );
    }

    // Return the user object if valid
    return user;
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized: Invalid token",
        error: error.message,
      },
      { status: 500 }
    );
  }
};
