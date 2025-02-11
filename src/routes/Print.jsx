const Print = () => {
  return (
    <section className="flex items-center text-gray-600 body-font h-screen">
      <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900  sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
            طابعة مخططات
          </h1>
          <p className="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed ">
            Short description here, Short description here Short description
            here Short description here Short description here Short description
            here.
          </p>
          <div className="flex justify-center">
            <a
              href="#"
              className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-900 rounded text-lg"
            >
              Start Exploring
            </a>
            <a
              href="#"
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              Read articles
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://www.svgrepo.com/show/490900/hot-air-balloon.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default Print;
