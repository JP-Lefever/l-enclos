"use client";
import type { partnairProps } from "@/lib/definitions";
import styles from "./addPartnair.module.css";
import { useForm } from "react-hook-form";
import { addPartnair } from "../action";
import { toast } from "react-toastify";

export default function AddPartnair() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<partnairProps>();

	const onSubmit = async (data: partnairProps) => {
		const response = await addPartnair(data);

		if (response?.success === true) {
			toast.success(response.message);
		}
		reset();
	};
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}>Partenaires</legend>
					<label htmlFor="partnair">Nom complet du partenaire : </label>
					<input
						type="text"
						{...register("partnair", {
							required: "champ requis",
							pattern: {
								value: /^[^<>]*$/,
								message: "caractères <> interdits",
							},
						})}
					/>
					<p className={styles.error}>{errors.partnair?.message}</p>
				</fieldset>
				<button className={styles.button} type="submit">
					Ajouter
				</button>
			</form>
		</>
	);
}
