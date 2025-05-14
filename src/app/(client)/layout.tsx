

import "../globals.css";

import NavBar from "@/components/layout/navigation/navBar/NavBar";
import Footer from "@/components/layout/footer/Footer";
import React from "react";


export default function LayoutClient({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
				<NavBar />
				<main>{children}</main>
				<Footer />
		</>
	)
}
