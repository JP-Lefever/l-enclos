
import styles from "./layout.module.css";

import React from "react";
import {ButtonsDates} from "@/components/ui/buttons/Buttons";
import { paragraphFont } from "@/components/ui/font";
import "../../globals.css"
import ScrollToTopOnLoad from "@/components/ui/scroller/ScollToTop";
import {Metadata} from "next";
import {ScrollAnimation2} from "@/components/ui/animation/ScrollAnimation";

export const metadata : Metadata = {
    title : "Compagnie L'Enclos | Les dates",
    description : "Agendas de la compagnie L'Enclos, créations artistiques et actions culturelles",
    icons : "/images/logo.png",
}

export default function Layout({
                                   children,
                               }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
      <>
            <ScrollToTopOnLoad/>
          <section className={styles.layout}>
              <article className={styles.section}>
                  <h1 className={styles.h1}>{"La compagnie L'Enclos"}</h1>
                  <ScrollAnimation2>
                      <h2 className={styles.h2}>{"Agenda"}</h2>
                  </ScrollAnimation2>
              </article>
                <article className={styles.button}>
                    <ButtonsDates/>
                </article>
                 <article className={paragraphFont.className}>
                {children}
                </article>
          </section>

      </>

    );
}
