import React,{useState} from 'react'
 
     
export default function App2() {
    const [car, setCar] =    useState({
        Modal:"Toyota",
        Color:"White",
        Year:2021,
        Price:"1 Corer"

    });

    

  const HandelChange = () =>{
    setCar(oldiNfo => {
        return {
            ...oldiNfo, Color:"Black", Engine:"2500hp"
        }
    })
  }
    
  console.log(car);
  return (
    <>
        <h1>Car Information</h1>
        <p>
            Model:{car.Modal},<br/>  Color:{car.Color}, <br/> Year:{car.Year}, <br/> Price:{car.Price}
        </p>

        <button onClick={HandelChange} >Click Here</button>
    </>
  )
}
