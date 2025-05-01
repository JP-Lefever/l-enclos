import { paragraphFont } from "../../components/ui/font";
import styles from "./layout.module.css";

import "../globals.css";

import NavBar from "@/components/layout/navigation/navBar/NavBar";
import Footer from "@/components/layout/footer/Footer";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body className={`${paragraphFont.className} ${styles.body}`}>
				<NavBar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
