function Cta() {
  return (
    <section id="cta" className="bg-brightRed">
      <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0 ">
        {/* heading */}
        <h2 className="text-5xl font-bold text-center md:text-4xl md:text-left md:max-w-xl">
          Simplify how your team works today
        </h2>
        <div className="">
          <a
            href="#"
            className="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl align-baseline hover:bg-gray-900"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Cta;
