//Reducer
export function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN:
      return {
        token: action.token,
      };
    case CREATE_AD:
      const ad = createAdvert(action.advert);
      action.history.push(`/adverts/${advert._id}`);
      return {
        adverts: [...state.adverts, ad],
      };
    default:
      return state;
  }
}
