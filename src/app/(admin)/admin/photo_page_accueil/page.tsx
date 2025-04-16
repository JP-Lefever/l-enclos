import styles from "./page.module.css";
import PhotoHomePage from "@/app/ui/admin/photoHomePage/PhotoHomePage";

export default function PhotoAccueil() {
	return (
		<>
			<section className={styles.section}>
				<h1 className={styles.h1}>Photo page d'accueil</h1>
				<PhotoHomePage />
			</section>
		</>
	);
}
