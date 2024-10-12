import User from "@/lib/modals/users.modal.js";

export const generateRefreshAndAccessToken = async (userId) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new ApiErrorResponse(404, "User not found");
  }

  const refreshToken = user.generateRefreshToken();
  const accessToken = user.generateAccessToken();

  user.refreshToken = refreshToken;

  await user.save({ validateBeforeSave: false });

  return {
    accessToken,
    refreshToken,
  };
};
