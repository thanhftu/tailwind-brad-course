import avatarAnisha from "../assets/img/avatar-anisha.png";
import ali from "../assets/img/avatar-ali.png";
import rechard from "../assets/img/avatar-richard.png";
function Testimonials() {
  return (
    <section id="testimonials">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold max-w-md text-center mx-auto">
          What's Different About Manage?
        </h2>
        {/* Testimonials Container */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* Testimonials 1 */}
          <div className="flex flex-col items-center space-y-6 p-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src={avatarAnisha} alt="avatar" className="w-16 -mt-14" />
            <h5 className="text-lg font-bold">Anisha Li</h5>
            <p className="text-sm text-darkGrayishBlue">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
          {/* Testimonials 2 */}
          <div className="hidden md:flex flex-col items-center space-y-6 p-6 bg-veryLightGray md:w-1/3">
            <img src={ali} alt="avatar" className="w-16 -mt-14" />
            <h5 className="text-lg font-bold">Ali Bravo</h5>
            <p className="text-sm text-darkGrayishBlue">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>
          {/* Testimonials 3 */}
          <div className="hidden md:flex flex-col items-center space-y-6 p-6 bg-veryLightGray md:w-1/3">
            <img src={rechard} alt="avatar" className="w-16 -mt-14" />
            <h5 className="text-lg font-bold">Anisha Li</h5>
            <p className="text-sm text-darkGrayishBlue">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
        </div>
        {/* Button */}
        <div className="w-full flex justify-center my-16">
          <a
            href="#"
            className="md:block px-6 p-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
