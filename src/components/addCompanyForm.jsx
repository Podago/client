import { useState } from "react";
import { addCompany } from "../appActions";
import { useDispatch } from "react-redux";

export function AddCompanyForm() {
    const dispatch = useDispatch()

    const [name, setName] = useState("");
    const [inn, setInn] = useState("");
    const [ogrn, setOgrn] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addCompany(name, inn, ogrn))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input ype="text" 
                value={name}
                placeholder="name"
                onChange={(e) => setName(e.target.value)} />
            <input ype="text" 
                value={inn}
                placeholder="inn"
                onChange={(e) => setInn(e.target.value)} />
            <input ype="text" 
                value={ogrn}
                placeholder="ogrn"
                onChange={(e) => setOgrn(e.target.value)} />
            <input type="submit" />
        </form>
    );
}