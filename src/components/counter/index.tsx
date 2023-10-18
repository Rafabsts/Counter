import React, { Component } from 'react';

interface ContadorProps {
  titulo: string;
}

interface ContadorState {
  contador: number;
}

class Contador extends Component<ContadorProps, ContadorState> {
  constructor(props: ContadorProps) {
    super(props);
    this.state = {
      contador: 0
    };
  }

  incrementar = () => {
    this.setState(prevState => ({
      contador: prevState.contador + 1
    }));
  }

  decrementar = () => {
    this.setState(prevState => ({
      contador: prevState.contador - 1
    }));
  }

  resetar = () => {
    this.setState({
      contador: 0
    });
  }

  render() {
    return (
      <div>
        <h2>{this.props.titulo}</h2>
        <p>Contador: {this.state.contador}</p>
        <button onClick={this.incrementar}>Incrementar</button>
        <button onClick={this.decrementar}>Decrementar</button>
        <button onClick={this.resetar}>Resetar</button>
      </div>
    );
  }
}

export default Contador;
