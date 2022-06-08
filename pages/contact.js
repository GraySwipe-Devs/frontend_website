const contact = () => {

    return (
        <div className='contact-page'>
            <div className='contactpage-content flex justify-center '>
                <div>
                    <h1 className=' font-bold text-4xl'>Contact us</h1>
                    <form className='flex flex-col'>
                        <div className='mb-6'>
                            <label>First Name</label>
                            <input placeholder='First Name' />
                        </div>
                        <div className='mb-6'>
                            <label>Last Name</label>
                            <input placeholder='Last Name' />
                        </div>
                        <div className='mb-6'>
                            <label>Email Address</label>
                            <input placeholder='Email Address' />
                        </div>
                        <div className=''>
                            <label>Your message</label>
                            <br />
                            <textarea placeholder='Text-area' />
                        </div>


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

            </div>
        </div>
    );
}

export default contact