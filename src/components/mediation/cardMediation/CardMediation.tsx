import TransitionLink from "@/components/ui/transitionLink/TransitionLink";
import styles from "./cardMediation.module.css";
import Image from "next/image";
import { ArrowRight } from 'lucide-react';
import type { MediationProps} from "@/types/definitions";

export default function CardMediation( {data} : {data : MediationProps}) {



    return (
        <TransitionLink
            href={`/mediation/${data.slug}`}
            className={styles.article}
            key={data.id}
        >
            <h2 className={styles.p}>{data.name}</h2>
            <figure className={styles.imageWrapper}>
                <Image
                    className={styles.image}
                    src={data.photoPres}
                    alt="Affiche spectacle"
                    fill={true}
                />
            </figure>
            <div className={styles.div}>
                <ArrowRight/>
                <p>{"En savoir plus"}</p>
            </div>
        </TransitionLink>
    )
}