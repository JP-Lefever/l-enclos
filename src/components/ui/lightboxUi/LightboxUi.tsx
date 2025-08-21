import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {PhotoDataProps} from "@/types/definitions";

export default function LightboxUi({open, onClose, photo, index, setIndex} : {open : boolean, onClose : ()=>void, photo : PhotoDataProps[], index : number, setIndex : (i:number) => void}) {

    return (
        <>
        <Lightbox
            open={open}
            close={onClose}
            index={index}
            slides= {photo.map((p)=> (
                {src : p.photo,
                alt: p.service,
                width : 3840,
                    height : 2650,
                }))}
            on={{
                view:({index}) => setIndex(index),
            }}

        />
        </>
    )
}