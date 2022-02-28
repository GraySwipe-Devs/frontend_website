import NavBar from './../components/NavBar'
import Footer from './../components/Footer'
import Toggle from 'react-toggle'
import Switch from "react-switch";
import { useState } from 'react'


const contact = () => {
    
  return (
    <div className='contact-page'>
        <NavBar/>
        <div className='contactpage-content flex justify-center flex-col lg:flex-row items-center space-x-9 mx-10'>
            <div className=''>
                <h1 className=' font-bold text-4xl m-10 text-center'>Contact us</h1>
                <form className='flex flex-col'>
                    <div className='name flex flex-col sm:flex-row'>
                        <div className='mb-6 mr-6'>
                            <label className='font-semibold'>First Name</label>
                            <br />
                            <input className='border-2 rounded-md mt-3 p-2' placeholder='First Name' />
                        </div>
                        <div className='mb-6'>
                            <label className='font-semibold'>Last Name</label>
                            <br />
                            <input className='border-2 rounded-md mt-3 p-2' placeholder='Last Name' />
                        </div>
                    </div>
                    
                    <div className='mb-6 flex flex-col'>
                        <label className='font-semibold'>Email Address</label>
                        <input className='border-2 rounded-md mt-3 p-2' placeholder='Email Address' />
                    </div>
                    <div className='mb-6 flex flex-col'>
                        <label className='-mb-3 font-semibold'>Your message</label>
                        <br />
                        <textarea className='border-2 rounded-md p-2 h-20 resize-none' placeholder='Text-area' />
                    </div>
                    <button className='bg-dark-violet rounded-md text-white py-2 mb-12' type='submit'>SEND MESSAGE</button>

                    
                    {/* <label>
                        <Toggle
                            defaultChecked={isToggled}
                            className='custom-classname'
                            onChange={toggleChange} />
                        <span>I agree to the Terms and Conditions.</span>
                    </label>
                    <label>
                        <span>Switch with default style</span>
                        <Switch onChange={this.handleChange} checked={this.state.checked} />
                    </label>
                    */}
                </form>
            </div>
            <div className='grow-[2] max-w-3xl'>
                <img src='https://i.imgur.com/zU1kVb7.png' />
            </div>
            
        </div>
        <Footer/>
    </div>
  );
}

export default contact