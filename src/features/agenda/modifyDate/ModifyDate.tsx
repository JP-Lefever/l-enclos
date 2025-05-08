"use client"
import styles from "./modifyDate.module.css"
import { ModifyDateProps} from "@/types/definitions";
import FormModifyDate from "@/features/agenda/formModifyDate/FormModifyDate";
import {ButtonsAgenda} from "@/components/ui/buttons/Buttons";
import {useState} from "react";


export default function ModifyDate({dates}: {dates : ModifyDateProps[]}) {

const [isOpenDate, setIsOpenDate] = useState(false);
    const [isOpenInter, setIsOpenInter] = useState(false);

    return <>
            <h2 className={styles.h2}>
                Modifier une date
            </h2>
        <ButtonsAgenda setIsOpenDate={setIsOpenDate} setIsOpenInter={setIsOpenInter}/>

        {isOpenDate && (
        <section className={styles.section}>
            { dates.map((d : ModifyDateProps) => (
                    <FormModifyDate key={d.id} dates={d}/>
)
            )}
        </section>
            )}
        {isOpenInter && (
            <section className={styles.section}>
                <h2>Inter</h2>
            </section>
            )}
    </>
}