"use client";

import { useForm } from "react-hook-form";
import styles from "./formPhotoCompagnie.module.css";
import type { photoCompagnieProps } from "@/lib/definitions";
import { addPhotoCompagnie } from "../action";
import { toast } from "react-toastify";

export default function FormPhotoCompagnie() {
	const { register, handleSubmit, reset } = useForm<photoCompagnieProps>();

	const onSubmit = async (photo: photoCompagnieProps) => {
		const { photoCompagnie } = photo;
		const formData = new FormData();
		formData.append("photoCompagnie", photoCompagnie[0]);

		const uploadPhoto = await fetch("/api/upload", {
			method: "POST",
			body: formData,
		});
		const responseUpload = await uploadPhoto.json();

		const responseDb = await addPhotoCompagnie(responseUpload);
		reset();
		if (responseDb?.success === true) {
			toast.success(responseDb.message);
		}
	};
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}>Photo Compagnie</legend>
					<label htmlFor="photoCompagnie">Photo :</label>
					<input type="file" {...register("photoCompagnie")} />
				</fieldset>
				<button className={styles.button} type="submit">
					Envoyer
				</button>
			</form>
		</>
	);
}
