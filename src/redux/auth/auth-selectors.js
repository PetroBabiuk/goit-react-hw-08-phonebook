const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;
const getError = state => state.auth.error;
const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
    getIsLoggedIn,
    getUserName,
    getUserEmail,
    getError,
    getIsFetchingCurrentUser,
};

export default authSelectors;