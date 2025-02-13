import React, { useState } from "react";
import SearchBar from "./SearchBar";
import LoadingAnimation from "./LoadingAnimation";
import UserProfile from "./UserProfile";


export interface UserData {
  avatar_url: string;
  bio: string;
  html_url: string;
  name: string;
  public_repos: number;
  repos_url: string;
}
function Home() {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [foundUser, setFoundUser] = useState(false);

  return (
    <div>
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
    </div>
  );
}

export default Home;
