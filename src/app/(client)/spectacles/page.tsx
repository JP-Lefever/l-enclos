import ButtonSpec from "@/components/ui/buttonSpec/ButtonSpec";
import styles from "./page.module.css";
import CardSpec from "@/components/ui/cardSpec/CardSpec";
export default function SpectaclesPage() {
	return (
		<>
			<section className={styles.section}>
				<h1 className={styles.h1}>SPECTACLES</h1>
			</section>
			<section>
				<ButtonSpec />
			</section>
			<section>
				<CardSpec />
			</section>
		</>
	);
}
