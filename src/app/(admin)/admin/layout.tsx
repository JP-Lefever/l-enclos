
import "../../globals.css";
import NavAdmin from "@/components/layout/navigation/navAdmin/navAdmin";
import React from "react";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
				<NavAdmin />
				<main>{children}</main>

		</>
	);
}
