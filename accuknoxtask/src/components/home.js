import { useContext, useEffect } from "react";
import { Card } from "./card"
import { Navbar } from "./navbar"
import { WidgetsDiv } from "./widgets"
import { MyContext } from "./context";
import { Addscreen } from "./addscreen";

export const Home = ()=>{
    const { state, dispatch } = useContext(MyContext);
    useEffect(()=>{
        console.log("jjj");
        
    },[state])
    return(
        <>
        <Navbar/>
        <WidgetsDiv/>
        {state.addscreen && <Addscreen categories={state.categories} he={state} />}
        </>
    )
}