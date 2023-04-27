import { useContext } from "react";
import { UseBooks } from "..";

export default function Favourites() {
  const { removeFromFav, bookData, isRead } = useContext(UseBooks);

  return (
    <>
      <h1>Favourite Books</h1>
      <ol style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {bookData
          ?.filter((book) => book.favourite)
          .map((books) => {
            const {
              id,
              title,
              author,
              publisher,
              year,
              read,
              image,
              price
            } = books;
            return (
              <div
                style={{
                  border: "2px solid black",
                  width: "250px",
                  margin: "10px 20px",
                  padding: "10px"
                }}
              >
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
                    style={{ width: "70%", padding: "8px", margin: "10px 0" }}
                    disabled={read}
                    onClick={() => isRead(books)}
                  >
                    Mark As Read
                  </button>
                  <button
                    onClick={() => removeFromFav(books)}
                    style={{
                      width: "70%",
                      padding: "10px",
                      margin: "0 0 10px 0",
                      background: "#0000ff",
                      border: "none",
                      color: "white"
                    }}
                  >
                    Remove From Favourites
                  </button>
                </li>
              </div>
            );
          })}
      </ol>
    </>
  );
}
