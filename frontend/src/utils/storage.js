
export const getAuthFromStorage = () => {
    const authData = localStorage.getItem("authData");
    return authData ? JSON.parse(authData) : null;
}
