import { createContext, useState } from 'react';
export const UserContext = createContext();

export function UserProvider({children}) {
  const [userData, setUserData] = useState(() => {
    const data = sessionStorage.getItem('@githuber:userData');
    if (data) {
      return JSON.parse(data);
    }
    return {};
  });

  const [newUserData, setNewUserData] = useState(() => {
    const data = sessionStorage.getItem('@githuber:newUserData');
    if (data) {
      return JSON.parse(data);
    }
    return {};
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const auth = sessionStorage.getItem('@githuber:auth');
    if (auth) {
      return JSON.parse(auth);
    }
    return false;
  })

  const {
    login,
    name,
    email,
    location,
    company,
    bio,
    avatar_url,
    followers_url,
    following_url,
    organizations_url,
    starred_url,
    public_repos,
    repos_url,
    public_gists,
    followers,
    following,
  } = userData;

  const handleSaveProfile = () => {
    setUserData(newUserData);
    sessionStorage.setItem('@githuber:userData', JSON.stringify(newUserData));
  }

  return(
    <UserContext.Provider value= {
      {
        userData,
        setUserData,
        newUserData,
        setNewUserData,
        isAuthenticated,
        setIsAuthenticated,
        login,
        name,
        email,
        location,
        company,
        bio,
        avatar_url,
        followers_url,
        following_url,
        organizations_url,
        starred_url,
        public_repos,
        repos_url,
        public_gists,
        followers,
        following,
        handleSaveProfile,
      }
    }>
      {children}
    </UserContext.Provider>
  );
}