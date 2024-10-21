import React,{useState} from 'react'

export default function Count_Button() {

    const [count, setCount] = useState(0);

    function HandleClick(){
        setCount(count + 1);
    }
  return (
    <>
        <button onClick ={HandleClick}>Count_Button</button> <br /> <br />
        you have clicked {count} times
    </>
  )
}
