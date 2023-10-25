import React,{useEffect} from "react"

export default function Message(){
    useEffect(()=>{
        console.log("Render from Message!")
        return() => console.log("unmounting.....from Message")
    })
    return("I am a message carrier");
}
