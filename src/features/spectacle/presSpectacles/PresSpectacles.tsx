import Link from "next/link";
import styles from "./presSpectacles.module.css";
import Image from "next/image";

export default function PresSpectacles() {
	return (
		<>
			<section className={styles.section}>
				<article className={styles.sectionSpec}>
					<figure>
						<Image
							className={styles.image}
							src={"/images/17ans/17ans5.jpg"}
							alt={"La compagnie l'Enclos"}
							width={1080}
							height={860}
						/>
					</figure>

					<section className={styles.sectionCréa}>
						<h1 className={styles.h1}>Créations</h1>
						<p className={styles.paragraph}>
							{`L'Enclos parle de cet Espace Clos qui entoure chaque être humain,
						l'intimité de l'être dans toute sa complexité, l'endroit de notre
						vulnérabilité. Notre carapace. Par ses créations toujours axées sur
						des écritures contemporaines, L'Enclos souhaite ainsi ouvrir la
						porte de cet espace clos difficilement accessible dans la « vraie
						vie » et ainsi aller à la rencontre de ses personnages dans leur
						profondeur, dans les méandres de leurs pensées, dans leur
						sensibilité, dans leurs limites….`}
						</p>

						<Link className={styles.link} href="/spectacles">
							Voir les spectacles
						</Link>
					</section>
				</article>
			</section>
		</>
	);
}
