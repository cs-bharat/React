import { useEffect, useState } from 'react'; // import usestate hook

const App = () => {

  const [mode,setMode] = useState('dark');   // usestate for mode state
  // const [darkMode, setDarkMode] = useState(true);  //  best approach
  // const handleMode = ( )=> {
  //   setDarkMode(!darkMode);
  // }

  const  [number, setNumber] = useState(5);   // usestate for number state
  // setNumber(10);

  const [color,setcolor] = useState('red'); // usestate for color state

  const add = () => { // erro function
    // increment functions =>  state is increment by 1
    let temp = number;   // copy the current state of number
    setNumber(++temp); // updating state of number state
  }

  const sub = () => {
    // decrement function => state is decrement by 1
    let temp = number;   // copy the current state of the number 
    setNumber(--temp);  // update state
  }

  // change mode function handles change in mode state
  const changeMode = () => {
    let _mode = mode == "dark" ? "light"  : "dark";   
    setMode(_mode);
  }
  
  const changecolor =() =>{ 
      let _color = color == "red" ? "green" : "red";
      setcolor(_color);
  }

  const decToBinary = (num) =>{
    // let dec = num;
    let power = 0; 
    let binary = 0;

    while(num > 0) {
      // console.log('number',num);
      let remainder = num % 2;
      // console.log("remain ", remainder);
      binary = binary + (remainder * ( 10 ** power));
      // console.log("bin", binary);
      
      power++;
      num = Math.floor(num/2);
    }
    return binary;
  }
   
  // console.log(decToBinary(10));

  //  useEffect(()=>{
  // //  console.log(decToBinary(10));
  // },[])
  

  

  return (
    <div className={`${mode == 'dark' ? "bg-blue-900 text-white" : "bg-white text-blue-900"}`}> 
      <p>
        <span className='text-green-700'>My number : </span>
        <span className='text-green-700'>{number}</span>
      </p>
      <button onClick={add}>add</button>
      <br />
      <button onClick={sub}>sub</button>
      <br />
      <button onClick={changeMode}>{mode}</button>
      <br/>
      <button onClick={changecolor} className={`${color == "red" ? "text-red-900" : "text-green-800"}`}>bharat</button>
    </div>
  );
}

export default App;
