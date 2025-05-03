"use server";

import Users from "./repository";

export async function getUserByEmail(email: string) {
	const user = Users.readUserByEmail(email);
	if (!user) {
		return null;
	}

	return user;
}
