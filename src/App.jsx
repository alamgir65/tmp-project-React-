import SiamConponent from './Components/SiamConponent';
// import balPakna from './Components/SiamConponent';
const App = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
      <div className="bordder rounded-2xl shadow-lg text-center">
        <h1 className="text-2xl md:text-4xl lg:text-6xl text-red-600 md:text-blue-700 lg:text-fuchsia-800 hover:text-[hotpink]">
          <SiamConponent/>
        </h1>
        <button className="border-2 mt-4 px-4 py-2 rounded-full text-white bg-[hotpink] hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">Read more</button>
      </div>
      
      <div className="bordder rounded-2xl  shadow-lg text-center">
        <h1 className="text-2xl md:text-4xl lg:text-6xl text-red-600 md:text-blue-700 lg:text-fuchsia-800 hover:text-[hotpink]">Hello World!</h1>
        <button className="border-2 mt-4 px-4 py-2 rounded-full text-white bg-[hotpink] hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">Read more</button>
      </div>
      <div className="bordder rounded-2xl shadow-lg text-center">
        <h1 className="text-2xl md:text-4xl lg:text-6xl text-red-600 md:text-blue-700 lg:text-fuchsia-800 hover:text-[hotpink]">Hello World!</h1>
        <button className="border-2 mt-4 px-4 py-2 rounded-full text-white bg-[hotpink] hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">Read more</button>
      </div>

    </div>
  );
};

export default App;