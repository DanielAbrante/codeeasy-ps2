import { ReactElement } from "react";
import Header from "../../components/Header";

export default function OnlyHeaderLayout({children}: {children: ReactElement}){
    return(
        <>
        <Header />
        {children}
        </>
    )
}