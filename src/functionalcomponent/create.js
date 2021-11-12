import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import {server} from '../config';
import axios from "axios";
import Modal from 'react-modal';
import { Redirect,Route  } from 'react-router';

function FunctionalcomponentCreate() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalIsOpen,setModalIsOpen] = useState(false);
    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    const [data, setData] = useState(null);  
    let url = './functionalcomponent/dashboard';

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
            // console.log(response.data);

            if(response.data.code == 200){
                window.location = url;
            }else{
                
                if(response.data.success){
                    const message = response.data.success;
                    setData(message);
                    setInterval(setData, 3000).hide();

                }
            }
        })
        .catch(function (response) {
            //handle error

        });
    }

    function RegisterData(){
        console.log(email);
        console.log(password);
        axios({
            method: 'POST',
            url: server + '/register',
            // data: bodyFormData,
            headers: { 'Content-Type': 'application/json' },
            data : { email : email, password : password }
        })
        .then(function (response) {
            console.log(response);
            // sessionStorage.setItem("token", response.data.token);
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
<ul className="nav nav-tabs" role="tablist">
  <li className="nav-item">
    <a className="nav-link active" href="#login" role="tab" data-toggle="tab">Login</a>
  </li>

  <li className="nav-item">
    <a className="nav-link" href="#register" role="tab" data-toggle="tab">Register</a>
  </li>
</ul>

<div className="tab-content">
  <div role="tabpanel" className="tab-pane fade show  active" id="login">

  <h2 className="center"><b>Login Form</b></h2>
  <h4 className="center" style={{color: "red"}}> {data} </h4>
            <button style={{float: "right"}} className="btn btn-success center" onClick={setModalIsOpenToTrue}>Register</button>
          <Form className="create-form">
              <span className="show_message"></span>
              <Form.Field>
                  <label>Email</label>
                  <input placeholder='Email' className="form-control" value={email} onChange={e => setEmail(e.target.value)} name="Email"/>
              </Form.Field>
              <Form.Field>
                  <label>Password</label>
                  <input placeholder='Password' className="form-control" value={password} onChange={e => setPassword(e.target.value)} name="Password"/>
              </Form.Field>
              {/* <Form.Field>
                  <Checkbox label='I agree to the Terms and Conditions' onChange={(e) =>this.checkbox(!checkbox)}/>
              </Form.Field> */}
              <button  onClick={postData} style={{margin: "12px 3px"}} className="btn btn-primary center" type='submit'>Submit</button >
          </Form>
            <button  className="btn btn-success center" onClick={getData} type='submit'>get Items</button >
            

  </div>
  <div role="tabpanel" className="tab-pane fade" id="register">

    <h2 className="center"><b>Register Form</b></h2>
        <Form className="create-form">
                <Form.Field>
                    <label>Email</label>
                    <input type="email" placeholder='Email' className="form-control" onChange={e => setEmail(e.target.value)} name="Email"/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input type="password" placeholder='Password' className="form-control"  onChange={e => setPassword(e.target.value)} name="Password"/>
                </Form.Field>
                {/* <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) =>this.checkbox(!checkbox)}/>
                </Form.Field> */}
                <button  onClick={RegisterData} style={{margin: "12px 3px"}} className="btn btn-primary center" type='submit'>Submit</button >
        </Form>  
    </div>
</div>

<Modal isOpen={modalIsOpen}>
    <button onClick={setModalIsOpenToFalse}>x</button>

    <h2 className="center"><b>Register Form</b></h2>
    <Form className="create-form">
              <Form.Field>
                  <label>Email</label>
                  <input placeholder='Email' className="form-control" value={email} onChange={e => setEmail(e.target.value)} name="Email"/>
              </Form.Field>
              <Form.Field>
                  <label>Password</label>
                  <input placeholder='Password' className="form-control" value={password} onChange={e => setPassword(e.target.value)} name="Password"/>
              </Form.Field>
              {/* <Form.Field>
                  <Checkbox label='I agree to the Terms and Conditions' onChange={(e) =>this.checkbox(!checkbox)}/>
              </Form.Field> */}
              <button  onClick={RegisterData} style={{margin: "12px 3px"}} className="btn btn-primary center" type='submit'>Submit</button >
          </Form>
    {/* <AnimeList/> */}
</Modal>
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