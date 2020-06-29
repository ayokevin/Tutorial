import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

let nombre="Uriel";

function B(props){
  return <p>Hola {props.nombre}</p>;
}

function A(props){
  return <p>{props.nombre}: 10</p>;
}

function MiPrimerComponente(){
  return <p>Hola Mundo</p>;
}

class MiPrimerComponenteH extends Component{
  render(){
    return <p>Hola soy de la clase</p>;
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <A nombre="Uriel"/>
        <B nombre="Kevin"/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
