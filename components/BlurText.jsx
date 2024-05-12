import React from "react"

const BlurText = ({text, link}) => {


return (
    <a href={link}>
            <h1 className="blur-m hover:blur-0 p-4 transition-all lg:floating hover:animate-none">
                    {text}
            </h1>
    </a>
)
}

export default BlurText