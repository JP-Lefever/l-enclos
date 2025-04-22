import styles from "./page.module.css";
import { fetchPartnair } from "@/data/partnair";
import NewSpectacle from "@/features/addSpectacle/components/NewSpectacle";

import type { partnairProps } from "@/lib/definitions";

export default async function NewSpectaclePage() {
	const partnair: partnairProps[] = await fetchPartnair();

	return (
		<>
			<section className={styles.section}>
				<h1 className={styles.h1}>AJOUTER UN SPECTACLE</h1>
				<NewSpectacle partnair={partnair} />
			</section>
		</>
	);
}
