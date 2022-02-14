import Sec1 from "../components/blogpage_components/Sec1";
import Sec2 from "../components/blogpage_components/Sec2";
import Sec3 from "../components/blogpage_components/Sec3";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"


const BlogPage = () => {
    return (
      <div className="blog-page">
        <NavBar />
        <div className="blog-content">
          <Sec1/>
          <Sec2/>
          <Sec3/>
        </div>
        <Footer/>
      </div>
      
      );
  }
  
  export default BlogPage
  