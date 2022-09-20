
import React, { Component } from 'react'
import News from './components/News'
import Navbar from './components/Navbar'
import LoadingBar from 'react-top-loading-bar'
import {
 BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {


    state={
      progress:0
    }

setProgress=(progress)=>{
  this.setState({progress:progress})
}
  pageSize=15
  render() {
    return (
      <div>
        < BrowserRouter>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
        height={2.5}
        
      />
        <Navbar/>
        <Routes>
          <Route path="/"  element={<News setProgress={this.setProgress} pageSize={this.pageSize}  category="general"/>}/>
        </Routes>
        <Routes>
          <Route path="/sports"  element={<News setProgress={this.setProgress}  pageSize={this.pageSize}  category="sports"/>}/>
        </Routes>
        <Routes>
          <Route path="/business"  element={<News setProgress={this.setProgress}  pageSize={this.pageSize}  category="business"/>}/>
        </Routes>
        <Routes>
          <Route path="/entertainment"  element={<News setProgress={this.setProgress}  pageSize={this.pageSize}  category="entertainment"/>}/>
        </Routes> <Routes>
          <Route path="/health"  element={<News setProgress={this.setProgress}  pageSize={this.pageSize}  category="health"/>}/>
        </Routes> <Routes>
          <Route path="/science"  element={<News setProgress={this.setProgress}  pageSize={this.pageSize}  category="science"/>}/>
        </Routes> <Routes>
          <Route path="/technology"  element={<News setProgress={this.setProgress}  pageSize={this.pageSize}  category="technology"/>}/>
        </Routes>
        </ BrowserRouter>
      </div>
      
    )
  }
}

