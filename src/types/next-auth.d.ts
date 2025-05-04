import type { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
	interface Session {
		user: {
			id: string;
			firstname: string;
			lastname: string;
			email: string;
			role_id: number;
		} & DefaultSession["user"];
	}
	interface User extends DefaultUser {
		id: string;
		firstname: string;
		lastname: string;
		email: string;
		role_id: number;
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		id: string;
		firstname: string;
		lastname: string;
		email: string;
		role_id: number;
	}
}
