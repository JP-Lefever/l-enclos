import CardSpectacleDate from "@/features/agenda/client/cardSpectacleDate/CardSpectacleDate";
import {ModifyDateProps} from "@/types/definitions";

export default function DisplayDate({datesSpec}: {datesSpec : ModifyDateProps[] }) {


    return(<>

<section>
    {datesSpec.map((d)=>(

    <CardSpectacleDate key={d.id} datesSpec={d}/>

    ))}
</section>

    </>)
}