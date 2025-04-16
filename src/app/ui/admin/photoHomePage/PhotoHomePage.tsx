"use client";
import styles from "./photoHomePage.module.css";
import { useForm } from "react-hook-form";

export default function PhotoHomePage() {
	const { register } = useForm();
	return (
		<>
			<form>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}>Photos carousel</legend>
					<label className={styles.label} htmlFor="photo carousel">
						Photos :
					</label>
					<input
						className={styles.input}
						type="file"
						{...register("photo_carousel1")}
					/>
					<input
						className={styles.input}
						type="file"
						{...register("photo_carousel2")}
					/>
					<input
						className={styles.input}
						type="file"
						{...register("photo_carousel3")}
					/>
					<input
						className={styles.input}
						type="file"
						{...register("photo_carousel4")}
					/>
				</fieldset>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}>Photos encart compagnie</legend>
					<label className={styles.label} htmlFor="photo_compagnie">
						Photo :
					</label>
					<input
						className={styles.input}
						type="file"
						{...register("photo_compagnie")}
					/>
				</fieldset>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}>Photos encart spectacle</legend>
					<label className={styles.label} htmlFor="photo_spectacle">
						Photo :
					</label>
					<input
						className={styles.input}
						type="file"
						{...register("photo_spectacle")}
					/>
				</fieldset>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}>Photos encart mediation</legend>
					<label className={styles.label} htmlFor="photo_mediation">
						Photo :
					</label>
					<input
						className={styles.input}
						type="file"
						{...register("photo_mediation")}
					/>
				</fieldset>
			</form>
		</>
	);
}
