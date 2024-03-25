import React, { useEffect }  from 'react';
import './Test.css'
import VaraText from '../../components/VaraText/VaraText';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";

const Test = () => {
    return (
        
        <div>
            <ParticleBackground />
            <img className="test" src="https://pictures.abebooks.com/isbn/9780349437002-us.jpg"/>
            <VaraText text="Fourth Wing"/>
        </div>
    )
}
export default Test;

