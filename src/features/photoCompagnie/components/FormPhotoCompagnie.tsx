"use client";

import { useForm } from "react-hook-form";
import styles from "./formPhotoCompagnie.module.css";
import type { photoCompagnieProps } from "@/lib/definitions";

export default function FormPhotoCompagnie() {
	const { register, handleSubmit } = useForm<photoCompagnieProps>();

	const onSubmit = async (photo: photoCompagnieProps) => {
		const uploadPhoto = await fetch("/api/upload");
	};
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}>Photo Compagnie</legend>
					<label htmlFor="photoCompagnie">Photo :</label>
					<input type="file" {...register("photoCompagnie")} />
				</fieldset>
				<button className={styles.button} type="button">
					Envoyer
				</button>
			</form>
		</>
	);
}
