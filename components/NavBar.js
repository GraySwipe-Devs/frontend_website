import Link from 'next/link'

const NavBar = () => {
  return (
    <nav>
        <div className='logo m-6'>

        </div>
        <ul className=' items-center flex space-x-5 justify-end mr-8 my-8'>
            <li ><Link href= 'product/' >Product</Link></li>
            <li ><Link href = 'blog/' >Blog</Link></li>
            <li className='bg-dark-violet text-white px-4 py-2 rounded-xl'><Link href= 'contact/'>Contact us</Link></li>
        </ul>
    </nav>
    );
};

export default NavBar;
