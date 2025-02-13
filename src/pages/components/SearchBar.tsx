import React, { useState } from "react";

//Trying to fix a github mistake

interface SearchBarProps {
  setLoading: (loading: boolean) => void;
  setUserData: (data: any) => void;
  setFoundUser: (loading: boolean) => void;
}

function SearchBar({ setLoading, setUserData, setFoundUser }: SearchBarProps) {
  interface FormEvent {
    preventDefault: () => void;
  }
  const [userName, setUserName] = useState("");

  async function handleSubmit(e: FormEvent): Promise<void> {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.github.com/users/${userName.replace(/\s+/g, "")}`
      );
      const data = await res.json();

      if (!data.message) {
        setUserData(data);
        setTimeout(() => {
          setLoading(false);
          setUserName("");
          setFoundUser(true);
        }, 1000);
      } else {
        setLoading(false);
        setFoundUser(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="search-bar-wrapper">
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Github profile name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
