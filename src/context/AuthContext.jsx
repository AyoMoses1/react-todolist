import React, {
  useState, useEffect, createContext, useContext,
} from 'react';

const AuthContext = createContext(null);

function getUsername() {
  // getting stored state
  const temp = localStorage.getItem('username');
  const savedUsername = JSON.parse(temp);
  return savedUsername || '';
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUsername());

  useEffect(() => {
    // storing user state
    const temp = JSON.stringify(user);
    localStorage.setItem('username', temp);
  }, [user]);
  const login = (user) => setUser(user);
  const logout = () => setUser(null);
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
