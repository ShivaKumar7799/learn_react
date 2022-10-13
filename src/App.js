import './App.css';
import { useState } from 'react';
import StudenForm, { PrincipleForm, TeacherForm } from './Components/Forms/StudenForm';
import IphoneMobile from "./Components/Forms/Iphone"
import Props from './Components/Props/Props';
import UseState from './Components/States/UseState';
import UseStateInput from './Components/States/UseStateInput';
import StudentMarks from './Components/States/StudentMarks';


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
        <StudentMarks />
      </>
    );
}

export default App;
