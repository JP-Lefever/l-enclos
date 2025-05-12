import Histoire from "@/features/compagnie/histoire/Histoire";
import styles from "./page.module.css";

export default function CompagniePage() {
	return (
		<>
			<section className={styles.section}>
				<h1 className={styles.h1}>Histoire</h1>

			</section>
			<section>
				<Histoire />
			</section>
		</>
	);
}
