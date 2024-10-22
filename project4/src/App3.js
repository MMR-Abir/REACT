import React,{useState} from 'react'
 
     
export default function App3() {
    const [Profile, setProfile] =    useState({
        Name:"",
        Email:"",
        Gender:"",
        BirthPlace:"",
        Address:"",
        Contact:""

    });

    

  const ProfileChange = (event) =>{
    setProfile(oldsetProfile => {
        return {
            ...oldsetProfile, [event.target.name]:event.target.value
        }
    })
  }
    
  
  const handelSubmit = (e) =>{
        e.preventDefault();
        let output = Profile.Name + "\n";
        output += Profile.Email + "\n";
        output += Profile.Gender + "\n";
        output += Profile.BirthPlace + "\n";
        output += Profile.Address + "\n";
        output += Profile.Contact + "\n";


        alert(output);
  }


  return (
    <>
        <h1>Student Information</h1>
        
        <form onSubmit={handelSubmit}>
             Name: <br />
            <input type="text" name="Name" value={Profile.Name} onChange={ProfileChange} /> <br />

            Email:   <br />
            <input type="text" name="Email" value={Profile.Email} onChange={ProfileChange} /> <br />

            Gender: <br />
            <input type="radio" name="Gender" cheacked={Profile.Gender=='Male'} value="Male" onChange={ProfileChange} />Male 
            <input type="radio" name="Gender" checked={Profile.Gender=='Female'} value="Female" onChange={ProfileChange} />Female <br />

            Birth Place: <br />
            <select name="BirthPlace"  value={Profile.BirthPlace} onChange={ProfileChange} >
                <option>Select One</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Khulna">Khulna</option>
                <option value="Cumilla">Cumilla</option>
                <option value="Barishal">Barishal</option>
            </select>   <br />

            Address: <br />
            <textarea name="Address" value={Profile.Address} onChange={ProfileChange} ></textarea>  <br />

            Contact: <br />
            <input type="text" name="Contact" value={Profile.Contact} onChange={ProfileChange} /> <br />

            <button >Click Here</button>
        </form>

        
    </>
  )
}
