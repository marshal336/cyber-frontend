import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { PAGES_DASHBOARD, tdId, TOKENS } from "./utils";
import { axiosAuth, axiosClassic } from "./services/api/instance";

export async function middleware(request: NextRequest, response: NextResponse) {
  const accessToken = request.cookies.get(TOKENS.ACCESS_TOKEN);
  // const transactionId = request.cookies.get(tdId)?.value;

  // let validData = false;
  // try {
  //   if (!transactionId) return;
  //   const { data } = await axiosAuth.post("/payment/transaction/info", {
  //     transactionId,
  //   });
  //   if (data) validData = true;
  //   else validData = false;
  // } catch (error) {
  //   throw error;
  // }

  let validToken;
  try {
    const { data } = await axiosClassic.post<string>("/auth/access-token", {
      accessToken: accessToken?.value,
    });
    validToken = data;
  } catch (error) {
    console.error(error);
  }

  let userCartItemsLength = 0;
  try {
    const { data } = await axiosAuth.post<number>("/user/user-cart", {
      id: validToken,
    });
    userCartItemsLength = data;
  } catch (error) {
    console.error(error);
  }

  const protectedPages = [
    PAGES_DASHBOARD.PAYMENT,
    PAGES_DASHBOARD.PROFILE,
    PAGES_DASHBOARD.CART,
  ];
  const isProtectedPage = protectedPages.some((page) =>
    request.url.includes(page)
  );

  // if (
  //   validData &&
  //   request.url.includes(
  //     `${PAGES_DASHBOARD.PAYMENT}${PAGES_DASHBOARD.STEP_ONE}`
  //   )
  // ) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }
  if (!validToken && isProtectedPage) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }
  if (accessToken && validToken && request.url.includes("/auth")) {
    return NextResponse.redirect(new URL(PAGES_DASHBOARD.PROFILE, request.url));
  }
  if (
    userCartItemsLength === 0 &&
    (request.url.includes(PAGES_DASHBOARD.CART) ||
      request.url.includes(PAGES_DASHBOARD.PAYMENT))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/payment/:path*",
    "/profile/:path*",
    "/auth/:path*",
    "/cart/:path*",
  ],
};
