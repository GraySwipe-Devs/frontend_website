

const Sec1 = () => {
  return (
    <article className="header m-6 flex items-center">
          <div className="flex-column grow">
            <h1 className="text-6xl lg:text-8xl font-extrabold text-[#4D4D4D]">You Deserve Better Salons!</h1>
            <p className="my-6 lg:text-lg text-[#666666] font-semibold">We believe that body-care services like haircuts, etc... should be an enjoyable experience instead of an hectic one.</p>
            <button className="text-dark-violet underline py-3 px-4 rounded-xl border-2 drop-shadow-lg maxshadow-dark-violet">Learn more</button>
          </div>
          <div className="image grow-[2] max-w-3xl">
          <img src="https://i.imgur.com/yF2pEx9.png" alt="4 girls" />
          </div>
        </article>
  );
};

export default Sec1;
