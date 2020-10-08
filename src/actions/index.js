export const setFavorite =  payload => ({
   type: 'SET_FAVORITE',
   payload: payload,
});

export const deleteFavorite = payload => ({
   type: 'DELETE_FAVORITE',
   payload: payload,
});

export const loginRequest = payload => ({
   type: 'LOGIN_REQUEST',
   payload: payload,
});

export const logoutRequest = payload => ({
   type: 'LOGOUT_REQUEST',
   payload: payload,
});