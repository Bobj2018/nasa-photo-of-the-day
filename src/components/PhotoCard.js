import React from 'react';

export default function PhotoCard({title, date, hdurl, explanation}) {
return (
    <div>
    <img src={hdurl}/>
    <h2>{ title }</h2>
    <p>{date}</p>
    <p>{explanation}</p>
    </div>
)
}
