import styles from "./page.module.css";
import PhotoHomePage from "@/features/photoHomePage/components/PhotoHomePage";

export default function PhotoAccueilPage() {
	return (
		<>
			<section className={styles.section}>
				<h1 className={styles.h1}>{"Photo page d'accueil"}</h1>
				<PhotoHomePage />
			</section>
		</>
	);
}
