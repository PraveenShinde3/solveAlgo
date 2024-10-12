// import User from "./lib/modals/users.modal.js";

export function middleware(request) {
  const accessToken = request.cookies.get("accessToken")?.value;
  // console.log(accessToken);

  const loggedInUserNotAccessPath =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/signup";
  // console.log(loggedInUserNotAccessPath);
  if (loggedInUserNotAccessPath) {
    if (accessToken) {
      return Response.redirect(new URL("/", request.url));
    }
  } else {
    if (!accessToken) {
      return Response.redirect(new URL("/login", request.url));
    }
  }
}

export const config = {
  matcher: ["/login", "/signup"],
};
