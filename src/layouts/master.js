import React, {useState} from 'react';

import Header from './header';

import { Button, Form } from 'semantic-ui-react'

function Master() {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');

    function postData(){
        console.log(email);
        console.log(password);
        console.log(confirmpassword);
    }


    return (
        <div className="App">
            <Header />

            <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
                <form>
                    <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" 
                        className="form-control" 
                        id="email" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email"
                        value={email} onChange={e => setemail(e.target.value)}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" 
                            className="form-control" 
                            id="password" 
                            placeholder="Password"
                            value={password} onChange={e => setpassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputPassword1">Confirm Password</label>
                        <input type="password" 
                            className="form-control" 
                            id="confirmPassword" 
                            placeholder="Confirm Password"
                            value={confirmpassword} onChange={e => setconfirmpassword(e.target.value)}
                        />
                    </div>
                    <Button onClick={postData} type='submit'>Submit</Button>
                </form>
            </div>
        </div>
    )
}
export default Master;