import Image from 'next/image'
import React from 'react'
import bodyCareContent from '../public/Illustation/bobycare.png'
import object from '../public/Illustation/c.png'
import cover from '../public/Illustation/cover.png'
import organise from '../public/Illustation/organiseappointments.png'
import salonManager from '../public/Illustation/Salonmanagement.png'

const product = () => {
    return (
        <>

            <div>
                <Image src={cover} height={600} ></Image>
            </div><br /><br />
            <div className='lg:flex md:block sm:block' >
                <div className='ml-2'>
                    <div className='p-2 w-10/12  md: w-1/3  lg:w-1/2 lg:ml-72 '>
                        <h1 className='text-lg font-mdeium' >What are we building? </h1><br />
                        <p className='text-xs' >We are building a One stop solution for all salons - raging from appointments to staf management all at one place .helping salon generate more revenue by leveragig technology </p>
                        <br /><br />
                        <p className='text-xs' >By using our product we also increase discovery of salon in your area and thereby attrat more customers to your business . </p>
                    </div>
                </div>
                <br /><br /><br />
                <div className='w-1/3 shadow-lg shadow-shadowColor p-8 w-3/4 md: w-1/3 lg:w-1/3 sm:ml-4 lg:mr-72 '>
                    <div className='items-center'>
                        <Image src={salonManager}  ></Image>
                    </div>
                    <br />                <br />                <br />
                    <h1 className='text-center font-bold' >Salon managment tools</h1>
                    <br />                <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, sit pulvinar tellus ultricies nibh felis blandit interdum. Duis proin.</p><br /><br />
                </div>
            </div>

            <br /><br /><br />
            <div className=' top-1.75 w-1/3 shadow-lg shadow-shadowColor p-8 w-3/4 md: w-1/3 lg:w-1/4 sm:ml-4 lg:ml-64 '>
                <div className='items-center'>
                    <Image src={bodyCareContent} width={250}  ></Image>
                </div>
                <br />                <br />                <br />
                <h1 className='text-center font-bold' >Body Care Content</h1>
                <br />                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, sit pulvinar tellus ultricies nibh felis blandit interdum. Duis proin.</p><br /><br />
            </div>

            <br /><br /><br />
            <div className='w-1/3 shadow-lg shadow-shadowColor p-8 w-3/4 md: w-1/3 lg:w-1/4 sm:ml-4 lg:ml-64 '>
                <div className='items-center'>
                    <Image src={organise} width={250}  ></Image>
                </div>
                <br />                <br />                <br />
                <h1 className='text-center font-bold' >Organising Components</h1>
                <br />                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, sit pulvinar tellus ultricies nibh felis blandit interdum. Duis proin.</p><br /><br />
            </div>

            <br /><br /><br />
            <div className=' items-center w-1/3 shadow-lg shadow-shadowColor p-8 w-3/4 md: w-1/3 lg:w-1/4 sm:ml-4 lg:ml-64 '>
                <div className='items-center'>
                    <Image src={object} width={250}  ></Image>
                </div>
                <br />                <br />                <br />
                <h1 className='text-center font-bold' >Organising Components</h1>
                <br />                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, sit pulvinar tellus ultricies nibh felis blandit interdum. Duis proin.</p><br /><br />
            </div>

        </>
    )
}

export default product