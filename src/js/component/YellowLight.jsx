import React, { useState } from 'react'


const YellowLight = () => {

    const [ color, setColor ] = useState("ninguno")

    return (
        <button className={`text-center ${color == "rojo" ? "selected" : ""}`} onClick={() => {setColor("rojo")}}>
            
        </button>
  )
}

export default YellowLight