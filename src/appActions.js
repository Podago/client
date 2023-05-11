import axios from "axios"

export const loadCompanies = () => {
    return function(dispatch) {
      axios.get("https://localhost:7235/api/company/all")
        .then(res => dispatch({type: "SET_COMPANIES", payload: res.data}))
    }
}

export const addCompany = (name, inn, ogrn) => {
    return function(dispatch) {
        console.log(name, inn, ogrn);

        if(!name || name === "" || !inn || !ogrn){
            return;
        }

        axios.post('https://localhost:7235/api/company', null, {
                params: {
                    name,
                    inn,
                    ogrn
                }
            })
            .then(res => dispatch({
                type: "ADD_COMPANIES", 
                payload: res.data
            }));
    }
}