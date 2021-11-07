import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import {server} from '../config';
import axios from "axios";

function FunctionalcomponentCreate() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function postData(){
        console.log(email);
        console.log(password);
        axios({
            method: 'POST',
            url: server + '/login',
            // data: bodyFormData,
            headers: { 'Content-Type': 'application/json' },
            data : { email : email, password : password }
        })
        .then(function (response) {
            console.log(response);
            sessionStorage.setItem("token", response.data.token);
        })
        .catch(function (response) {
            //handle error

        });
        
    }

    function getData(){
        var token = sessionStorage.getItem("token");
        axios({
            method: 'get',
            url: server + '/user',
            headers: { 'Content-Type': 'application/json', 'Authorization' : 'Bearer '+ token}
        })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (response) {
            //handle error

        });
    }

    return (
        <div>
          <Form className="create-form">
              <Form.Field>
                  <label>Email</label>
                  <input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} name="Email"/>
              </Form.Field>
              <Form.Field>
                  <label>Password</label>
                  <input placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} name="Password"/>
              </Form.Field>
              {/* <Form.Field>
                  <Checkbox label='I agree to the Terms and Conditions' onChange={(e) =>this.checkbox(!checkbox)}/>
              </Form.Field> */}
              <Button onClick={postData} type='submit'>Submit</Button>
          </Form>
            <Button onClick={getData} type='submit'>get Items</Button>
        </div>
    );

    // const      [user, setUser] = useState({});
    // const      [formErrors, setFormErrors] = useState({});
 
                                                             
 
        
    // return (
    //   <div className='App container col-6'>
    //     <h3>New User Registration Form</h3>
    //     <form noValidate>
    //       <div className='row'>
    //         <div className='col-md-6'>
    //           <label htmlFor='Email'>First Name</label>
    //           <input
    //             className='form-control'
    //             placeholder='First Name'
    //             type='text'
    //             name='Email'
    //             noValidate
    //           />
    //         </div>
    //         <div className='col-md-6'>
    //           <label htmlFor='Password'>Last Name</label>
    //           <input
    //             className='form-control'
    //             placeholder='Last Name'
    //             type='text'
    //             name='Password'
    //             noValidate
    //           />
    //         </div>
    //       </div>
 
    //       <div className='mb-3'>
    //         <label htmlFor='email'>Email</label>
    //         <input
    //           className='form-control'
    //           placeholder='Email'
    //           type='email'
    //           name='email'
    //           noValidate
    //         />
    //       </div>
    //       <div className='mb-3'>
    //         <label htmlFor='password'>Password</label>
    //         <input
    //           className='form-control'
    //           placeholder='Password'
    //           type='password'
    //           name='password'
    //           noValidate
    //         />
    //       </div>
    //       <div className='mb-3'>
    //         <label htmlFor='confirmpassword'>Confirm Password</label>
    //         <input
    //           className='form-control'
    //           placeholder='Password'
    //           type='password'
    //           name='confirmpassword'
    //           noValidate
    //         />
    //       </div>
    //       <div className='mb-3'>
    //         <button type='submit'>Create Account</button>
    //       </div>
    //     </form>
    //   </div>
    // );
}

export default FunctionalcomponentCreate;