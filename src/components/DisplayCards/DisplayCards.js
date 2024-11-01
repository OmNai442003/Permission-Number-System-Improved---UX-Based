import React from 'react'
import './DisplayCards.css'

// function DisplayCards(props) {
//     return (
//         <div className="card">
//             <div className="card-body">
//                 <strong><h5 className="card-title">{props.name}</h5></strong>
//                 <p className="card-text">{props.value}</p>
//             </div>
//         </div>
//     )
// }

// New Implement
// Object destruct
function DisplayCards({name, value}) {
    return (
        <div className="card">
            <div className="card-body">
                <strong><h5 className="card-title">{name}</h5></strong>
                <p className="card-text">{value}</p>
            </div>
        </div>
    )
}

export default DisplayCards