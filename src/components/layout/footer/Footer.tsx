import styles from "./footer.module.css";
import Image from "next/image";

export default function Footer() {
	return (
		<>
			<footer className={styles.footer}>
				<section>
					<a
						rel="noreferrer"
						target="_blank"
						href="https://www.facebook.com/cielenclos"
					>
						<Image
							className={styles.fb}
							src="/images/facebook.png"
							alt="Facebook"
							width={48}
							height={48}
						/>
					</a>
				</section>
				<section className={styles.footerMid}>
					<Image
						className={styles.logo}
						src="/images/logo.png"
						alt="Logo l'enclos"
						width={860}
						height={480}
					/>
					<p>Compagnie de théâtre contemporain</p>
				</section>
				<section className={styles.footerRight}>
					<p>64 boulevard Silvio Trentin </p>
					<p>31200, Toulouse</p>
					<p className={styles.mail}>cie.lenclos@posteo.net</p>
				</section>
			</footer>
		</>
	);
}
