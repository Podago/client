import { useSelector } from "react-redux";

export function Companies() {
    const companies = useSelector(state => state.companies)

    return (
        <table>
            <tbody>
                {companies.map((company, index) => 
                <tr key={index}>
                    {company.id}   {company.name}     {company.inn}      {company.ogrn}
                </tr>)}
            </tbody>
        </table>
    );
}