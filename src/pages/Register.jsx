import {useState} from 'react';
import styled from "styled-components";
import { mobile } from "../responsive";
import Navbar from "../components/Navbar";
import axios from 'axios';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDU1fHxtb2RlbCUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;


const Register = () => {


  //define user state variable
  const [user, setUser] = useState({});

  //to inject data into user variable
  const changeHandler = (event)=>{
    setUser({...user, [event.target.name]: event.target.value})
  }

  const submitHandler = (event)=>{ 
    event.preventDefault();
    console.log('submitHandler');
  
    //send a request for register user
    // /api/auth/register POST
    axios({
      method: 'POST',
      url: 'http://localhost:5000/api/auth/register',
      data: user
    }).then(res=>{console.log(res);})
    .catch(err=>{console.log(err)});
  }
  return (

    <div>

      <Navbar/>
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={submitHandler} onChange={changeHandler}>
          <Input name="name" placeholder="name" />
          <Input name="lname" placeholder="last name" />
          <Input name="username" placeholder="username" />
          <Input name="email" placeholder="email" />
          <Input name="password" placeholder="password" />
          <Input name="confirmpassword" placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
    </div>
  );
};

export default Register;
