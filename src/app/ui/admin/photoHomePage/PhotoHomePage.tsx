"use client";
import type {
	photoHomePage,
	photoCarouselProps,
} from "@/app/assets/lib/definitions";
import styles from "./photoHomePage.module.css";
import { useForm } from "react-hook-form";

export default function PhotoHomePage() {
	const { register, handleSubmit } = useForm<photoHomePage>();

	const onSubmitCarousel = async (photo: photoCarouselProps) => {
		const { photoCarousel1, photoCarousel2, photoCarousel3, photoCarousel4 } =
			photo;
		const formData = new FormData();
		formData.append("photoCarousel1", photoCarousel1[0]);
		formData.append("photoCarousel2", photoCarousel2[0]);
		formData.append("photoCarousel3", photoCarousel3[0]);
		formData.append("photoCarousel4", photoCarousel4[0]);

		const uploadCarousel = await fetch("/api/upload", {
			method: "POST",
			body: formData,
		});
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
				<button type="submit">Envoyer</button>
			</form>
			<form>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}>Photos encart compagnie</legend>
					<label className={styles.label} htmlFor="photo_compagnie">
						Photo :
					</label>
					<input
						className={styles.input}
						type="file"
						{...register("photoCompagnie")}
					/>
				</fieldset>
			</form>
			<form>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}>Photos encart spectacle</legend>
					<label className={styles.label} htmlFor="photo_spectacle">
						Photo :
					</label>
					<input
						className={styles.input}
						type="file"
						{...register("photoSpectacle")}
					/>
				</fieldset>
			</form>
			<form>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}>Photos encart mediation</legend>
					<label className={styles.label} htmlFor="photo_mediation">
						Photo :
					</label>
					<input
						className={styles.input}
						type="file"
						{...register("photoMediation")}
					/>
				</fieldset>
			</form>
		</>
	);
}
