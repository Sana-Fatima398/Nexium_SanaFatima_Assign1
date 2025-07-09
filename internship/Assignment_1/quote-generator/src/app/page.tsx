"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { useState } from 'react';

export default function Generate(){
    const [topic, setTopic] = useState("");
    const [bg, setBg] = useState("");
    const bgArray = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpeg","6.avif"];
    const qouteArray: { [key: string]: string[] } = 
    {
        happiness:[ "Happiness is not out there, it's in you.","The purpose of our lives is to be happy.","Do more of what makes you happy."],
        success:["Success is not final, failure is not fatal: It is the courage to continue that counts.","Success usually comes to those who are too busy to be looking for it.","The way to get started is to quit talking and begin doing."],
    }
    const [quote, setQuote] = useState<string[]>([]);
   
    
    const MakeChanges = () => {
        const key = topic.toLowerCase().trim();
        if (qouteArray[key]) {
            setQuote(qouteArray[key].slice(0, 3));
        } else {
            setQuote(["No quotes found for this topic."]);
        }
        setBg(`/` + bgArray[Math.floor(bgArray.length * Math.random())]);
    };

    return (
        
        <div className="flex items-center flex-col bg-cover h-screen bg-fade animate-fade" 
                    style={{ backgroundImage: `url(${bg})` }}>
            <div className='h-20'></div>
            <div >
              
                <Card className='h-96 w-96'>
                    <CardHeader className='text-center'>
                        <CardTitle className='text-2xl'>Quote Generator</CardTitle>
                        <CardDescription>Topices are: 
                            <span className='text-cyan-950'> happiness, success</span>
                        </CardDescription>
                        
                    </CardHeader>
                    <CardContent className='text-center'>
                        <div className="">
                            <Input  className="m-2 w-80" type="text" value={topic} onChange={(e) => setTopic(e.target.value)}/>
                            <Button className="w-80 h-10" onClick={MakeChanges}>Generate</Button>
                        </div>
                        <div className="m-2"  >
                            {quote.map((q, i) => (
                                <p key={i} className="text-cyan-950 italic animate-fade">
                                    “{q}”
                                </p>
                         ))}
                           
                        </div>
                    </CardContent>
                   
                </Card>
            </div> 
        
        </div>);
        
}





