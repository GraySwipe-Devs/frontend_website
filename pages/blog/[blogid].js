import React from 'react';
import { db } from '../../firebase';
const blogPage = (blog) => {
    console.log(blog);
    return (
        <div className='grid justify-items-center p-1'>
            <div className='text-center mx-auto'>
                <div className='w-full sm:max-w-screen-sm md:max-w-lg lg:max-w-screen-xl' >
                    <h2 className='text-3xl font-bold '>{blog.blog.title}</h2>
                    <h5>Created On - {new Date(blog.blog.createdAt).toDateString()}</h5>
                    <hr />
                    <img src={blog.blog.image} alt={blog.blog.title} />
                    <p>{blog.blog.body}</p>
                </div>
            </div >
        </div>
    )
}
export default blogPage;
export async function getServerSideProps({ params: { blogid } }) {
    const res = await db.collection("Blogs").doc(blogid).get()
    return {
        props: {
            blog: {
                ...res.data(),
                createdAt: res.data().createdAt.toMillis()
            }
        },
    }
}

