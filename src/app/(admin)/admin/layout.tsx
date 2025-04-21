import { paragraphFont } from "../../../components/ui/font";
import styles from "../../(client)/layout.module.css";
import "../../globals.css";
import NavAdmin from "@/features/navAdmin/navAdmin";
import { Bounce, ToastContainer } from "react-toastify";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${paragraphFont.className} ${styles.body}`}>
				<NavAdmin />
				<ToastContainer
					position="top-center"
					autoClose={6000}
					hideProgressBar={true}
					newestOnTop={false}
					closeOnClick={false}
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
					transition={Bounce}
				/>
				{children}
			</body>
		</html>
	);
}
