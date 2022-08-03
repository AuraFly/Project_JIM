import React, { useState } from 'react';
import axios from 'axios';
import MainPage from '../../MainPage/MainPage';
import { Button, Col, Form, Row } from "react-bootstrap";
import ErrorMessage from "../../ErrorMessage/ErrorMessage"; 
import Loading from "../../Loading/Loading";
import { Link } from "react-router-dom";


const RegisterPage = () => {

const [email, setEmail] = useState("");
const [name, setName] = useState("");
const [pic, setPic] = useState("https://icon-library.com/icon/anonymous-avatar-icon-25.html");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [message, setMessage] = useState(null);
const [picMessage, setPicMessage] = useState(null);
const [error, setError] = useState(false);
const [loading, setLoading] = useState(false);

const submitHandler = async (e) => {
  e.preventDefault();

  if(password !==confirmPassword) {
    setMessage("Passwords Do Not Match");

  }else {
    setMessage(null)

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
setLoading(true);

      const {data} = await axios.post(
        "/api/users",
        { name, pic, email, password },
        config
      );
 
      console.log(data);
      
setLoading(false);
localStorage.setItem("userInfo", JSON.stringify(data));

    } catch (error) {
      setError(error.response.data.message);
    }
  }
 };

const postDetails = (pics) => {
  if(!pics) {
    return setMessage("Please select an image");
      }
  setPicMessage(null);
  
  if(pics.type === 'image/jpeg' || pics.type === 'image/png') {
    const data = new FormData();
    data.append('file', pics);
    data.append('upload_preset', 'JIMproject3');
    data.append('cloud_name', 'dtpoyncyn');
    fetch("https://api.cloudinary.com/v1_1/dtpoyncyn/upload",{
      method: "post",
      body: data,
    })
    .then((res)=> res,json())
    .then((data) => {
      setPic(data.url.toString());
  })
    .catch((err) => {
      console.log(err);
    });
  } else {
    return setPicMessage("Please Select Image");
  }   
};


  return (
    <MainPage title='REGISTER'>
      <div className='loginContainer'>

    {error && <ErrorMessage varient="danger">{error}</ErrorMessage>}
    {message && <ErrorMessage varient="danger">{message}</ErrorMessage>} 
    {loading && <Loading/>}   
      
      <Form onSubmit={submitHandler}>
    <Form.Group controlId="name">
      <Form.Label>Name</Form.Label>
      <Form.control
      type="name"
      value={name}
      placeholder="Enter name"
      onChange={(e) => setName(e.target.value)}
      />
    </Form.Group>

    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.control
      type="email"
      value={email}
      placeholder="Enter email"
      onChange={(e) => setEmail(e.target.value)}
      />
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.control
      type="password"
      value={password}
      placeholder="Password"
      onChange={(e) => setPassword(e.target.value)}
      />
    </Form.Group>

    <Form.Group controlId="confirmPassword">
      <Form.Label>Confirm Password</Form.Label>
      <Form.control
      type="password"
      value={confirmpassword}
      placeholder="Confirm Password"
      onChange={(e) => setConfirmPassword(e.target.value)}
      />
    </Form.Group>

    {picMessage && (
      <ErrorMessage varient="danger">{picMessage}</ErrorMessage>
    )}


<Form.Group controlId="pic">
      <Form.Label>Profile Picture</Form.Label>
     <Form.File
     onChange={(e) => postDetails(e.target.files[0])} 
     id="custom-file"
     type="image/jpeg/png"
     label="Upload Profile Picture"
     custom
     />
</Form.Group>
      </Form>
      
      </div>  


    </MainPage>
  )
    }

export default RegisterPage