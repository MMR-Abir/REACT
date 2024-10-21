import React,{useState} from 'react'



export default function App1() {
   const [search_term, setSearchTerm] = useState();
    function Search(){
        alert (search_term);
    }
  return (
    <>
        <form>
            <input type="text" name="search_term" value={search_term}  onChange={(e) => setSearchTerm(e.target.value)} placeholder='Enter Something'/>
            <button type='submit' onClick={Search}>Search</button>
        </form>
    </>
  )
}
