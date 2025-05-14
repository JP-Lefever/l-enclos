import argon from "argon2";

export const verifyPassword = async (
	password: string,
	passwordHashed: string,
) => {
	return  argon.verify(passwordHashed, password);


};
