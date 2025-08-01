import styles from "./page.module.css";
import AdminContact from "@/features/contact/contactForm/ContactForm";
import {Metadata} from "next";

export const metadata : Metadata = {
	title : "Compagnie L'Enclos | Contact",
	description : "Formulaire de contact de la compagnie L'Enclos",
	icons : "/images/logo.png",
}

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
