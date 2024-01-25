import React from 'react'
import { useForm } from "react-hook-form"

const Forms = () =>{
    const [registationSuccess, setRegisstaration] = React.useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit =() =>{
        setRegisstaration(true)
    }

    return (
        <>
        <div className='success'>
            {registationSuccess && (
                <div>
                    <p>Registration SuccessFull! </p>
                </div>
            )}
        </div>
            <form className='Form' onSubmit = {handleSubmit(onSubmit)}>
                <label>First Name</label>
                <input type="text" name='firstName' {...register('firstName', { required: "First Name is required" })} />
                {errors.firstName && <p className='err'>{errors.firstName.message}</p>}

                <label>Last Name</label>
                <input type="text" name='lastName' {...register('lastName', { required: "Last Name is required" })} />
                {errors.lastName && <p className='err'>{errors.lastName.message}</p>}

                <label>Email</label>
                <input type="email" name='email' {...register('email', { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid Email" } })} />
                {errors.email && <p className='err'>{errors.email.message}</p>}

                <label>Password</label>
                <input type="password" name='password' {...register('password', { required: "Password is required" , minLength:{value:5,message: "Invalid format for password"} , maxLength:{value:20, message:"Password cannot be more than 20 char"} })} />
                {errors.password && <p className='err'>{errors.password.message}</p>}
                <input type="Submit" value={"Submit"} />
            </form>
        </>
    )
}

export default Forms;
