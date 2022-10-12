import React from 'react'
import ChildComponent from './ChildComponent';

function StudenForm() {
  let presentYear = 2022;
  console.log("student form component rendered")
  return (
    <div>
      <h1>StudenForm {presentYear} </h1>
      <ChildComponent />
    </div>
  )
}

export default StudenForm

function PrincipleForm(){
  return (
    <>
      <h2> Principle 
       
      </h2>
    </>
  )
}

function TeacherForm(){
  return (
    <>
      <h2>Teachers Form</h2>
    </>
  )
}
export {TeacherForm, PrincipleForm};
