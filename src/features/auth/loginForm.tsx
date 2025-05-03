"use client";

import { useForm } from "react-hook-form";

export default function LoginForm() {
	const { register } = useForm();

	return (
		<>
			<section>
				<form>
					<label htmlFor="email">Email</label>
					<input type="email" {...register("email")} />
					<label htmlFor="password">Password</label>
					<input
						type="password"
						placeholder="************"
						{...register("password")}
					/>
				</form>
			</section>
		</>
	);
}
