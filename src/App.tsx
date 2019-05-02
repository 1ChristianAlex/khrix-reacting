import React from 'react';
import logo from './logo.svg';
import './App.css';

export class App extends React.Component{
  constructor(props:any){
    super(props)
    this.Idk = this.Idk.bind(this);
  }
  
  public Idk(){
    let arraName = ['React', 'Native','Angular',"Node","Ionic"]
    return (
      <div className = 'container'>
      {arraName.map(item=>{  
        return  <div className="name">
        <h1>
        {item}
        </h1>
        </div>
      })}
      </div>)
      
    }
    public render(){
      return (
        <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
        Learn React
        </a>
        </header>
      <this.Idk/>
        </div>
        
        )
        
      }
      
    }
    
    