"use client";

import { useForm } from "react-hook-form";

export default function AdminContact() {
	const { register } = useForm();
	return (
		<>
			<form>
				<label htmlFor="lastname">Nom</label>
				<input type="text" {...register("lastname")} />
			</form>
		</>
	);
}
