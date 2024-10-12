import User from "@/lib/modals/users.modal.js";
import { NextResponse } from "next/server";
import { verifyToken } from "../../../../lib/middleware/auth.middleware";

export const POST = async (req) => {
  const user = verifyToken(req);

  await User.findByIdAndUpdate(
    user._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    { new: true }
  );

  const response = NextResponse.json(
    {
      success: true,
      message: "Logged out user successfully",
    },
    { status: 200 }
  );

  response.cookies.delete("accessToken");
  response.cookies.delete("refresToken");

  return response;
};
