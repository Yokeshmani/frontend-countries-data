import Axios from "axios"
import { SET_COUNTRY_LIST } from "./type";

export function setCountryList(name?: string) {
    return async (dispatch : any) => {
        let data = await Axios.get( (name) ?  `https://restcountries.eu/rest/v2/name/${name}` : "https://restcountries.eu/rest/v2/all");
        dispatch({
            type: SET_COUNTRY_LIST,
            data: data.data
        })
    }
}