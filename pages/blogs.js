import Link from "next/link";
import { db } from '../firebase';

const BlogPage = ({ allBlogs }) => {
  console.log(allBlogs);
  return (
    <div className='text-center  m-auto p-5 ' >
      {
        allBlogs.map((blog) => {
          return (
            < div className="grid justify-items-center">
              <div className="max-w-sm rounded overflow-hidden shadow-lg border-slate-50 mb-20">
                <div>
                  <img className="w-full" src={blog.image} alt="Sunset in the mountains" />
                  <span className="font-bold text-xl mb-2">{blog.title}</span>
                </div>
                <div className="px-6 py-4">

                  <p className="text-gray-700 text-base">
                    {blog.body}
                  </p>
                </div>
                <div className="p-4">
                  <Link href={`/blog/${blog.id}`}><a >Read More</a></Link>
                </div>
              </div>
            </div>
          )
        })
      }
      <style jsx>
        {`p{
              display: -webkit-box;
              overflow: hidden;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
            }
           `}
      </style>
    </div >

  );
}

export default BlogPage

export async function getServerSideProps(context) {
  const querySnap = await db.collection("Blogs").orderBy('createdAt', 'desc')
    .get()
  const allBlogs = querySnap.docs.map(docSnap => {
    return {
      ...docSnap.data(),
      createdAt: docSnap.data().createdAt.toMillis(),
      id: docSnap.id
    }
  })
  return {
    props: { allBlogs }
  }
}
