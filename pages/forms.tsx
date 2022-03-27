import React from "react";
import { FieldErrors, useForm } from "react-hook-form";

// Less code (c)
// Better validation
// Better Errors (set, clear, display)
// Have control over inputs
// Dont deal with events (c)
// Easier Inputs (c)

interface ILoginForm {
  username: string;
  email: string;
  password: string;
}

export default function Forms() {
  const {register, handleSubmit} = useForm<ILoginForm>({
    /* defaultValues: {
      username: "Tom"
    } */
  });  
  const onValid = (data: ILoginForm) => {
    console.log( "im valid")
  }
  const onInvalid = (errors:FieldErrors) => {
    console.log( errors );
  }
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input 
        {...register("username", {
          /* required: "true" */
          required: "Username is required",
          minLength: {
            message: "The Username should be longer than 5 chars.",
            value: 5,
          },
        })} 
        type="text" 
        placeholder="Username"
      />    
      <input 
        {...register("email", {
          required: "Email is required"
        })} 
        type="email" 
        placeholder="Email" 
      />    
      <input 
        {...register("password", {
          required: "Password is required"
        })} 
        type="password" 
        placeholder="Password" 
      />
      <input type="submit" value="Create Account" />
    </form>
  )
}