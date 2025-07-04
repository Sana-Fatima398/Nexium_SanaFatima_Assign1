"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { useState } from 'react';

export default function Generate(){
    const qouteArray = ["Live Well", "Stay Healthy", "Be Happy", "Work Hard", "Play Hard", "Love Deeply", "Laugh Often", "Dream Big", "Stay Positive", "Embrace Change"];
    const [quote, setQuote] = useState("");
    const randomIndex = Math.floor(qouteArray.length*Math.random());
   
    
    return (
        <div className="flex items-center justify-center flex-col">
            <div className='h-20'></div>
            <div >
                <Card className='h-72 w-96'>
                    <CardHeader className='text-center'>
                        <CardTitle>Quote Generator</CardTitle>
                        <CardDescription>Click the button to Genrate a quote</CardDescription>
                        
                    </CardHeader>
                    <CardContent className='text-center'>
                        <div className="m-2">
                            <Button className="w-32" onClick={()=>setQuote(qouteArray[randomIndex])}>Click me</Button>
                        </div>
                        <div className="m-8">
                            <h2>{quote}</h2>
                        </div>
                    </CardContent>
                   
                </Card>
            </div>
            
        </div>);
        
}




