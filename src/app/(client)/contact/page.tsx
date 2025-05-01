import styles from "./page.module.css";
import AdminContact from "@/features/contact/contactForm/ContactForm";

export default function ContactPage() {
	return (
		<>
			<section className={styles.section}>
				<h1 className={styles.h1}>Contact</h1>
			</section>
			<section>
				<AdminContact />
			</section>
		</>
	);
}
