import React from "react";

const PaginationSelection=({itensPerPage,setItensPerPage})=>{
    return (
    <div style={{paddingLeft:'10px'}}>
        Itens por página: &nbsp;
      <select value={itensPerPage} onChange={(e)=>setItensPerPage(Number(e.target.value))}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
    </div>
    )
}

export default PaginationSelection;