const initialState = {
	companies: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COMPANIES":
      console.log("SET_COMPANIES")
      return {...state, companies: [...action.payload]}
    case "ADD_COMPANIES":
      console.log("ADD_COMPANIES")
      return {...state, companies: state.companies.concat(action.payload)}
    default:
      return state
  }
}