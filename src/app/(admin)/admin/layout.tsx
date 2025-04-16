import { paragraphFont } from "../../ui/font";
import styles from "../../(client)/layout.module.css";
import "../../globals.css";
import NavAdmin from "@/app/ui/admin/navBar/NavAdmin";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${paragraphFont.className} ${styles.body}`}>
				<NavAdmin />
				{children}
			</body>
		</html>
	);
}
