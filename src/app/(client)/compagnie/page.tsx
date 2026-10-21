
import styles from "./page.module.css";
import {Metadata} from "next";
import Histoire from "@/components/compagnie/histoire/Histoire";
import {ScrollAnimation2} from "@/components/ui/animation/ScrollAnimation";


export const metadata : Metadata = {
	title : "Compagnie L'Enclos | L'histoire",
	description : "Les origines de la compagnie L'Enclos",
	icons : "/images/logo.png",
}

export default function CompagniePage() {
	return (
		<>
			<section className={styles.page}>
				<article className={styles.section}>
					<h1 className={styles.h1}>{"La compagnie L'Enclos"}</h1>
					<ScrollAnimation2>
						<h2 className={styles.h2}>{"L'Histoire"}</h2>
					</ScrollAnimation2>
				</article>
				<article className={styles.sectionCard}>
					<Histoire/>
				</article>
			</section>
		</>
	);
}
