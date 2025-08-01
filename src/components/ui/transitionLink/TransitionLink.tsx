"use client"
import React from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function TransitionLink({href, className, children, onClick, ...props}: {href: string, className?: string, children: React.ReactNode, onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void}) {

    const router = useRouter()
    const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms))

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if(onClick){
            onClick(e)
        }
        if(e.defaultPrevented) return;

        e.preventDefault();
        const transitionElement = document.getElementById("page-transition")
        if (!transitionElement) return;
        transitionElement?.classList.add("active");
        await sleep(1000)
        router.push(href)
        await sleep(1000)
        transitionElement?.classList.remove("active")
        await sleep(1000)
    }

    return (<>

        <Link onClick={handleTransition} href={href} className={className} {...props}>{children}</Link>


    </>)
}