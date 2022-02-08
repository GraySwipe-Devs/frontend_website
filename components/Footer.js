

const Footer = () => {
  return (
    <footer className="flex justify-start space-x-4 bg-black p-10 mt-6">
        <div className="company-tag-line">
            <h1>Gray Swipe</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae diam euismod.</p>
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
