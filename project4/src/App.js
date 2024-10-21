import React from 'react'
import { Fruits } from './Fruits'
import Count_Button from './Count_Button';



const Items = Fruits.map( fruit=>
    <li key = {fruit.Id}

     style={{
        color:fruit.Local?'Green' : 'Red'
    }}>

     {fruit.Name}</li>

)
function MyButton(){
    function HandelClick(){
        alert ("You have Clicked");
    }
    return(
        <button  className="Blue" onClick={HandelClick}>Click Me</button>
    )
}



    const user = {
        Name:"iTACHI",
        ImgUrl:"IMAGE/ITACHI.webp",
        ImgSize:"100"
    }


export default function App() {
  return (
    

    <>
        <div>Welcome to my App</div>
        <MyButton/>
        <h1>{user.Name}</h1>
        <img src = {user.ImgUrl} alt = {user.Name} style = {{ width:'200px' }}/>

        <ul>{Items}</ul>

        <Count_Button/>

        

        

    </>
  )
}
