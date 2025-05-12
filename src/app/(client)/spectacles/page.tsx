import {ButtonsSpec} from "@/components/ui/buttons/Buttons"
import styles from "./page.module.css";
import CardSpec from "@/features/spectacle/cardSpec/CardSpec";

export default function SpectaclesPage() {
	return (
		<>
			<section className={styles.section}>
				<h1 className={styles.h1}>créations</h1>
			</section>

			<section>
				<CardSpec />
			</section>
		</>
	);
}
