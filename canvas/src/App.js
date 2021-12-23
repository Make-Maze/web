import { Component } from 'react'
import './App.css'
import * as C from './components'
import * as P from './Pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ResultContextProvider } from './Context/Data' //provider 불러오기
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     select: 'wall',
  //   }
  // }

  render() {
    return (
      <div className="App">
        <ResultContextProvider>
          <BrowserRouter>
            <ToastContainer />
            <Routes>
              <Route path="/" element={<P.StartPage></P.StartPage>}></Route>
              {/* <Route
                path="/Draw"
                element={
                  <C.Draw
                    select={this.state.select}
                    onSelectChange={function (_select) {
                      this.setState({
                        select: _select,
                      })
                    }.bind(this)}
                  ></C.Draw>
                }
              ></Route> */}
              <Route path="/Draw" element={<P.DrawPage></P.DrawPage>}></Route>
              <Route path="/User" element={<P.UserPage></P.UserPage>}></Route>
              <Route
                path="/Share"
                element={<P.SharePage></P.SharePage>}
              ></Route>
              <Route
                path="/*"
                element={<P.NotFoundPage></P.NotFoundPage>}
              ></Route>
            </Routes>
          </BrowserRouter>
        </ResultContextProvider>
      </div>
    )
  }
}

export default App
