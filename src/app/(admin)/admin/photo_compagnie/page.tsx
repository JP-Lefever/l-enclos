import styles from "./page.module.css";
import FormPhotoCompagnie from "@/features/photoCompagnie/components/FormPhotoCompagnie";

export default function PhotoCompagniePage() {
	return (
		<>
			<section className={styles.section}>
				<h1 className={styles.h1}>Photo Compagnie</h1>
				<FormPhotoCompagnie />
			</section>
		</>
	);
}
