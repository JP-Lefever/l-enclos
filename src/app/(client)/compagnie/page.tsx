import styles from "./page.module.css";
import Histoire from "@/components/ui/histoire/Histoire";

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
