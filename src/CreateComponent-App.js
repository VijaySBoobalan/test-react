
import React, { Component } from "react";

import './App.css';
import Create from './classcomponents/create';
import { Route, Switch, Link } from 'react-router-dom'

class App extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         count :0
    //     };
    // }
    
    // increase = () => {
    //     this.setState({count: this.state.count +1});
    // }

    render(){
        return (
            <div>
              <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link to={"/create"} className="nav-link">
                      Class Component Create
                    </Link>
                    <Link to={"/edit/1"} className="nav-link">
                      Edit
                    </Link>
                  </li>
                </div>
              </nav>

              <div className="container mt-3">
                <Switch>
                  <Route exact path={["/create"]} component={Create} />
                </Switch>
              </div>
            </div>
            // <div style={{margin:'50px'}}>
            //     <h1>Welcome to Geeks for Geeks </h1>
            //     <h3>Counter App using Class Component : </h3>
            //     <h2> {this.state.count}</h2> 
            //     <button onClick={this.increase}> Add</button>

            // </div>
        )
    }
        // constructor(props) {
        //     super(props);
        //     this.state = {favoritecolor: "red"};
        // }
        // componentDidMount() {
        //     setTimeout(() => {
        //         this.setState({favoritecolor: "yellow"})
        //     }, 5000)
        // }
        // render() {
        //     return (
        //     <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        //     );
        // }
}

export default App;
