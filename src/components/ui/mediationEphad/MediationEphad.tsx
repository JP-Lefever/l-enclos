import Link from "next/link";
import styles from "./mediationEphad.module.css";
import Image from "next/image";

export default function MediationEphad() {
	const id = 3;
	return (
		<>
			<section className={styles.section}>
				<article>
					<Image
						className={styles.image}
						src={"/images/mediation_ephad.jpg"}
						alt={"La compagnie l'Enclos"}
						width={1080}
						height={860}
					/>
				</article>

				<article className={styles.article}>
					<h1 className={styles.h1}>théâtre - EPHAD</h1>
					<p className={styles.paragraph}>Mediation ephad</p>
					<div className={styles.div}>
						<Link className={styles.link} href={`/mediation/${id}`}>
							Voir les ateliers
						</Link>
					</div>
				</article>
			</section>
		</>
	);
}
