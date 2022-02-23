import Link from 'next/link';
import auth from '../firebase';
const NavBar = ({ user }) => {

    const logout = (e) => {
        auth.signOut().then(() => {
            // Sign-out successful.
            console.log("SignOut Success");
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    }



    return (
        <nav className='flex justify-between'>
            <div className='logo'>
                <img className='max-w-xs' src='https://i.imgur.com/snUQuP1.png' />
            </div>
            <div className='my-8 mr-8'>
                <ul className=' items-center flex space-x-5 justify-end'>
                    <li ><Link href='product/' >Product</Link></li>
                    <li ><Link href='blogs/' >Blog</Link></li>
                    <li className='bg-dark-violet text-white px-4 py-2 rounded-xl'><Link href='contact/'>Contact us</Link></li>
                    {
                        user ?
                            <>
                                <li><Link href='/createblog'><a>CreateBlog</a></Link></li>
                                <li><button onClick={(e) => logout(e)} >LogOut</button></li>
                            </>
                            :
                            <></>
                    }
                </ul>
            </div>

        </nav>
    );
};

export default NavBar;
