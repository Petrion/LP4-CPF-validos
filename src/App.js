import React, { Component } from 'react';
import './App.css';
import { cpfMask } from './mask'
import { isCpf } from "validator-brazil";


class App extends Component {
  constructor(props) {
    super(props)

    this.state = { documentId: '' }
    this.handlechange = this.handlechange.bind(this)
  }

  handlechange(e) {

    this.setState({ documentId: cpfMask(e.target.value)})
    
  }

 
  render() {
    const { documentId } = this.state
    return (
      <div className="App">        
        <input 
          maxLength='14'
          name='documentId'
          value={documentId}
          placeholder="Digite o CPF" 
          onChange={this.handlechange}
        />
        <button className="botao">Validar</button>
      </div>

      
    )    
  }
}

export default App