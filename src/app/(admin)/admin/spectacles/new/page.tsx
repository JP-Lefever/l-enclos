import styles from "./page.module.css";
import AddSpectacle from "@/features/addSpectacle/components/AddSpectacle";
import { fetchPartnair } from "@/data/partnair";

import type { partnairProps } from "@/lib/definitions";

export default async function NewSpectaclePage() {
	const partnair: partnairProps[] = await fetchPartnair();

	return (
		<>
			<section className={styles.section}>
				<h1 className={styles.h1}>AJOUTER UN SPECTACLE</h1>
				<AddSpectacle partnair={partnair} />
			</section>
		</>
	);
}
