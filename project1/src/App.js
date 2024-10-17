import Header,{msg} from './header.js';
import Footer from './footer.js';
import News,{data} from './News.js';
import mylist from './List.js';

function App() {
  return (
   
      <div>
        <Header/>
        {msg}
        <p>lorem50</p>

        <h1> {data.title}</h1>
        <p>{data.details} </p>

        <News/>

        <ul>
          {mylist.map(function (item) {
          return (
            <>
            <h1>
            title: {item.title}
            </h1>
            <br/>

            <p>
            URL: {item.url}
            </p>
            <br/>

            <h4>
            Author: <b>{item.author}</b>
            </h4>
             <br/>

            <b>{item.num_comments}</b>
            

            </>
            
            );

          })}
          </ul>

        <Footer/>
      </div>
    
  );
}

export default App;
