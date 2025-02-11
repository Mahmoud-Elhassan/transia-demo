import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold text-red-600">
            مرحبا
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
            في ت<span className="text-red-600">ر</span>انزيا
          </p>
          <div className="container relative flex flex-col justify-between h-full max-w-6xl text-right mx-auto mt-15">
            <h2 className="mb-1 text-3xl text-red-600">خدماتنا</h2>
            <p className="mb-12 text-lg text-gray-500">
              Here is a few of the awesome Services we provide.
            </p>
            <div className="w-full grid gap-y-20 lg:gap-4 grid-cols-1 lg:grid-cols-3">
              <Link
                to="/translate"
                className="relative h-full ml-0 mr-0  transform transition duration-500 hover:scale-102 lg:col-span-2"
              >
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-red-600 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-red-600 rounded-lg">
                  <div className=" -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      ترجمة معتمدة
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-red-600 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">
                    A decentralized application (dapp) is an application built
                    on a decentralized network that combines a smart contract
                    and a frontend user interface.
                  </p>
                </div>
              </Link>

              <Link
                to="/ads"
                className="relative h-full ml-0  transform transition duration-500 hover:scale-102 lg:row-span-2"
              >
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-red-600 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-red-600 rounded-lg">
                  <div className=" -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      دعاية و اعلان
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-red-600 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">
                    Web 3.0 is the third generation of Internet services that
                    will focus on understanding and analyzing data to provide a
                    semantic web.
                  </p>
                </div>
              </Link>

              <Link
                to="/it"
                className="relative h-full  transform transition duration-500 hover:scale-102"
              >
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-red-600 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-red-600 rounded-lg">
                  <div className=" -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      تقنية معلومات
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-red-600 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">
                    A Project Audit is a formal review of a project, which is
                    intended to assess the extent up to which project management
                    standards are being upheld.
                  </p>
                </div>
              </Link>

              <Link
                to="/emarkting"
                className="relative h-full  transform transition duration-500 hover:scale-102"
              >
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-red-600 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-red-600 rounded-lg">
                  <div className=" -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      تسويق الكتروني
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-red-600 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">
                    A security hacker is someone who explores methods for
                    breaching defenses and exploiting weaknesses in a computer
                    system or network.
                  </p>
                </div>
              </Link>

              <Link
                to="/studentservices"
                className="relative h-full transform transition duration-500 hover:scale-102 ml-0 lg:col-span-2"
              >
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-red-600 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-red-600 rounded-lg">
                  <div className=" -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      خدمات طالب
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-red-600 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">
                    Bot development frameworks were created as advanced software
                    tools that eliminate a large amount of manual work and
                    accelerate the development process.
                  </p>
                </div>
              </Link>
              <Link
                to="/eservices"
                className="relative h-full ml-0  transform transition duration-500 hover:scale-102 lg:row-span-2"
              >
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-red-600 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-red-600 rounded-lg">
                  <div className=" -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      خدمات الكترونية
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-red-600 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">
                    Web 3.0 is the third generation of Internet services that
                    will focus on understanding and analyzing data to provide a
                    semantic web.
                  </p>
                </div>
              </Link>

              <Link
                to="/vip"
                className="relative h-full  transform transition duration-500 hover:scale-102 "
              >
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-red-600 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-red-600 rounded-lg">
                  <div className=" -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      خدمات رجال اعمال
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-red-600 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">
                    A Project Audit is a formal review of a project, which is
                    intended to assess the extent up to which project management
                    standards are being upheld.
                  </p>
                </div>
              </Link>

              <Link
                to="/print"
                className="relative h-full  transform transition duration-500 hover:scale-102"
              >
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-red-600 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-red-600 rounded-lg">
                  <div className=" -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      طابعة مخططات
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-red-600 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">
                    A security hacker is someone who explores methods for
                    breaching defenses and exploiting weaknesses in a computer
                    system or network.
                  </p>
                </div>
              </Link>

              <Link
                to="/adsg"
                className="relative h-full transform transition duration-500 hover:scale-102 ml-0 lg:col-span-3"
              >
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-red-600 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-red-600 rounded-lg">
                  <div className=" -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      هدايا دعائية
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-red-600 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">
                    Bot development frameworks were created as advanced software
                    tools that eliminate a large amount of manual work and
                    accelerate the development process.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
