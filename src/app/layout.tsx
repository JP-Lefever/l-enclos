import "./globals.css";
import { paragraphFont } from "./ui/font";
import styles from "./layout.module.css";
import NavBar from "./ui/dashboard/navBar/NavBar";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${paragraphFont.className} ${styles.body}`}>
				{children}
				<NavBar />
			</body>
		</html>
	);
}
