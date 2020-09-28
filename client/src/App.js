import React, { Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from "./containers/Home";
import AddPage from './containers/AddPage';
import ReferAddPage from './containers/ReferAddPage';

class App extends Component {
  
  render(){

    console.log(this.state)
    return(
      <Router>
        
        <Switch>
          <Route exact path='/' component={AddPage} />
          <Route path='/admin' component={Home} />
          <Route path='/refer/:code' component={ReferAddPage}/>
          {/* <Route exact path='/add/:id' component={ReferAddPage} /> */}
          
        </Switch>
        
      </Router>
    );
  }
}


export default App;
