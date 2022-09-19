import Header from './components/Header';
import './App.css';

function App() {
  const element ={principal:"red"}
  const userNames = ["zada","jas","mika","meerim","jose","anar"]
  return (
    <div className="App">
    <header className="App-header">
      {
        userNames.map(user=><Header userName = {user}
        greeting = "Good bye" 
        tacos ="beans" 
        color={element
        }/>)
      }
    
    </header>
    </div>
  );
}

export default App;
