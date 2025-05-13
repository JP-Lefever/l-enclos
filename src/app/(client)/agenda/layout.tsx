
import styles from "./layout.module.css";

import React from "react";
import {ButtonsDates} from "@/components/ui/buttons/Buttons";
import { paragraphFont } from "@/components/ui/font";
import "../../globals.css"
import ScrollToTopOnLoad from "@/components/ui/scroller/ScollToTop";



export default function Layout({
                                   children,
                               }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
      <>
            <ScrollToTopOnLoad/>
            <section className={styles.section}>
                <h1 className={styles.h1}>Agenda</h1>
            </section>
            <section >
                <ButtonsDates/>
            </section>
             <section className={paragraphFont.className}>
            {children}

            </section>

      </>

    );
}
