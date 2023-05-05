import logo from "../assets/img/logo-white.svg";
import facebook from "../assets/img/icon-facebook.svg";
import youtube from "../assets/img/icon-youtube.svg";
import twitter from "../assets/img/icon-twitter.svg";
import pinterest from "../assets/img/icon-pinterest.svg";
import instagram from "../assets/img/icon-instagram.svg";
function Footer() {
  return (
    <footer className="bg-veryDarkBlue">
      {/* Footer container */}
      <div className="container flex flex-col-reverse  justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* Logo and Social Link Container */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start md:basis-1/3">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2023, All Rights Reserved
          </div>
          {/* Logo */}
          <div className="">
            <img src={logo} alt="" className="h-8" />
          </div>
          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <a href="#">
              <img src={facebook} alt="" />
            </a>
            <a href="#">
              <img src={youtube} alt="" />
            </a>
            <a href="#">
              <img src={twitter} alt="" />
            </a>
            <a href="#">
              <img src={pinterest} alt="" />
            </a>
            <a href="#">
              <img src={instagram} alt="" />
            </a>
          </div>
        </div>
        {/* List Container */}
        <div className="flex fex-row justify-around sapce-x-32 md:basis-1/3">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Home
            </a>
            <a href="#" className="hover:text-brightRed">
              Pricing
            </a>
            <a href="#" className="hover:text-brightRed">
              Product
            </a>
            <a href="#" className="hover:text-brightRed">
              About
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            {" "}
            <a href="#" className="hover:text-brightRed">
              Careers
            </a>
            <a href="#" className="hover:text-brightRed">
              Community
            </a>
            <a href="#" className="hover:text-brightRed">
              Privact
            </a>
          </div>
        </div>

        {/* Input container */}
        <div className="flex flex-col space-y-4 jusity-between md:basis-1/3">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button className="px-6 py-2 text-white bg-brightRed hover:bg-brightRedLight rounded-full focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="text-white hidden md:block">
            Copyright &copy; 2023, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
