import { Component } from 'react';
import './App.css';
import Canvas from './components/canvas'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      select: "wall"
    }
  }

  render(){
    return (
      <div className="App">
        <div>
          <Canvas select={this.state.select} onSelectChange={function(_select){
            this.setState({
              select: _select
            })
          }.bind(this)}></Canvas>
        </div>
      </div>
    );
  }
}

export default App;
