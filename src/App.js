import './App.css';
import { useState } from "react";



function App() {
const [one, setOne] = useState("");
const [two, setTwo] = useState("");

  return (
    <div className="App">

<input onChange={(e)=>{
setOne(e.target.value)
}} type="number"/>
<input type="number"onChange={(e)=>{
setTwo(e.target.value)
}} />
<button onClick={()=>{

if(one==0 || two==0){
alert("заполните поля")
}
else{

alert(+one + +two)}
}}>плюс</button>
<button onClick={()=>{

if(one==0 || two==0){
alert("заполните поля")
}
else{

alert(+one - +two)}
}}>минус</button>
<button onClick={()=>{

if(one==0 || two==0){
alert("заполните поля")
}
else{

alert(+one * +two)}
}}>умножить</button>
<button onClick={()=>{

if(one==0 || two==0){
alert("заполните поля")
}
else{

alert(+one / +two)}
}}>разделить</button>
</div>
)

}

export default App;
