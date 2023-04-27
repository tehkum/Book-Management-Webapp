import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UseBooks } from "..";
import "./Header.css";
import book from "../images/book.png";

export default function Header() {
  const { bookData } = useContext(UseBooks);

  const { read, fav } = bookData.reduce(
    (acc, data) => {
      if (data.read) {
        acc = { ...acc, read: acc.read + 1 };
      }
      if (data.favourite) {
        acc = { ...acc, fav: acc.fav + 1 };
      }
      return { ...acc };
    },
    { read: 0, fav: 0 }
  );

  return (
    <div className="header">
      <h1>
        <img src={book} alt="book" width="50px" height="50px" />
        Book Management
      </h1>
      <NavLink to="/">Home</NavLink> ||
      <NavLink to="/Favourites"> Favourites({fav})</NavLink> ||
      <NavLink to="/Profile"> Profile</NavLink> ||
      <NavLink to="/Read-book"> Read({read})</NavLink>
    </div>
  );
}
