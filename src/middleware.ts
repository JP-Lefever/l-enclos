import withAuth from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
	() => {
		return NextResponse.next();
	},
	{
		callbacks: {
			authorized: ({ token }) => !!token,
		},
	},
);
//only to path /admin
export const config = {
	matcher: ["/admin/:path*"],
};
