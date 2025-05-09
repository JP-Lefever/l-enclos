"use client"

import {ButtonsAgenda} from "@/components/ui/buttons/Buttons"
import {useState} from "react";
import FormAgenda from "@/features/agenda/admin/formAgenda/FormAgenda";
import FormIntervention from "@/features/agenda/admin/formIntervention/FormIntervention";

export default  function AddNewDate(){
const [isOpenDate, setIsOpenDate] = useState(false);
    const [isOpenInter, setIsOpenInter] = useState(false);
    return(<>
        <section>
            <article>
                <ButtonsAgenda setIsOpenDate={ setIsOpenDate } setIsOpenInter={ setIsOpenInter }/>
            </article>
            {isOpenDate &&
            <article>
                <FormAgenda/>
            </article>
            }
            {isOpenInter &&
            <article>
                <FormIntervention/>
            </article>
            }
        </section>
    </>)
}