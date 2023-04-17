import React from 'react'
import { useState } from "react";
import { AddCategory } from './componentes/AddCategory';
import { GifGrid } from './componentes/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["black clover"])

  const onAddCategory=(newCategory)=>{

    if(categories.includes(newCategory))
      return;
    setCategories([newCategory,...categories])
  }
      
  
 //no condicionar los estados
  //no usar metodos ya que no queremos mutar los estados
  
  return (
    <>
        <h1>GitExpertApp</h1>
        <AddCategory onNewCategory={event => onAddCategory(event)}   //seta=setCategories
          />

      
          {
            categories.map(category=>
            (
                  <GifGrid key={category} category={category}/>)
            
            )
          }
        
    </>
  )
}
