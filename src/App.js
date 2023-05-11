import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCompanies } from "./appActions";
import { Companies } from "./components/companies";
import { AddCompanyForm } from "./components/addCompanyForm";

function App() {
  useEffect(() => {
    dispatch(loadCompanies())
  }, [])

  const dispatch = useDispatch()
  const companies = useSelector(state => state.companies)

  console.log(companies)

  return (
    <div className="App">
      <AddCompanyForm />
      <Companies />
    </div>
  );
}

export default App;