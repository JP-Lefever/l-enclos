import argon from "argon2";

export const verifyPassword = async (
	password: string,
	passwordHashed: string,
) => {
	const validPassword = argon.verify(passwordHashed, password);

	return validPassword;
};
