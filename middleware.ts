import withAuth from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
	(req) => {
		//bring information user
		const token = req.nextauth.token;
		const url = req.nextUrl.clone();
		const pathname = url.pathname;

		//blcok admin route if no token or no good role
		if (pathname.startsWith("/admin")) {
			if (!token || token.role_id !== 1) url.pathname = "/";
			return NextResponse.redirect(url);
		}

		return NextResponse.next();
	},
	{
		callbacks: {
			//authorize everyone
			authorized: () => true,
		},
	},
);
//only to path /admin
export const config = {
	matcher: ["/admin/:path*"],
};
