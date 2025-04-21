import styles from "./page.module.css";
import AddPartnair from "@/features/addPartnair/component/AddPartnair";

export default function PartnairPage() {
	return (
		<>
			<section className={styles.section}>
				<h1 className={styles.h1}>Partenaires</h1>
				<AddPartnair />
			</section>
		</>
	);
}
