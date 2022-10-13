import React, {useState} from 'react'

function UseStateInput() {
  // const [userName, setUserName] = useState("");
  // const [age, setAge] = useState(0);

  const [studentData, setStudentData] = useState({
    userName : "",
    age : 0
  })

  const dynamicHandleChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);

    console.log(studentData)
    setStudentData({
      ...studentData,
      [event.target.name] : event.target.value
    })
  }

  // const handleChange = (event) => {
  //   console.log(event.target.value)
  //   setUserName(event.target.value)
  // }
  // const changeAge = (event) => {
  //     console.log(event.target.value)
  //     setAge(event.target.value)
  // }
  return (
    <div>
      <form>
        <label htmlFor='userName'>UserName :</label>
        <input type="text" id='userName' onChange={dynamicHandleChange} value={studentData.userName} name='userName' />
        <br />
        <label htmlFor='age'>Age :</label>
        <input type="number" onChange={dynamicHandleChange} id='age' value={studentData.age} name='age' />
        <br />
        <input type="submit" value = "SignUp" /> 
      </form>
      <div>
        <h1> Entered UserName : {studentData.userName} and age : {studentData.age}</h1>
      </div>
    </div>
  )
}

export default UseStateInput