import React from "react";
import { FieldErrors, useForm } from "react-hook-form";

// Less code (c)
  // Better validation (c)
  // Better Errors (set, clear, display)
  // Have control over inputs
// Dont deal with events (c)
// Easier Inputs (c)

interface ILoginForm {
  username: string;
  email: string;
  password: string;
  errors?: string;
}

export default function Forms() {
  const {
    register, 
    handleSubmit,
    formState:{ errors },
    setError,
    setValue,
    reset,
    resetField,    
  } = useForm<ILoginForm>({
    /* defaultValues: {
      username: "Tom"
    } */
    // when validation check mode - default - onSubmit
    mode: "onChange"
  });  
  const onValid = (data: ILoginForm) => {
    console.log( "im valid");
    /* setError( "errors", {message: "Backend is temporary offline sorry."}) */
    /* setError("username", {message: "Taken username"}); */
    reset();
    /* resetField("password"); */
  }
  const onInvalid = (errors:FieldErrors) => {
    console.log( errors );  
  }  
  /* setValue("username", "hello"); */
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)} className="flex flex-col space-y-2 max-w-md mx-auto mt-4">
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
        className={`${Boolean(errors.username) ? "border-red-500" : ""}`}
      />    
      <span>{errors.username?.message}</span>      
      <input 
        {...register("email", {
          required: "Email is required",
          validate: {
            notGmail: (value) => {
              /* return !value.includes("@gmail.com") ? "" :
                     "Gmail is not allowed" */
              return !value.includes("@gmail.com") || "Gmail is not allowed";
            },            
          }
        })} 
        type="email" 
        placeholder="Email" 
        className={`${Boolean(errors.email) ? "border-red-500" : ""}`}
      />
      <span>{errors.email?.message}</span>
      <input 
        {...register("password", {
          required: "Password is required"
        })} 
        type="password" 
        placeholder="Password" 
        className={`${Boolean(errors.password) ? "border-red-500" : ""}`}
      />
      <span>{errors.password?.message}</span>
      <input type="submit" value="Create Account" />
      <span>{errors.errors?.message}</span>
    </form>
  )
}