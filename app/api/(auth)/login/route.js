import { NextResponse } from "next/server";
import User from "@/lib/modals/users.modal.js";
import { generateRefreshAndAccessToken } from "@/lib/utils/auth.utils.js";

export const POST = async (req) => {

  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "UserName and password are required",
        },
        { status: 400 }
      );
    }

    const user = await User.findOne({ username: username });

    // console.log("login/route.js line-23", user);
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid credentials",
        },
        { status: 400 }
      );
    }

    const isPasswordMatch = await user.comparePassword(password);

    if (!isPasswordMatch) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid credentials",
        },
        { status: 400 }
      );
    }

    const { accessToken, refreshToken } = await generateRefreshAndAccessToken(
      user._id
    );

    const response = NextResponse.json(
      {
        success: true,
        message: "Logged in user successfully",
        user: user,
        accessToken,
        refreshToken,
      },
      { status: 200 }
    );

    response.cookies.set("refresToken", refreshToken);
    response.cookies.set("accessToken", accessToken);
    return response;
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while logging in",
        error: error.message,
        response: 500,
      },
      { status: 500 }
    );
  }
};
