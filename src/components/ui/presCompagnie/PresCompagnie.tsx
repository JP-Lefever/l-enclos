import Link from "next/link";
import styles from "./presCompagnie.module.css";
import Image from "next/image";

export default function PresCompagnie() {
	return (
		<>
			<section className={styles.section}>
				<article>
					<Image
						className={styles.image}
						src={"/images/cie.png"}
						alt={"La compagnie l'Enclos"}
						width={1080}
						height={860}
					/>
				</article>

				<article>
					<h1 className={styles.h1}>
						<span className={styles.span}>LA </span>
						<span className={styles.span}>COMPAGNIE </span>
						<span className={styles.span}>L'ENCLOS</span>
					</h1>
					<p className={styles.paragraph}>
						"L'Enclos parle de cet Espace Clos qui entoure chaque être humain,
						l'intimité de l'être dans toute sa complexité, l'endroit de notre
						vulnérabilité. Notre carapace. Par ses créations toujours axées sur
						des écritures contemporaines, L'Enclos souhaite ainsi ouvrir la
						porte de cet espace clos difficilement accessible dans la « vraie
						vie » et ainsi aller à la rencontre de ses personnages dans leur
						profondeur, dans les méandres de leurs pensées, dans leur
						sensibilité, dans leurs limites…."
					</p>
					<div className={styles.div}>
						<Link className={styles.link} href="#">
							En savoir plus
						</Link>
					</div>
				</article>
			</section>
		</>
	);
}
