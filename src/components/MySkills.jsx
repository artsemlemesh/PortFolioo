import React from "react";


const MySkills = () => {
  return (
    <div className="container mx-auto p-8 ">
      <h1 className="text-3xl font-bold mb-8 text-center">My Skills</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4">
        <div className=" transform transition-transform duration-500 hover:scale-110 hover:rotate-3">
          <div className=" max-w-sm mx-auto bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-500 text-white p-4 flex items-center">
            <img  src='front.png'  alt="React Logo" className="h-6 w-6 mr-2" />

              <h2 className="text-xl font-semibold">frontend</h2>
            </div>
            <div className="bg-gray-100 p-4">
                <ul className="text-gray-700">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JS</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>TailwindCSS</li>
                  <li>OAuth</li>
                </ul>
            </div>
          </div>
          
        </div>
        <div className=" transform transition-transform duration-500 hover:scale-110 hover:rotate-3">
        <div className=" max-w-sm mx-auto bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-500 text-white p-4 flex items-center">
            <img  src='back.png'  alt="React Logo" className="h-6 w-6 mr-2" />

              <h2 className="text-xl font-semibold">backend</h2>
            </div>
            <div className="bg-gray-100 p-4">
            <ul className="text-gray-700">
                  <li>Django</li>
                  <li>Python</li>
                  <li>Restful APIs</li>
                  <li>MySQL</li>
                  <li>PostgreSQL</li>
                </ul>
            </div>
          </div>
        </div>
        <div className=" transform transition-transform duration-500 hover:scale-110 hover:rotate-3">
        <div className=" max-w-sm mx-auto bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-500 text-white p-4">
              <h2 className="text-xl font-semibold">Other</h2>
            </div>
            <div className="bg-gray-100 p-4">
            <ul className="text-gray-700">
                  <li>Choreo</li>
                  <li>Docker</li>
                  <li>Postman</li>
                  <li>Railway</li>
                  <li>ngrok</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
