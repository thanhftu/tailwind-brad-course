import logo from "../assets/img/logo.svg";

function Nav() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-row items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <img src={logo} alt="Logo" />
        </div>
        {/* Menu Items */}
        <div className="hidden space-x-4 items-center md:flex">
          <a href="#" className="hover:text-veryDarkBlue">
            Pricing
          </a>
          <a href="#" className="hover:text-veryDarkBlue">
            Products
          </a>
          <a href="#" className="hover:text-veryDarkBlue">
            About
          </a>
          <a href="#" className="hover:text-veryDarkBlue">
            Careers
          </a>
          <a href="#" className="hover:text-veryDarkBlue">
            Community
          </a>
        </div>
        {/* buttom */}
        <a
          href="#"
          className="hidden md:block px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

export default Nav;
