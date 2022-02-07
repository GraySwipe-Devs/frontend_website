import img from "./../images/Illustation/4girls.png"
const Homepage = () => {
  return (
    <div className='home-page'>
        <article className="flex">
          <div className="max-w-xl">
            <h1>You Deserve Better Salons!</h1>
            <p>We believe that body-care services like haircuts, etc... should be an enjoyable experience instead of an hectic one.</p>
          </div>
          <img className="max-w-2xl min-w-xl min-h-xl" src={require("./../images/Illustation/4girls.png")} alt="4 girls" />
        </article>
    </div>
    );
};

export default Homepage;
