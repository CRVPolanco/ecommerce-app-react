import React from "react";
import flechita from '/src/assets/icons/flechita.svg'
import '../styles/SearchResult.css';

function SearchResult({ total, id }){

  const back = () => {
    history.back();
  }

  return(
    <>
      <div className="SearchResult">
        <div className="return-main">
          <span onClick={back}><img src={flechita} alt="Return" /></span>
          <h2>Return back</h2>
        </div>
        {total < 1 && (
          <h3>No results for {id}</h3>
        )}
        {total > 0 && (
          <h3>There is {total} results for this search: {id}</h3>
        )}
      </div>
    </>
  )
}

export { SearchResult }
