import { paragraphFont } from "../../ui/font";
import styles from "../../(client)/layout.module.css";
import "../../globals.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${paragraphFont.className} ${styles.body}`}>
				{children}
			</body>
		</html>
	);
}
