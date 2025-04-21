import { paragraphFont } from "../../../components/ui/font";
import styles from "../../(client)/layout.module.css";
import "../../globals.css";
import NavAdmin from "@/components/ui/navAdmin/navAdmin";

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
