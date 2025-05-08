import ModifyDate from "@/features/agenda/modifyDate/ModifyDate";
import {readAllDate} from "@/features/agenda/agenda.action";

export  default async function EditDatePage(){

    const {data, error} = await readAllDate()

    return (<>
        {!error && data &&
    <ModifyDate dates={data}/>
        }

    </>)
}