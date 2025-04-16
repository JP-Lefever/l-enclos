import { paragraphFont } from "../ui/font";
import styles from "./layout.module.css";
import NavBar from "../ui/dashboard/navBar/NavBar";
import "../globals.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body className={`${paragraphFont.className} ${styles.body}`}>
				<NavBar />
				{children}
			</body>
		</html>
	);
}
