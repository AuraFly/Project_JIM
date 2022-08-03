import axios from 'axios';
import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MainPage from '../../MainPage/MainPage';
import "./loginScreen.css"; 
import axios from "axios";


const LoginPage = () => {


const {email, setEmail} = useState("")
const {password, setPassword} = useState("");
const {error, setError} = useState(false);
const {loading, setLoading} = useState(false);

const submitHandler = async (e) => {
e.preventDefault();

try  {
  const config = {
    headers: {
      "Content-type":"application/json"
    }
  }
setLoading(true)

const { data } = await axios.post(
  '/api/users/login',
  {
    email, 
    password,
  },
  config
  );

  console.log(data);
  localStorage.setItem("userInfo", JSON.stringify(data));
setLoading(false);

} catch (error) {
  setError(error.response.data.message);
}

};






  return (
    <MainPage title="LOGIN">
      <div className="loginContainer">
        <Form on onSubmit={submitHandler}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label> Email Address </Form.Label>
            <Form.controlId
            type="email"
            value={email}
            placeholder="Enter Email Address"/>
            onChange={(e) => setEmail(e.target.value)}

          </Form.Group>
    <Form.Group controlId="formBasicPassword">
      <Form.Label> Password </Form.Label>
      <Form.Control 
      type="password"
      value={password}
      placeholder="Password"
      onChange={(e) => setPassword(e.target.value)}
      />

      </Form.Group>

<Button varient="primary" type="submit"> Submit </Button>
          </Form> 

     <Row className="py-3">
      <Col>
      Are you New? <link to="/register">Register Here</link>
      </Col>
      </Row>     
       
    </div>
    
    </MainPage>
    
  );
};

export default LoginPage