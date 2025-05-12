"use client"
import styles from "./modifyDate.module.css"
import {ModifyDateProps, ModifyImmersionProps} from "@/types/definitions";
import FormModifyDate from "@/features/agenda/admin/formModifyDate/FormModifyDate";
import {ButtonsAgenda} from "@/components/ui/buttons/Buttons";
import {useState} from "react";
import FormModifyImmersion from "@/features/agenda/admin/formModifyImmersion/FormModifyImmersion";


export default function ModifyDate({dates, immersions}: {dates : ModifyDateProps[], immersions: ModifyImmersionProps[]}) {

const [isOpenDate, setIsOpenDate] = useState(false);
    const [isOpenInter, setIsOpenInter] = useState(false);

    return <>
        <section>

            <h2 className={styles.h2}>Modifier une date</h2>
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
            <section className={styles.sectionImm}>
                {immersions.map((i : ModifyImmersionProps) => (
                <FormModifyImmersion key={i.id} immersions={i}/>
                ))}
            </section>
            )}

        </section>
    </>
}
