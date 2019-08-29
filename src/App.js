import React,{Component} from 'react';
import './App.css';
import Person from "./Person";
class App extends Component{
  state={
  person:[
    {name:"Waqas",age:23},
    {name:"Zain",age:21},
    {name:"Usama",age:19}
  ]
  }

  nameHandler=()=>{
    this.setState({
      person:[
        {name:"Waqas Ahmed",age:23},
        {name:"Rana Zain",age:21},
        {name:"Rana Usama",age:19}
      ]
    } )
  }
render(){
  return(
    <div className="App">
      <button onClick={this.nameHandler}>Change the name</button>
      <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
      <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
      <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
    </div>
  )
}
}

export default App;
