import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formstate, setFormstate] = useState({
        username: "strider",
        email: "johnbyron@google.com",
    });

    const {username,email} = formstate

    const onInputChange=({target})=>{
        const {name, value} = target;
        setFormstate({
            ...formstate,
            [name]: value
        })
    }


    useEffect(() => {
        // console.log("useEffect called!");
    }, []);

    useEffect(() => {
        // console.log("formState changed!");
    }, [formstate]);

    useEffect(() => {
        // console.log("Email changed!");
    }, [email]);


  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input 
      type="text"
      className="form-control"
      placeholder="Username"
      name="username"
      value={username}
      onChange={onInputChange}
       />

      <input 
      type="email"
      className="form-control mt-2"
      placeholder="johnbyron@google.com"
      name="email"
      value={email}
      onChange={onInputChange}
       />

        {
            (username ==="strider2") && <Message />
        }

    </>
  )
}
