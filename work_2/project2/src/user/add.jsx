import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Stack } from '@mui/material';

export default function AddNumbers() {
    const [numbers, setNumbers] = useState({ num1: '', num2: '' });
    const [result, setResult] = useState(null);

    const changeValue = (e) => {
        setNumbers({ ...numbers, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/add', {
            num1: Number(numbers.num1),
            num2: Number(numbers.num2)
        })
        .then((res) => {
            setResult(res.data.sum);
        })
        .catch((err) => {
            console.error(err);
            alert('Error occurred: ' + err.message);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                    <label> num1</label>
                    <input onChange={changeValue} type="number" name="num1" placeholder="first number"/>
                </div>
                <br/>
                <div>
                    <label>num2</label>
                    <input onChange={changeValue} type="number" name="num2" placeholder="second number"/>
                </div>
                
          
                <Button type="submit" variant="outlined" >Add</Button>
                {result !== null && <Typography variant="h6">Result: {result}</Typography>}
           
        </form>
    );
}
