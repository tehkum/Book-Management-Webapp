import { useContext } from "react";
import { UseBooks } from "..";

export default function ReadBook() {
  const { bookData } = useContext(UseBooks);

  return (
    <>
      <h1>Already Read Books</h1>
      <ol style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {bookData
          ?.filter((books) => books.read)
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
                </li>
              </div>
            );
          })}
      </ol>
    </>
  );
}
