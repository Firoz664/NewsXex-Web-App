
import React, { Component } from 'react'
import './App.css';
import News from './components/News';
import NabBar from './components/NabBar'

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from './components/About';
import PreNavbar from './components/PreNavbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Form from './components/Form';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize=12;
  apiKey= "79d0afe0b4aa42aba8e7724c42975145";
  state = {
    progress:0

  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
 
  render() {
    return (
      <div className="App">
      
         <Router>
         <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
        <NabBar />
        <PreNavbar/>
        
        <Switch>
        <Route exact path="/"><News  setProgress={this.setProgress} key="general" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="general"/></Route>
           <Route exact path="/about"><About/></Route> 
          <Route exact path="/general"><News  setProgress={this.setProgress} key="general"pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="general"/></Route> 
          <Route exact path="/business"><News  setProgress={this.setProgress} key="business"pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News  setProgress={this.setProgress} key="entertainment"pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News  setProgress={this.setProgress} key="general"pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="general"/></Route> 
          <Route exact path="/health"><News  setProgress={this.setProgress} key="health"pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="health"/></Route> 
          <Route exact path="/science"><News  setProgress={this.setProgress} key="science"pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News  setProgress={this.setProgress} key="sports"pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News  setProgress={this.setProgress} key="technology"pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="technology"/></Route> 
          <div className="container my-5">
          <Route exact path="/contact"><Contact setProgress={this.setProgress} key="contact" /></Route> 
          <Route exact path="/signup"><Form setProgress={this.setProgress} key="signup" /></Route> 

          </div>
          
          </Switch>
          <Footer/>
          </Router> 
      </div>
     
    )
  }
}

