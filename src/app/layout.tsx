import { paragraphFont } from "@/components/ui/font";
import styles from "./layout.module.css";
import "./globals.css";
import React from "react";
import {Bounce, ToastContainer} from "react-toastify";
import {Metadata} from "next";

export const metadata : Metadata = {
    title : "Compagnie L'Enclos | Compagnie de théatre contemporain",
    description : "Compagnie de théatre contemporain, mediation et action culturelle dans la région occitanie",
    icons : "/images/logo.png",

}

export default function rootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className={`${paragraphFont.variable}`}>
        <body className={`${paragraphFont.className} ${styles.body}`}>
        <div id={"page-transition"}/>
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
        <main>{children}</main>


        </body>
        </html>
    );
}
