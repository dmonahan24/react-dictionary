import React from 'react';
import "./Definitions.css";

const Definitions = ({ word, category, meanings, LightMode }) => {
  return (
    <div className="definitions__meanings">
      {meanings[0] && word && category === "en" && (
          <audio src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio} controls>
            Your Browser does not support this audio element.
          </audio>
        )
      }
      {
        word==="" ? (
        <span className="definitions__subTitle">Start by typing a word in the Search</span>
         ) : (
           meanings.map((mean) => (
             mean.meanings.map((item) => (
               item.definitions.map((def) => (
                 <div className="definitions__singleMean"
                  style={{
                    backgroundColor: LightMode ? "#282c34" : "white",
                    color: LightMode ? "white" : "black",
                }}
                 >
                   <b>{def.definition}</b>
                   <hr />
                   {
                     def.example && (
                       <span>
                         <b>Example : </b>
                         {def.example}
                       </span>
                     )}
                     {def.synonyms && (
                        <span>
                          <b>Synonyms : </b>
                          {def.synonyms.map((s) => `${s}, `)}
                        </span>                       
                     )}
                 </div>
               ))
             ))
           ))
         )

      }
    </div>
  )
}

export default Definitions
