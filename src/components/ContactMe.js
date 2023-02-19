import React, { useState } from "react";
import Header from "./Header";

export default function () {
    const [ data, setdata ] = useState({
        email: "",
        myMessage: ""
    });
    const [ errorEmail, setErrorEmail ] = useState("")
    const [ errorMessage, setErrorMessage ] = useState("")

    const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    console.log(data)

    const handleOnChange = (event) => {
        setdata((preValue) => {
            return {
                ...preValue,
                [event.target.name]:event.target.value
            }
        })
    }

    React.useEffect(function() {
            if(regEx.test(data.email)) {
                setErrorEmail("")
                console.log(data)
            } else if (!regEx.test(data.email) && data.email != "") {
                setErrorEmail("email is invalid")
            }

            if (data.myMessage === '') {
                setErrorMessage("Message is required")
            }
            else if (data.myMessage) {
                setErrorMessage ('')
            }
            console.log(data)
            },[data]
            )

    return (
        <>
        <Header/>
        <div className="container-fluid contactMe">
        <h1 className="contactMeHeading">Contact:</h1>
            <form>
               <label>Name:</label><br/>
               <input className="inputName" type='text'/> <br/><br/>
               <label>Email Address:</label><br/>
               <input className="inputEmail"  value={data.email} type='email' onChange={handleOnChange} name="email" /><br/><br/>
               <label>Message:</label><br/>
               <textarea className="inputMessage" value={data.myMessage} onChange={handleOnChange} name= "myMessage" /><br/>
               <p id="errorMessage"></p>
               <p>{errorEmail}</p>
               <p>{errorMessage}</p>
               <input type="submit"/>
            </form>
        </div>
        </>
    )
}