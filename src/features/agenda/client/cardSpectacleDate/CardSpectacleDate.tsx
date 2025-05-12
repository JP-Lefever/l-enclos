import styles from "./cardSpectacleDate.module.css"
import {ScrollAnimation} from "@/components/ui/animation/ScrollAnimation";
import {ModifyDateProps} from "@/types/definitions";
import {formatedDate} from "@/lib/helpers/formatedDate";


export default function CardSpectacleDate({datesSpec}: {datesSpec : ModifyDateProps }){
console.log(datesSpec);
    const { place, hour, date, city, spectacle_id} = datesSpec;

    const spectacleName = (value : number | undefined)=>{
        return value === 1 ? "Te souviens-tu du jour ou j'ai coupé mes cheveux ?" : value === 2 ? "J'ai 17ans pour toujours" : ""
    }

    return(<>


        <ScrollAnimation className={styles.section}>
                            <article className={styles.articles}>
                                <h2 className={styles.h2}>{formatedDate(date)}</h2>
                                <h3 className={styles.h3}>{spectacleName(spectacle_id)}</h3>
                                <p>{city}</p>
                                <p className={styles.pDate1}>{place}</p>
                                <p>{datesSpec.public} </p>
                                <p>{hour}</p>
                            </article>
        </ScrollAnimation>

    </>)
}