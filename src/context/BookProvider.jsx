import { useState, createContext, useEffect } from "react";
import { fakeFetch } from "../api/api";

export const UseBooks = createContext();

export function BookProvider({ children }) {
  const [bookData, setBook] = useState([]);
  const [userData, setUser] = useState({});

  useEffect(() => fetchDetails, []);

  const fetchDetails = async () => {
    try {
      const { status, data } = await fakeFetch("https://example.com/api/books");
      if (status === 200) {
        setBook(data.books);
        setUser(data.user);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromFav = (item) => {
    setBook((bookData) => {
      bookData[bookData?.indexOf(item)].favourite = false;
      return [...bookData];
    });
    // console.log(item);
  };

  const favClickHandler = (item) => {
    setBook((bookData) => {
      bookData[bookData?.indexOf(item)].favourite = true;
      return [...bookData];
    });
    // setFavouriteBooks([...favouriteBook, item]);
    // console.log(bookData);
  };

  const isRead = (item) => {
    setBook((bookData) => {
      bookData[bookData?.indexOf(item)].read = true;
      return [...bookData];
    });
  };

  return (
    <UseBooks.Provider
      value={{
        bookData,
        userData,
        favClickHandler,
        isRead,
        removeFromFav
      }}
    >
      {children}
    </UseBooks.Provider>
  );
}
