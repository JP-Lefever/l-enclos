import Link from "next/link";
import styles from "./mediationCollege.module.css";
import Image from "next/image";

export default function MediationCollege() {
	return (
		<>
			<section className={styles.section}>
				<article>
					<Image
						className={styles.image}
						src={"/images/mediation_college.jpg"}
						alt={"La compagnie l'Enclos"}
						width={1080}
						height={860}
					/>
				</article>

				<article>
					<h1 className={styles.h1}>Théâtre - College</h1>
					<p className={styles.paragraph}>Mediation college</p>
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
