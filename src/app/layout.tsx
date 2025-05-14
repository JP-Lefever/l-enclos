import { paragraphFont } from "@/components/ui/font";
import styles from "./layout.module.css";

import "./globals.css";


import React from "react";
import {Bounce, ToastContainer} from "react-toastify";

export default function rootLayout({
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
        <main>{children}</main>

        </body>
        </html>
    );
}
