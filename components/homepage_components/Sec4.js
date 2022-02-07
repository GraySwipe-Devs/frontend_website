
const Sec4 = () => {
  return (
    <div className="betaTester p-10 max-w-[500px]">
        <h1 className="text-5xl lg:text-7xl text-[#4D4D4D] font-bold">Wanna Be Our Beta Teset?</h1>

        <div className="imgAndForm flex justify-center space-x-8">
            <div className="image">
            <img src="https://i.imgur.com/R1bCDmZ.png" />
            </div>
            <div className="form flex flex-column">
                <form>
                    <input className="border-2" type="text" placeHolder="First Name" />
                    <input className="border-2" type="text" placeHolder="Last Name" />
                    <input className="border-2" type="text" placeHolder="Email Id" />
                    <div className="checkbox flex items-center">
                        <input type="checkBox" />
                        <p>Yes I like to recieve email from grayswipe</p>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
    );
};

export default Sec4;
