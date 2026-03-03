

import "../globals.css";
import NavBar from "@/components/layout/navigation/navBar/NavBar";
import Footer from "@/components/layout/footer/Footer";
import React from "react";
import {paragraphFont, titleFont} from "@/components/ui/font";



export default function LayoutClient({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
				<NavBar />
				<main className={`${paragraphFont.variable}  ${titleFont.variable}`}>{children}</main>
				<Footer />
		</>
	)
}
