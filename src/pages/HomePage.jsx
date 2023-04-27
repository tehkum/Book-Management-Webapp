import "./Homepage.css";
import { UseBooks } from "..";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { bookData, favClickHandler, isRead } = useContext(UseBooks);

  return (
    <>
      <h1>All Available Books</h1>
      <ol>
        {bookData?.map((books) => {
          const { id, title, author, read, image } = books;
          return (
            <div className="book-card">
              <img src={image} alt={title} width="100%" />
              <li key={id}>
                <p>
                  <b>Title: </b>
                  {title}
                </p>
                <p>
                  <b>Author: </b>
                  {author}
                </p>
                <button
                  className="button-read"
                  onClick={() => isRead(books)}
                  disabled={read}
                >
                  Mark As Read
                </button>
                {!books.favourite ? (
                  <button
                    className="button-fav"
                    onClick={() => favClickHandler(books)}
                    style={{}}
                  >
                    Add To Favourites
                  </button>
                ) : (
                  <Link
                    style={{
                      width: "63%",
                      padding: "10px",
                      margin: "0 0 10px 0",
                      background: "#0000ff",
                      border: "none",
                      color: "white",
                      display: "inline-block",
                      textDecoration: "none"
                    }}
                    to="/Favourites"
                  >
                    Go To Favourites
                  </Link>
                )}
              </li>
            </div>
          );
        })}
      </ol>
    </>
  );
}
