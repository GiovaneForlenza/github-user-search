import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";

interface UserData {
  avatar_url: string;
  bio: string;
  hireable: boolean;
  html_url: string;
  name: string;
  public_repos: number;
  repos_url: string;
}

function UserProfile({ userData }: { userData: UserData }) {
  const { avatar_url, bio, hireable, html_url, name, public_repos, repos_url } =
    userData;
  useEffect(() => {
    console.log(userData);
  }, []);

  return (
    <div className="user-profile-wrapper">
      <div className="header">
        <div className="left">
          <div className="img">
            <img src={avatar_url} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="text">
            <p className="name">{name}</p>
            <p className="bio">{bio}</p>
          </div>
          <div className="icons">
            <a href={html_url} target="__blank">
              <FaGithub />
            </a>
            <a className="repos" href={repos_url} target="__blank">
              <FaBookBookmark />
              <p>{public_repos} public repos</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
