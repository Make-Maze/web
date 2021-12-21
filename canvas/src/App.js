import { Component } from 'react'
import './App.css'
import * as C from './components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ResultContextProvider } from './Context/Data' //provider 불러오기

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
        <ResultContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<C.Start></C.Start>}></Route>
              <Route
                path="/Draw"
                element={
                  <C.Canvas
                    select={this.state.select}
                    onSelectChange={function (_select) {
                      this.setState({
                        select: _select,
                      })
                    }.bind(this)}
                  ></C.Canvas>
                }
              ></Route>
              <Route path="/User" element={<C.User></C.User>}></Route>
            </Routes>
          </BrowserRouter>
        </ResultContextProvider>
      </div>
    )
  }
}

export default App
