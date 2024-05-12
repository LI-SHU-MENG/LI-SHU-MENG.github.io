import React from 'react'
import BlurText from './BlurText'

const Sidebar = ({active}) => {
    
return (
    <div className="w-1/4 h-full flex flex-col text-xl bg-white">
        {active=="Bibliography" ? <BlurText text="Bibliography" link="/biblio" float={false} blur={false}/>
        : <BlurText text="Bibliography" link="/biblio" float={false} blur={true}/>}

        {active=="Works" ? <BlurText text="Works" link="/works" float={false} blur={false}/>
        : <BlurText text="Works" link="/works" float={false} blur={true}/>}

        {active=="CV" ? <BlurText text="CV" link="/cv" float={false} blur={false}/>
        : <BlurText text="CV" link="/cv" float={false} blur={true}/>}

        {active=="Contact" ? <BlurText text="Contact" link="/contact" float={false} blur={false}/>
        : <BlurText text="Contact" link="/contact" float={false} blur={true}/>}
    </div>
)
}

export default Sidebar