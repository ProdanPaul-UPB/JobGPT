export const getAuthFromStorage = () => {
    const authData = localStorage.getItem("authData");
    return authData ? JSON.parse(authData) : null;
};

export const saveAuthToStorage = (token) => {
    localStorage.setItem("authData", JSON.stringify(token));
};
