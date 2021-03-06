const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      const exist = state.mylist.find((item) => item.id === action.payload.id);
      if (exist) return { ...state };
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        mylist: state.mylist.filter((items) => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };

    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing:
          state.trends.find((items) => items.id === Number(action.payload)) ||
          state.originals.find(
            (items) => items.id === Number(action.payload)
          ) ||
          [],
      };
    case 'GET_VIDEO_SEARCH':
      if (action.payload === '') return { ...state, searchResult: [] };

      const listas = [...state.trends, ...state.originals];

      return {
        ...state,
        searchResult: listas.filter((item) =>
          item.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    default:
      return state;
  }
};

export default reducer;
