import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import FunctionalcomponentCreate from './functionalcomponent/create';

function FunctionalApp(){

    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <Link to={"/create1"} className="nav-link">
                        Functional Component Create
                    </Link>
                    <Link to={"/edit/1"} className="nav-link">
                        Functional Edit
                    </Link>
                    </li>
                </div>
            </nav>

            <div className="container mt-3">
                <Switch>
                    <Route exact path={["/create1"]} component={FunctionalcomponentCreate} />
                </Switch>
                <br></br>
            </div>
        </div>
    );
};


export default FunctionalApp;