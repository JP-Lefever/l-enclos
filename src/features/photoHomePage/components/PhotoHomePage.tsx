"use client";
import type { photoHomePage } from "@/lib/definitions";
import styles from "./photoHomePage.module.css";
import { useForm } from "react-hook-form";
import { uploadPhoto } from "../action";

export default function PhotoHomePage() {
	const { register, handleSubmit } = useForm<photoHomePage>();

	const onSubmitCarousel = async (photo: photoHomePage) => {
		const {
			photoCarousel1,
			photoCarousel2,
			photoCarousel3,
			photoCarousel4,
			photoCompagnie,
			photoMediation,
			photoSpectacle,
		} = photo;
		const formData = new FormData();
		formData.append("photoCarousel1", photoCarousel1[0]);
		formData.append("photoCarousel2", photoCarousel2[0]);
		formData.append("photoCarousel3", photoCarousel3[0]);
		formData.append("photoCarousel4", photoCarousel4[0]);
		formData.append("photoCompagnie", photoCompagnie[0]);
		formData.append("photoMediation", photoMediation[0]);
		formData.append("photoSpectacle", photoSpectacle[0]);
		const uploadCarousel = await fetch("/api/upload", {
			method: "POST",
			body: formData,
		});

		const response = await uploadCarousel.json();
		await uploadPhoto(response);
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmitCarousel)}>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}>Photos carousel</legend>
					<label className={styles.label} htmlFor="photo carousel">
						Photos :
					</label>
					<input
						className={styles.input}
						type="file"
						{...register("photoCarousel1")}
					/>
					<input
						className={styles.input}
						type="file"
						{...register("photoCarousel2")}
					/>
					<input
						className={styles.input}
						type="file"
						{...register("photoCarousel3")}
					/>
					<input
						className={styles.input}
						type="file"
						{...register("photoCarousel4")}
					/>
				</fieldset>

				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}>Photos encart compagnie</legend>
					<label className={styles.label} htmlFor="photoCompagnie">
						Photo :
					</label>
					<input
						className={styles.input}
						type="file"
						{...register("photoCompagnie")}
					/>
				</fieldset>

				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}>Photos encart spectacle</legend>
					<label className={styles.label} htmlFor="photoSpectacle">
						Photo :
					</label>
					<input
						className={styles.input}
						type="file"
						{...register("photoSpectacle")}
					/>
				</fieldset>

				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}>Photos encart mediation</legend>
					<label className={styles.label} htmlFor="photoMediation">
						Photo :
					</label>
					<input
						className={styles.input}
						type="file"
						{...register("photoMediation")}
					/>
				</fieldset>
				<button type="submit">Envoyer</button>
			</form>
		</>
	);
}
