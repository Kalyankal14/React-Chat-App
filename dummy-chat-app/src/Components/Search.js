import React, { useContext, useState } from "react";
import {
  collection,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../Context/AuthContext";
import { ChatContext } from "../Context/ChatContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  const handleSearch = async () => {
    //const userRef = collection(db, "users");
    // Create a query against the collection.
    const q = query(collection(db, "users"), where("displayName", "==", username));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
      setErr(false);
    } catch (err) {
      //console.error(err);
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    
    const combinedId =
      currUser.uid > user.uid
        ? currUser.uid + user.uid
        : user.uid + currUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
        await updateDoc(doc(db, "userChats", currUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currUser.uid,
            displayName: currUser.displayName,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}
    setUser(null);
    setUsername("");
    dispatch({ type: "CHANGE_USER", payload: user });
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Search for the user"
          onKeyDown={handleKey}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      {err && <span>User not Found!</span>}

      {user && (
        <div className="userChat" onClick={handleSelect}>
          <div className="userChatInfo">
            <span> {user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};
export default Search;
