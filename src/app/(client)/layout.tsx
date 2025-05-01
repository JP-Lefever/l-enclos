import { paragraphFont } from "../../components/ui/font";
import styles from "./layout.module.css";
import { ToastContainer, Bounce } from "react-toastify";

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
				<NavBar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
