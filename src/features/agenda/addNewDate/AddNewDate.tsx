"use client"
import FormAgenda from "@/features/agenda/formAgenda/FormAgenda";
import FormIntervention from "@/features/agenda/formIntervention/FormIntervention";
import {ButtonsAgenda} from "@/components/ui/buttons/Buttons"
import {useState} from "react";

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