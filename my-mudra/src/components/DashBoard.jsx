import React from "react";
import NavBar from "./NavBar";
import Menu from "./Menu";

const brandData = [
  {
    name: "Google",
    visitors: 3.5,
    revenues: "5,768",
    sales: 590,
    conversion: 4.8,
  },
  {
    name: "Twitter",
    visitors: 2.2,
    revenues: "4,635",
    sales: 467,
    conversion: 4.3,
  },
  {
    name: "Github",
    visitors: 2.1,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
  },
  {
    name: "Vimeo",
    visitors: 1.5,
    revenues: "3,580",
    sales: 389,
    conversion: 2.5,
  },
  {
    name: "Facebook",
    visitors: 3.5,
    revenues: "6,768",
    sales: 390,
    conversion: 4.2,
  },
  {
    name: "My Mudra",
    visitors: 3.8,
    revenues: "6,800",
    sales: 400,
    conversion: 8.2,
  },
  {
    name: "Tremble",
    visitors: 4.2,
    revenues: "6,900",
    sales: 800,
    conversion: 10,
  },
  {
    name: "Riot",
    visitors: 3,
    revenues: "5,000",
    sales: 250,
    conversion: 7.2,
  },
  {
    name: "Docker",
    visitors: 5,
    revenues: "3,000",
    sales: 89,
    conversion: 4.2,
  },
  {
    name: "Bajaj",
    visitors: 4,
    revenues: "3,500",
    sales: 75,
    conversion: 3.2,
  },
  {
    name: "Jane",
    visitors: 3,
    revenues: "2,000",
    sales: 80,
    conversion: 3.2,
  },
];

const Table = () => {
  return (
    <>
      <div className='self-start top-0 sticky'>
        <NavBar />
      </div>
      <div className='flex'>
        <div className='basis-1/8'>
          <Menu />
        </div>
        <div className='basis-10/12 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1'>
          <h4 className='mb-6 text-xl font-semibold text-black'>
            Top Channels
          </h4>

          <div className='flex flex-col'>
            <div className='grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5'>
              <div className='p-2.5 xl:p-5'>
                <h5 className='text-sm font-medium uppercase xsm:text-base'>
                  Source
                </h5>
              </div>
              <div className='p-2.5 text-center xl:p-5'>
                <h5 className='text-sm font-medium uppercase xsm:text-base'>
                  Visitors
                </h5>
              </div>
              <div className='p-2.5 text-center xl:p-5'>
                <h5 className='text-sm font-medium uppercase xsm:text-base'>
                  Revenues
                </h5>
              </div>
              <div className='hidden p-2.5 text-center sm:block xl:p-5'>
                <h5 className='text-sm font-medium uppercase xsm:text-base'>
                  Sales
                </h5>
              </div>
              <div className='hidden p-2.5 text-center sm:block xl:p-5'>
                <h5 className='text-sm font-medium uppercase xsm:text-base'>
                  Conversion
                </h5>
              </div>
            </div>

            {brandData.map((brand, key) => (
              <div
                className={`grid grid-cols-3 sm:grid-cols-5 ${
                  key === brandData.length - 1
                    ? ""
                    : "border-b border-stroke dark:border-strokedark"
                }`}
                key={key}
              >
                <div className='flex items-center gap-3 p-2.5 xl:p-5'>
                  {/* <div className='flex-shrink-0'>
                <img src={brand.logo} alt='Brand' />
              </div> */}
                  <p className=' text-black  sm:block'>{brand.name}</p>
                </div>

                <div className='flex items-center justify-center p-2.5 xl:p-5'>
                  <p className='text-black'>{brand.visitors}K</p>
                </div>

                <div className='flex items-center justify-center p-2.5 xl:p-5'>
                  <p className='text-meta-3'>${brand.revenues}</p>
                </div>

                <div className='hidden items-center justify-center p-2.5 sm:flex xl:p-5'>
                  <p className='text-black '>{brand.sales}</p>
                </div>

                <div className='hidden items-center justify-center p-2.5 sm:flex xl:p-5'>
                  <p className='text-meta-5'>{brand.conversion}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
