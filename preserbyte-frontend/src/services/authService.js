export const login = (email, password) => {
  if (email === "admin@preserbyte.com" && password === "admin123") {
    localStorage.setItem("role", "ADMIN");
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.clear();
};
