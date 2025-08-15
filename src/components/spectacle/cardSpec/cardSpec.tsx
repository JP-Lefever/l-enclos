import TransitionLink from "@/components/ui/transitionLink/TransitionLink";
import styles from "@/components/spectacle/cardsSpec/cardSpec.module.css";
import Image from "next/image";
import type {cardDataProps} from "@/types/definitions";

export default function CardSpec( {data} : {data : cardDataProps}) {



    return (
        <TransitionLink
            href={`/spectacles/${data.slug}`}
            className={styles.article}
            key={data.id}
        >
            <p className={styles.p}>{data.public}</p>
            <figure className={styles.imageWrapper}>
                <Image
                    className={styles.image}
                    src={data.image_url}
                    alt="Affiche spectacle"
                    fill
                />
            </figure>
            <h2 className={styles.h2}>{data.title}</h2>
        </TransitionLink>
    )
}