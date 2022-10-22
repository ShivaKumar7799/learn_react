import './App.css';
import { useState } from 'react';
import StudenForm, { PrincipleForm, TeacherForm } from './Components/Forms/StudenForm';
import IphoneMobile from "./Components/Forms/Iphone"
import Props from './Components/Props/Props';
import UseState from './Components/States/UseState';
import UseStateInput from './Components/States/UseStateInput';
import StudentMarks from './Components/States/StudentMarks';
import UserLogin from "./Components/States/Login"
import LearnHooks from './Components/Hooks/UseState';
import FlipkartProducts from './Components/Flipkart/FlipkartProducts';
import FlipkartDisplay from './Components/Flipkart/FlipkartDisplay';
import Axios from './Components/Axios/Axios';


function App() {
  return (
      <>
        {/* <StudenForm />
        <TeacherForm>
        </TeacherForm>
        <IphoneMobile />
        <PrincipleForm /> */}
        {/* <Props /> */}
        {/* <UseState /> */}
        {/* <UseStateInput /> */}
        {/* <StudentMarks /> */}
        {/* <UserLogin /> */}
        {/* <LearnHooks /> */}
        {/* <FlipkartProducts /> */}
        <FlipkartDisplay />
        <Axios />
      </>
    );
}

export default App;
