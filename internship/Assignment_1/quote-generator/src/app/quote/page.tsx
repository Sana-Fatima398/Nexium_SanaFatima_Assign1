import React from 'react';
export default function Generate(){
    const qouteArray = ["Live Well", "Stay Healthy", "Be Happy", "Work Hard", "Play Hard", "Love Deeply", "Laugh Often", "Dream Big", "Stay Positive", "Embrace Change"];
    const randomIndex = Math.floor(qouteArray.length*Math.random());
    return (
        <div>
            <div><h1>Click the button to Genrate a quote</h1></div>
            <div><button>CLick me</button></div>
            <div><h2>{qouteArray[randomIndex]}</h2></div>

        </div>);
        
}

