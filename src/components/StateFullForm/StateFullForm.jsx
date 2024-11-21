import React, { useState } from 'react';

const StateFullForm = () => {
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
    const [name,setName]=useState("Rojoni");
    const [error,setError]=useState('')
    const handleSubmit= e=>{
        e.preventDefault();
        if(password.length<6){
            setError('Password must be 6 char')
        }
        else{
            setError('');
            console.log(name, email, password)
        }
     
    }
    const handleEmailChange= e=>{
       console.log(e.target.value);
       setEmail(e.target.value);
    }
    const handleOnChange=e=>{
        console.log(e.target.value);
        setPassword(e.target.value);
    }
    const handleName=e=>{
        console.log(e.target.value);
        setName(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleName} type="text" name='name' />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" id="" />
                <br />
                <input onChange={handleOnChange} type="password" name="password" id="" /><br />
                <input type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFullForm;