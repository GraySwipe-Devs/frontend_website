import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='flex justify-between'>
        <div className='logo'>
            <img className='max-w-xs' src='https://i.imgur.com/snUQuP1.png' />
        </div>
        <div className='my-8 mr-8'>
        <ul className=' items-center flex space-x-5 justify-end'>
            <li ><Link href= 'product/' >Product</Link></li>
            <li ><Link href = 'blogs/' >Blog</Link></li>
            <li className='bg-dark-violet text-white px-4 py-2 rounded-xl'><Link href= 'contact/'>Contact us</Link></li>
        </ul>
        </div>
        
    </nav>
    );
};

export default NavBar;
