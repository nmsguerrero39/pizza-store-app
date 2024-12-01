import { FaSearch, FaPhone, FaMinusCircle, FaPlusCircle } from "react-icons/fa";

export default function App() {
  return (
    <>
      <header className="bg-black text-white text-center h-12 flex justify-between items-center px-56">
        <div className="font-play-hr italic text-2xl">Italian Pizza</div>
        <nav>
          <ul className="uppercase">
            <li className="inline-block px-3">Pizza</li>
            <li className="inline-block px-3">Burgers</li>
            <li className="inline-block px-3">Fries</li>
            <li className="inline-block px-3">Sauce</li>
            <li className="inline-block px-3">Drinks</li>
            <li className="inline-block px-3">Delivery</li>
            <li className="inline-block px-3">Contacts</li>
            <li className="inline-block px-3">
              <FaSearch className="text-xl"></FaSearch>
            </li>
          </ul>
        </nav>
      </header>
      <section className="relative flex items-center justify-between min-h-[50vh]">
        <div className="absolute inset-0 bg-hero-section bg-center bg-cover bg-no-repeat bg-fixed">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/50 to-black/50"></div>
        </div>
        <div className="relative z-20 w-screen flex items-center justify-between text-center px-56">
          <div>
            <img src="../src/assets/images/pizza-chef.jpg" className="w-40" />
          </div>
          <div className="text-white text-end">
            <div className="font-bold text-2xl">
              <p>123456, Florida</p>
              <p>Lorem ipsum</p>
              <p className="my-4 text-4xl">0(000) 000-00-00</p>
              <button className="bg-red-600 py-2 px-3 rounded text-base">
                <FaPhone className="inline-block text-center mr-3"></FaPhone>
                Order Bell
              </button>
            </div>
          </div>
        </div>
      </section>
      <main className="px-56">
        <div className="grid grid-cols-3 gap-3">
          <div className="shadow-lg w-72 flex flex-col justify-center items-center align-center py-4 px-6 text-center">
            <img className="w-48" src="../src/assets/images/dish/pizza-1.png" />
            <h2 className="font-bold text-2xl">Pizza Margherita</h2>
            <p className="text-base my-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit
            </p>
            <div className="flex justify-between w-40 font-bold">
              <div className="border-2 rounded-full px-2 py-1 border-red-400 text-red-400">
                25
              </div>
              <div className="border-2 rounded-full px-2 py-1 border-red-400 text-red-400">
                30
              </div>
              <div className="border-2 rounded-full px-2 py-1 border-red-400 text-red-400">
                42
              </div>
            </div>
            <div className="flex w-64 justify-between my-4">
              <p className="font-bold text-2xl">10 000&#36;</p>
              <div className="flex items-center">
                <FaMinusCircle></FaMinusCircle>
                <input
                  type="text"
                  className="w-7 mx-0.5 bg-slate-400 rounded text-white"
                />
                <FaPlusCircle></FaPlusCircle>
              </div>
            </div>
            <button className="bg-red-600 py-2 px-10 rounded text-white uppercase font-bold">
              Buy
            </button>
          </div>
          <div className="shadow-lg w-72 flex flex-col justify-center items-center align-center py-4 px-6 text-center">
            <img className="w-48" src="../src/assets/images/dish/pizza-1.png" />
            <h2 className="font-bold text-2xl">Pizza Margherita</h2>
            <p className="text-base my-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit
            </p>
            <div className="flex justify-between w-40 font-bold">
              <div className="border-2 rounded-full px-2 py-1 border-red-400 text-red-400">
                25
              </div>
              <div className="border-2 rounded-full px-2 py-1 border-red-400 text-red-400">
                30
              </div>
              <div className="border-2 rounded-full px-2 py-1 border-red-400 text-red-400">
                42
              </div>
            </div>
            <div className="flex w-64 justify-between my-4">
              <p className="font-bold text-2xl">10 000&#36;</p>
              <div className="flex items-center">
                <FaMinusCircle></FaMinusCircle>
                <input
                  type="text"
                  className="w-7 mx-0.5 bg-slate-400 rounded text-white"
                />
                <FaPlusCircle></FaPlusCircle>
              </div>
            </div>
            <button className="bg-red-600 py-2 px-10 rounded text-white uppercase font-bold">
              Buy
            </button>
          </div>
          <div className="shadow-lg w-72 flex flex-col justify-center items-center align-center py-4 px-6 text-center">
            <img className="w-48" src="../src/assets/images/dish/pizza-1.png" />
            <h2 className="font-bold text-2xl">Pizza Margherita</h2>
            <p className="text-base my-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit
            </p>
            <div className="flex justify-between w-40 font-bold">
              <div className="border-2 rounded-full px-2 py-1 border-red-400 text-red-400">
                25
              </div>
              <div className="border-2 rounded-full px-2 py-1 border-red-400 text-red-400">
                30
              </div>
              <div className="border-2 rounded-full px-2 py-1 border-red-400 text-red-400">
                42
              </div>
            </div>
            <div className="flex w-64 justify-between my-4">
              <p className="font-bold text-2xl">10 000&#36;</p>
              <div className="flex items-center">
                <FaMinusCircle></FaMinusCircle>
                <input
                  type="text"
                  className="w-7 mx-0.5 bg-slate-400 rounded text-white"
                />
                <FaPlusCircle></FaPlusCircle>
              </div>
            </div>
            <button className="bg-red-600 py-2 px-10 rounded text-white uppercase font-bold">
              Buy
            </button>
          </div>
          <div className="shadow-lg w-72 flex flex-col justify-center items-center align-center py-4 px-6 text-center">
            <img className="w-48" src="../src/assets/images/dish/pizza-1.png" />
            <h2 className="font-bold text-2xl">Pizza Margherita</h2>
            <p className="text-base my-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit
            </p>
            <div className="flex justify-between w-40 font-bold">
              <div className="border-2 rounded-full px-2 py-1 border-red-400 text-red-400">
                25
              </div>
              <div className="border-2 rounded-full px-2 py-1 border-red-400 text-red-400">
                30
              </div>
              <div className="border-2 rounded-full px-2 py-1 border-red-400 text-red-400">
                42
              </div>
            </div>
            <div className="flex w-64 justify-between my-4">
              <p className="font-bold text-2xl">10 000&#36;</p>
              <div className="flex items-center">
                <FaMinusCircle></FaMinusCircle>
                <input
                  type="text"
                  className="w-7 mx-0.5 bg-slate-400 rounded text-white"
                />
                <FaPlusCircle></FaPlusCircle>
              </div>
            </div>
            <button className="bg-red-600 py-2 px-10 rounded text-white uppercase font-bold">
              Buy
            </button>
          </div>
          <div className="shadow-lg w-72 flex flex-col justify-center items-center align-center py-4 px-6 text-center">
            <img className="w-48" src="../src/assets/images/dish/pizza-1.png" />
            <h2 className="font-bold text-2xl">Pizza Margherita</h2>
            <p className="text-base my-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit
            </p>
            <div className="flex justify-between w-40 font-bold">
              <div className="border-2 rounded-full px-2 py-1 border-red-400 text-red-400">
                25
              </div>
              <div className="border-2 rounded-full px-2 py-1 border-red-400 text-red-400">
                30
              </div>
              <div className="border-2 rounded-full px-2 py-1 border-red-400 text-red-400">
                42
              </div>
            </div>
            <div className="flex w-64 justify-between my-4">
              <p className="font-bold text-2xl">10 000&#36;</p>
              <div className="flex items-center">
                <FaMinusCircle></FaMinusCircle>
                <input
                  type="text"
                  className="w-7 mx-0.5 bg-slate-400 rounded text-white"
                />
                <FaPlusCircle></FaPlusCircle>
              </div>
            </div>
            <button className="bg-red-600 py-2 px-10 rounded text-white uppercase font-bold">
              Buy
            </button>
          </div>
          <div className="shadow-lg w-72 flex flex-col justify-center items-center align-center py-4 px-6 text-center">
            <img className="w-48" src="../src/assets/images/dish/pizza-1.png" />
            <h2 className="font-bold text-2xl">Pizza Margherita</h2>
            <p className="text-base my-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit
            </p>
            <div className="flex justify-between w-40 font-bold">
              <div className="border-2 rounded-full px-2 py-1 border-red-400 text-red-400">
                25
              </div>
              <div className="border-2 rounded-full px-2 py-1 border-red-400 text-red-400">
                30
              </div>
              <div className="border-2 rounded-full px-2 py-1 border-red-400 text-red-400">
                42
              </div>
            </div>
            <div className="flex w-64 justify-between my-4">
              <p className="font-bold text-2xl">10 000&#36;</p>
              <div className="flex items-center">
                <FaMinusCircle></FaMinusCircle>
                <input
                  type="text"
                  className="w-7 mx-0.5 bg-slate-400 rounded text-white"
                />
                <FaPlusCircle></FaPlusCircle>
              </div>
            </div>
            <button className="bg-red-600 py-2 px-10 rounded text-white uppercase font-bold">
              Buy
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
