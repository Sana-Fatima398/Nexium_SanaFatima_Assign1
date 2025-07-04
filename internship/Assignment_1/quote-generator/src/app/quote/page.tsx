"use client";

import React from 'react';
import { useState } from 'react';

export default function Generate(){
    const qouteArray = ["Live Well", "Stay Healthy", "Be Happy", "Work Hard", "Play Hard", "Love Deeply", "Laugh Often", "Dream Big", "Stay Positive", "Embrace Change"];
    const [quote, setQuote] = useState("");
    const randomIndex = Math.floor(qouteArray.length*Math.random());
   
    
    return (
        <div>
            <div><h1>Click the button to Genrate a quote</h1></div>
            
             <button onClick={()=>setQuote(qouteArray[randomIndex])}>Click me</button>
             <h2>{quote}</h2>

        </div>);
        
}




