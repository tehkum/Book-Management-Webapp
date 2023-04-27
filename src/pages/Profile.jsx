import { useContext } from "react";
import { UseBooks } from "..";
import "./profile.css";

export default function Profile() {
  const { userData } = useContext(UseBooks);

  return (
    <>
      <h1>Your Profile</h1>
      <div className="card">
        <img src={userData.img} alt="..." width="300px" />
        <h3>Name: {userData.name}</h3>
        <p>
          <b>bio: </b> {userData.bio}
        </p>
      </div>
    </>
  );
}
