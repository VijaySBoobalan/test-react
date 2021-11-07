import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: null,
      LastName: null,
      // checkbox: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // handleChange = (event) => {
  //   this.setState({
  //     [event.target.name] : event.target.value,
  //   });
  // }

  handleChange(event) {
    this.setState({ 
        [event.target.name]: event.target.value,
    });
}

  postData(){
    var data = {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName
    };
    console.log(data);
  }
    render() {
      return (
        <div>
          <Form className="create-form">
              <Form.Field>
                  <label>First Name</label>
                  <input placeholder='First Name' onChange={this.handleChange} name="FirstName" value={this.FirstName}/>
              </Form.Field>
              <Form.Field>
                  <label>Last Name</label>
                  <input placeholder='Last Name' onChange={this.handleChange} name="LastName" value={this.LastName}/>
              </Form.Field>
              {/* <Form.Field>
                  <Checkbox label='I agree to the Terms and Conditions' onChange={(e) =>this.checkbox(!checkbox)}/>
              </Form.Field> */}
              <Button onClick={() => this.postData()} type='submit'>Submit</Button>
          </Form>
        </div>
      );
    }
}
// export default function Create() {
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [checkbox, setCheckbox] = useState(false);
    // const postData = () => {
    //     console.log(firstName);
    //     console.log(lastName);
    //     console.log(checkbox);
    // }
//     return (
//         <div>
//             <Form className="create-form">
//                 <Form.Field>
//                     <label>First Name</label>
//                     <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
//                 </Form.Field>
//                 <Form.Field>
//                     <label>Last Name</label>
//                     <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
//                 </Form.Field>
//                 <Form.Field>
//                     <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
//                 </Form.Field>
//                 <Button onClick={postData} type='submit'>Submit</Button>
//             </Form>
//         </div>
//     )
// }