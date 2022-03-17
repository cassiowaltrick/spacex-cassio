import React from "react";
import { PaginationButton } from './styles';

const PaginationComponent=({pages,currentPage,setCurrentPage})=>{
    return (        
    <div>
        {Array.from(Array(pages),(item,index)=>{
        return <PaginationButton value={index}
        onClick={(e)=>setCurrentPage(Number(e.target.value))}
        style={index===currentPage?{backgroundColor:"pink"}:null}>
            {index + 1}
            </PaginationButton>
        })}
    </div>
    )
}

export default PaginationComponent;