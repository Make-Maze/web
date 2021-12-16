import { Component } from 'react'
import Canvas from './components/canvas'
import Share from './components/Share'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      select: 'wall',
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Canvas
                  select={this.state.select}
                  onSelectChange={function (_select) {
                    this.setState({
                      select: _select,
                    })
                  }.bind(this)}
                ></Canvas>
              }
            ></Route>
            <Route path="/share" element={<Share></Share>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
