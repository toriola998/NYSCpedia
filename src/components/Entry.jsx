import React from "react";

function Entry(props){

    return <div className="container"> 
    <div className="term">
        <dt>{props.name}</dt>
    
        <dd>{props.meaning}<br/>
            <span className="description">{props.description}</span>
        </dd>
  </div>
  </div>
}

export default Entry;