import React from "react"

const BlurText = ({text, link, float=true, blur}) => {

if(float)
    return (
        <a href={link}>
            <h1 className="blur-m w-auto hover:blur-0 p-4 transition-all lg:floating hover:animate-none">
                {text}
            </h1>
        </a>
    )
else
    if(blur)
        return (
            <a href={link}>
                <h1 className="blur-sm w-auto hover:blur-0 py-4 pl-20 transition-all hover:animate-none">
                    {text}
                </h1>
            </a>
        )
    else
        return (
            <a href={link}>
                <h1 className="w-auto py-4 pl-20 transition-all hover:animate-none">
                    {text}
                </h1>
            </a>
    )
}

export default BlurText