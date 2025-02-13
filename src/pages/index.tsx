import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import LoadingAnimation from "./components/LoadingAnimation";
import UserProfile from "./components/UserProfile";

function index() {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [foundUser, setFoundUser] = useState(false);
  return (
    <div className="content-wrapper">
      <SearchBar
        setLoading={setLoading}
        setUserData={setUserData}
        setFoundUser={setFoundUser}
      />
      {loading ? (
        <LoadingAnimation />
      ) : foundUser && userData ? (
        <UserProfile userData={userData} />
      ) : (
        <h1>User not found!</h1>
      )}
    </div>
  );
}

export default index;
