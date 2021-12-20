import { Component } from 'react'
import './App.css'
import * as C from './components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyle from './components/css/GlobalStyle/GlobalStyle'

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
        <GlobalStyle></GlobalStyle>
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
            <Route path="/share" element={<C.Share></C.Share>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
