

const Sec2 = () => {
  return (
    <div className="description py-6 ">
          <div className="flex items-center justify-center">
            <p className="flex justify-center text-[#858287] text-5xl lg:text-7xl font-bold ">What Is </p>
            <img className='max-w-sm relative top-1 lg:max-w-lg' src='https://i.imgur.com/snUQuP1.png' />
          </div>
          <div className="offers flex lg:flex-row justify-center space-x-8 bg-dark-violet text-white px-6 py-12 my-4">
            <div className="appointment max-w-sm">
              <img />
              <h2 className="font-semibold text-lg">Appoinment service</h2>
              <p className="my-2 font-thin">Take an hasel free appointment at best salons near you.</p>
              <a className="underline font-thin">Learn more</a>
            </div>
            <div className="assistance max-w-sm">
              <img />
              <h2 className="font-semibold text-lg">On ground assistance</h2>
              <p className="my-2 font-thin">We provide salons, initial on ground assistance, to imorove thier services.</p>
              <a className="underline font-thin ">Learn more</a>
            </div> 
            <div className="management max-w-sm">
              <img />
              <h2 className="font-semibold text-lg">Salon management tool</h2>
              <p className="my-2 font-thin">We provide the best salon management tools, to increase productivity and efiiciency of salons.</p>
              <a className="underline font-thin ">Learn more</a>
            </div>
            <div className="babycare max-w-sm">
              <img />
              <h2 className="font-semibold text-lg">Baby care content</h2>
              <p className="my-2 font-thin">We provide most credible body care content right here at grayswipe.</p>
              <a className="underline font-thin ">Learn more</a>
            </div>
          </div>
        </div>
    );
};

export default Sec2;
