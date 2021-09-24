import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './Friend.css'
const Friends = () => {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetch('https://pure-tundra-14446.herokuapp.com/students')
        .then(res => res.json())
        .then(data => setStudents(data))
        .catch(err => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <h1 className="text-center mt-3">CSE 10th Batch - PUST</h1>
            <h3 className="text-center mb-3">Total Students: {students.length}</h3>
            <div className="row">
                {
                    students.length === 0 && <div>
                        <div className="d-flex justify-content-center mt-5">
                            <Box sx={{ display: 'flex' }}>
                                <CircularProgress />
                            </Box>
                        </div>
                        <p className="text-center mt-2"><small>loading...</small></p>
                    </div>
                }
                {
                    students.map(friend => <Friend friend={friend}></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;