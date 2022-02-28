

const Sec2 = () => {
  return (
    <div className="description py-6 ">
          <div className="flex items-center flex-col sm:flex-row justify-center">
            <p className="flex z-[1] justify-center text-[#858287] text-5xl lg:text-7xl font-bold">What Is </p>
            <img className='max-w-2xl relative top-2 right-10 lg:max-w-xl sm:left-[10]' src='https://i.imgur.com/efI6ZRO.png' />
          </div>
          <div className="offers flex flex-col sm:flex-row justify-center sm:space-x-8 bg-dark-violet text-white px-12 py-12 my-4">
            <div className="appointment max-w-sm">
              <img className="flex justify-center mb-3" src="https://i.imgur.com/WY1KEEj.png" />
              <h2 className="font-semibold text-lg">Appoinment service</h2>
              <p className="my-2 font-thin">Take an hasel free appointment at best salons near you.</p>
              <a className="underline font-thin">Learn more</a>
            </div>
            <div className="assistance mb-4 max-w-sm">
              <img className="flex justify-center mb-3" src="https://i.imgur.com/b6xBBGz.png" />
              <h2 className="font-semibold text-lg">On ground assistance</h2>
              <p className="my-2 font-thin">We provide salons, initial on ground assistance, to imorove thier services.</p>
              <a className="underline font-thin ">Learn more</a>
            </div> 
            <div className="management mb-4 max-w-sm">
              <img className="flex justify-center mb-3" src="https://i.imgur.com/BhLmQte.png" />
              <h2 className="font-semibold text-lg">Salon management tool</h2>
              <p className="my-2 font-thin">We provide the best salon management tools, to increase productivity and efiiciency of salons.</p>
              <a className="underline font-thin ">Learn more</a>
            </div>
            <div className="babycare max-w-sm">
              <img className="flex justify-center mb-3" src="https://i.imgur.com/p21lXQe.png" />
              <h2 className="font-semibold text-lg">Baby care content</h2>
              <p className="my-2 font-thin">We provide most credible body care content right here at grayswipe.</p>
              <a className="underline font-thin ">Learn more</a>
            </div>
          </div>
        </div>
    );
};

export default Sec2;
