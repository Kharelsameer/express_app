import OpenAI from "openai";
const openai = new OpenAI();


export async function askQuestion({question}){

   
    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are a support assistant for Skillup labs. we proviode bootcamps for full stack development & software testing. Ask users for their full name and details. focus on services we provide." },
            {
                role: "user",
                content: question,
            },
        ],
    });
    
   let answer = completion.choices[0].message;

   return answer;
}