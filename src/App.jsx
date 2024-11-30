import { FaSearch } from "react-icons/fa";

export default function App() {
  return (
    <>
      <header className="bg-black text-white text-center h-12 flex justify-between items-center">
        <div>Italian Pizza</div>
        <nav>
          <ul className="flex justify-between">
            <li>Pizza</li>
            <li>Burgers</li>
            <li>Fries</li>
            <li>Sauce</li>
            <li>Drinks</li>
            <li>Delivery</li>
            <li>Contacts</li>
            <li>
              <FaSearch></FaSearch>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
