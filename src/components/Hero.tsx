import illustrationInfo from "../assets/img/illustration-intro.svg";

function Hero() {
  return (
    <section id="hero">
      <div className="container mx-auto flex flex-col-reverse items-center px-6 mt-10 space-y-0 md:space-y-0 md:flex-row">
        {/* Left Item */}
        <div className="flex flex-col items-center space-y-12 md:w-1/2">
          <h1 className="text-4xl max-w-md font-bold text-center md:text-left ">
            Bring everyone together to build better products
          </h1>
          <p className="text-center md:text-left text-darkGrayishBlue">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="w-full flex justify-center md:justify-start">
            <a
              href="#"
              className="md:block px-6 p-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight"
            >
              Get Started
            </a>
          </div>
        </div>
        {/* Image */}
        <div className="md:w-1/2">
          <img src={illustrationInfo} alt="Ilustration" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
