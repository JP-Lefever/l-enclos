import styles from "./layout.module.css";
import { ToastContainer, Bounce } from "react-toastify";
import { paragraphFont } from "@/components/ui/font";

import "../../globals.css";
import NavAdmin from "@/components/layout/navigation/navAdmin/navAdmin";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body className={`${paragraphFont.className} ${styles.body}`}>
				<ToastContainer
					position="top-right"
					autoClose={2000}
					hideProgressBar={true}
					newestOnTop={false}
					closeOnClick={false}
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="colored"
					transition={Bounce}
				/>
				<NavAdmin />
				<main>{children}</main>
			</body>
		</html>
	);
}
