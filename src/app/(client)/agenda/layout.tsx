
import styles from "./layout.module.css";

import React from "react";
import {ButtonsDates} from "@/components/ui/buttons/Buttons";
import { paragraphFont } from "@/components/ui/font";
import "../../globals.css"

export default function Layout({
                                   children,
                               }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
      <>
        <main className={paragraphFont.className}>
            <section className={styles.section}>
                <h1 className={styles.h1}>Agenda</h1>
            </section>
            <section >
                <ButtonsDates/>
            </section>
            <section>
            {children}
            </section>
        </main>

      </>

    );
}
