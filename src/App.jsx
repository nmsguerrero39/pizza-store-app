import { FaSearch, FaPhone } from "react-icons/fa";

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
              <FaSearch className="text-xl "></FaSearch>
            </li>
          </ul>
        </nav>
      </header>
      <section className="bg-hero-section bg-center bg-cover bg-no-repeat bg-fixed relative h-1/2">
        <div>
          <img src="../src/assets/images/pizza-chef.jpg" className="w-40" />
        </div>
        <div>
          <p>123456, Florida</p>
          <p>Lorem ipsum</p>
          <p>0(000) 000-00-00</p>
          <button>
            <FaPhone></FaPhone>
            Order Bell
          </button>
        </div>
      </section>
    </>
  );
}
