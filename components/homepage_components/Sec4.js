
const Sec4 = () => {
  return (
    <div className=" my-auto">
      <div className="betaTester m-10 ">
          <h1 className="max-w-[500px] text-5xl lg:text-7xl text-[#4D4D4D] font-bold">Wanna Be Our Beta Teset?</h1>

          <div className="imgAndForm flex flex-col md:flex-row space-y-10 items-center space-x-20 justify-center m-10">
              <div className="image">
              <img className="min-w-[300px]" src="https://i.imgur.com/R1bCDmZ.png" />
              </div>
              <div className="form">
                  <form className="space-y-5 max-w-lg  flex flex-col">
                      <input className="placeholder:text-black px-3 py-3 border-[1px] border-dark-violet rounded-md" type="text" placeHolder="First Name" />
                      <input className="placeholder:text-black px-3 py-3 border-[1px] border-dark-violet rounded-md" type="text" placeHolder="Last Name" />
                      <input className="placeholder:text-black px-3 py-3 border-[1px] border-dark-violet rounded-md" type="text" placeHolder="Email Id" />
                      <div className="checkbox flex items-center ">
                          <input className=" border-dark-violet" type="checkBox" />
                          <p className="mx-2">Yes I like to recieve email from grayswipe</p>
                      </div>
                      <button className="bg-dark-violet text-white py-3 rounded">I wanna beata test!</button>
                  </form>
              </div>
          </div>
      </div>
    </div>
    );
};

export default Sec4;
