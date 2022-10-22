import { useState } from "react";


function UserLogin(){
    const [userData, setUserData] = useState({
        firstName : "",
        middleName : "",
        lastName : "",
        password : ""
    })
    const dynamicChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        })
    }
    const userDataSubmit = (event) => {
        event.preventDefault()
        let checkArr = []
        for(let x in userData){
            if(userData[x] == ''){
                checkArr.push(x)
            }
        }
        console.log(checkArr, "checkArr")
        console.log(userData.password.length, "password length")
        if(checkArr.length == 0){
            if(userData.password.length <=6){
                alert("please enter greater than 6 character")
            } else {
                console.log(userData);
                alert("form submitted successfully")
                setUserData({
                    firstName : "",
                    middleName : "",
                    lastName : "",
                    password : ""
                })
            }
        } else {
            alert("please enter all details")
        }
    }

    return(
            <>
                <h1>Sign In Form</h1>
                <form onSubmit={userDataSubmit} >
                    <label htmlFor="firstName" >firstName :</label>
                    <input onChange={dynamicChange} type="text" value = {userData.firstName} id="firstName" name = "firstName" /> <br />
                    <label htmlFor="middleName" >middleName :</label>
                    <input onChange={dynamicChange} type="text" value = {userData.middleName} id="middleName" name = "middleName" /> <br />
                    <label htmlFor="lastName" >lastName :</label>
                    <input onChange={dynamicChange} type="text" value = {userData.lastName} id="lastName" name = "lastName" /> <br />
                    <label htmlFor="password" >password :</label>
                    <input onChange={dynamicChange} type="password" value = {userData.password} id="password" name = "password" /> <br />
                    <input type="submit" value="Sign In" />
                </form>
            </>
    )
}
export default UserLogin;