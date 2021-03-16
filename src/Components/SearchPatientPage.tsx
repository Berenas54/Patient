import React, {useState} from "react";
import {useFormik} from "formik";
import {API, resourceType} from "../api/api";
import s from "./SearchPage.module.css"


function SearchPatientPage() {
    let [state, setState] = useState<resourceType>({
        address: [],
        birthDate: "",
        gender: "",
        id: "",
        identifier: [],
        name: [],
        resourceType: ""
    })
    let [error, setError] = useState("")

    const formik = useFormik({

        initialValues: {
            search: ''
        },
        onSubmit: values => {
            API.search(values.search)
                .then(res => {
                    setState(res.data.entry[0].resource)
                    setError("Patient not found")
                })
                .catch(e => setError(e.message))

            formik.resetForm()
            setState({
                address: [],
                birthDate: "",
                gender: "",
                id: "",
                identifier: [],
                name: [],
                resourceType: ""
            })
        },
    })
    return (<div>
            <form onSubmit={formik.handleSubmit}>
                <input className={s.input} type={'text'} {...formik.getFieldProps("search")}
                       placeholder={'enter your search term'}/>
                <button type={'submit'}>Search</button>
            </form>
            {state.name[0] !== undefined ?
                <div>
                    <h3>{state.name[0].family} {state.name[0].given[0]}</h3>
                    <p>Birthday: {state.birthDate}</p>
                    <p>Gender: {state.gender}</p>
                    <p>Address: {state.address[0].text}</p>
                </div> : <div>{error === "Cannot read property '0' of undefined" ? "Patient not found" : error}</div>}
        </div>

    );
}

export default SearchPatientPage;
