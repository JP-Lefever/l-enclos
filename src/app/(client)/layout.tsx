import { paragraphFont } from "../../components/ui/font";
import styles from "./layout.module.css";
import NavBar from "../../features/navBar/NavBar";
import "../globals.css";
import Footer from "@/components/ui/footer/Footer";

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
