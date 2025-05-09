import styles from "@/features/spectacle/detailSpectacle/detailSpectacle.module.css";
import {ScrollAnimation} from "@/components/ui/animation/ScrollAnimation";
import {ModifyDateProps} from "@/types/definitions";

export default function CardSpectacleDate({datesSpec}: {datesSpec : ModifyDateProps }){
console.log(datesSpec);
    const {date, place,  hour} = datesSpec;
    return(<>

        <section className={styles.articles}>
            <ScrollAnimation className={styles.articleDate}>
                <h3 className={styles.h3Date}>A venir</h3>
                <article className={styles.divDate}>
                            <article >

                                <p className={styles.pDate1}>{place}</p>
                                <p className={styles.pDate2}>{datesSpec.public} </p>
                                <p className={styles.pDate2}>{hour}</p>
                            </article>
                </article>

            </ScrollAnimation>

        </section>
    </>)
}