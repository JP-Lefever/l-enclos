import Link from "next/link";
import styles from "./mediationPrimaire.module.css";
import Image from "next/image";

export default function MediationPrimaire() {
	const id = 1;
	return (
		<>
			<section className={styles.section}>
				<article>
					<Image
						className={styles.image}
						src={"/images/mediation.webp"}
						alt={"La compagnie l'Enclos"}
						width={1080}
						height={860}
					/>
				</article>

				<article>
					<h1 className={styles.h1}>Théâtre - Primaire</h1>
					<p className={styles.paragraph}>Ateliers primaires</p>
					<div className={styles.div}>
						<Link className={styles.link} href={`/mediation/${id}`}>
							En savoir plus
						</Link>
					</div>
				</article>
			</section>
		</>
	);
}
