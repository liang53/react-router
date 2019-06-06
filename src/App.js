import React, {Component} from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
// import logo from './logo.svg';
// import './App.css';

import Home from './components/Home';


class App extends Component {
  constructor(){
    super();
    this.state = {
      accountBalance: 14568.27
    }
  }


  render(){
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={HomeComponent}/>
        </Switch>
      </Router>
    );
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
