import React, { useState } from 'react'

export const AddCategory = (props) => {

    const [inputValue,setInputValue]=useState()//texto de barra
    const onInputChange=(event=>{
        setInputValue(event.target.value)
        //console.log(inputValue) VER ESTADO ACTUCAL



    })
    
    const onSubmit=(event)=>{
        //VER EVENTO
        event.preventDefault(); //para que no cargue
        if(inputValue.trim().length<=1)
        return;
        props.onNewCategory(inputValue.trim())
        //props.seta((categories)=>[inputValue,...categories])
        setInputValue(" ")
        //COMUNICACION DE COMPONENTES
        
    }
return (
    <form onSubmit={(event)=> onSubmit(event)}>
        <input type="text"
            placeholder='Buscar gits'
            value={inputValue}
            onChange={(event)=>onInputChange(event)}
    /> 
    </form>
)
}
