import React, { useEffect, useState } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import brandLogo from '../../logos/Group 1329.png'

const Tasks = () => {
    const [allTasks, setAllTasks] = useState([])
    useEffect(() => {
        fetch('https://damp-springs-43419.herokuapp.com/allEvents')
        .then(res => res.json())
        .then(data => setAllTasks(data))
    },[])
    return (
        <div className='container'>
            <nav className='nav navbar d-flex d-inline-flex'>
                <div className='brand-logo'><img src={brandLogo} className='img-fluid'/></div>
                
                <div className='d-flex'>
                <Link to='/Home' className='nav-link text-dark'>Home</Link>
                <Link to='/Donation' className='nav-link text-dark'>Donation</Link>
                <Link to='/Events' className='nav-link text-dark'>Events</Link>
                <Link to='/Blog' className='nav-link text-dark'>Blog</Link>
                <Link to='/Regular' className='btn btn-primary'>Regular</Link>
                <Link to='/admin' className='btn btn-secondary'>Admin</Link>
                </div>
                
            </nav>

            <div className="container mt-5 text-center">
            <h3><strong>I GROW BY HELPING PEOPLE IN NEED.</strong></h3>
            <form class="form-inline d-flex justify-content-center mt-4">
                <input class="form-control mr-sm-2 w-25" type="search" placeholder="Search..." aria-label="Search" />
                <button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
          
        </div>

            <div className="row">
                {
                    allTasks.map(tk => <div className='col-md-3 col-sm-6'>
                     <div className='m-3 w-100'>
                     <img src={tk.taskImg} className='img-fluid' alt=''/>
                     <Link to={"/"+tk.taskId+"/register"}>
                     <h5 className='w-100 py-3 px-2 btn btn-warning'>{tk.taskName}</h5>
                     </Link>
                     
                     </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default Tasks;