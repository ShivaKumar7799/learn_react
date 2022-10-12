import './App.css';
import { useState } from 'react';
import StudenForm, { PrincipleForm, TeacherForm } from './Components/Forms/StudenForm';
import IphoneMobile from "./Components/Forms/Iphone"
import Props from './Components/Props/Props';
import UseState from './Components/States/UseState';


function App() {
  return (
      <>
        {/* <StudenForm />
        <TeacherForm>
        </TeacherForm>
        <IphoneMobile />
        <PrincipleForm /> */}
        {/* <Props /> */}
        <UseState />
      </>
    );
}

export default App;
