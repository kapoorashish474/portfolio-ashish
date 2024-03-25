import React, { useEffect }  from 'react';
import Vara from 'vara';
import "./VaraText.css";
const VaraText = ({text}) => {
    useEffect( () => {
      var vara = new Vara(
        "#vara-container",
        "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
        [
          {
            text: "hello",
            fontSize: 40,
            strokeWidth: 1,
          },
        ]
      );
      console.log("Vara initialised")
    }, []);
    return <div id="vara-container" ></div>;
}
export default VaraText;

