"use server";

import Users from "./Auth.repository";

export async function getUserByEmail(email: string) {
	const user = Users.readUserByEmail(email);
	if (!user) {
		return null;
	}

	return user;
}
