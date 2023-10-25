
import Rect,{useEffect,useState} from "react"
import MyComponent from "./MyComp";
import Timer from "./Timer";
import './App.css';

function App() {

  const [isVisible,setVisible] = useState(true)

  useEffect(()=>{
    console.log("App Component am Mounting....")
  },[])

  return <div className="App">
    { isVisible ? <MyComponent /> : <></> }
    <button onClick={()=> setVisible(!isVisible)}>Toggle</button>
    <Timer />
  </div>;
}

export default App;
