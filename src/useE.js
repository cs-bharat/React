import { useEffect, useState } from "react";

const UseE = () => {
    
    const [timer, setTimer] = useState(0);
    const [color, setColor] = useState('red');

    const changeColor = () => {
        let _color = color == "red" ? "pink" : "red";
        setColor(_color);
    }

    useEffect(()=>{
        setTimeout(()=>{
            setTimer((count) => count + 1);
        },1000);
    },[color]);
    return(
        <div>
            <h1> I have rendered {timer} times</h1>
             <button onClick={changeColor}>changeColor</button>
        </div>
    );
}

export default UseE;