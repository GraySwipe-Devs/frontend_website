
const Sec4 = () => {
  return (
    <div className="betaTester m-10 max-w-[500px]">
        <h1 className="text-5xl lg:text-7xl text-[#4D4D4D] font-bold">Wanna Be Our Beta Teset?</h1>

        <div className="imgAndForm flex justify-center space-x-20">
            <div className="image">
            <img className="min-w-[300px]" src="https://i.imgur.com/R1bCDmZ.png" />
            </div>
            <div className="form flex flex-column">
                <form className="space-y-5 max-w-lg">
                    <input className="placeholder:text-black px-3 py-1 border-[1px] border-dark-violet rounded-md" type="text" placeHolder="First Name" />
                    <input className="placeholder:text-black px-3 py-1 border-[1px] border-dark-violet rounded-md" type="text" placeHolder="Last Name" />
                    <input className="placeholder:text-black px-3 py-1 border-[1px] border-dark-violet rounded-md" type="text" placeHolder="Email Id" />
                    <div className="checkbox flex items-center ">
                        <input className=" border-dark-violet" type="checkBox" />
                        <p>Yes I like to recieve email from grayswipe</p>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
    );
};

export default Sec4;
