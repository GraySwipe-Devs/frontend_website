

const Footer = () => {
  return (
    <footer className="flex justify-start space-x-5 bg-black text-gray-500 p-10 mt-6">
        <div className="company-tag-line max-w-[250px]">
            <h1 className="text-lg font-semibold">Gray Swipe</h1>
            <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae diam euismod.</p>
            <img src="https://i.imgur.com/Kl8g0Jj.png" />
        </div>
        <div className="details-1">
            <ul className="flex flex-col space-y-2">
                <li>Contact</li>
                <li>Instagram</li>
                <li>Twitter</li>
            </ul>
        </div>
        <div className="details-2">
            <ul className="flex flex-col space-y-2">
                <li>Newsletter</li>
                <li>Blog</li>
            </ul>
        </div>
    </footer>
    );
};

export default Footer;
