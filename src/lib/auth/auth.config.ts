import type { Session, User, SessionStrategy } from "next-auth";
import type { JWT } from "next-auth/jwt";

export const authConfig = {
	pages: {
		signIn: "/login",
	},
	session: {
		strategy: "jwt" as SessionStrategy,
	},
	callbacks: {
		async jwt({ token, user }: { token: JWT; user?: User }) {
			if (user) {
				token.id = user.id;
				token.firstname = user.firstname;
				token.lastname = user.lastname;
				token.email = user.email;
				token.role_id = user.role_id;
			}
			return token;
		},
		async session({ session, token }: { session: Session; token: JWT }) {
			session.user = {
				id: token.id,
				firstname: token.firstname,
				lastname: token.lastname,
				email: token.email,
				role_id: token.role_id,
			};
			return session;
		},
	},
};
