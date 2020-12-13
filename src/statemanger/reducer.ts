import { CountyActionTypes, ICountryData, SET_COUNTRY_LIST } from "./type";

const initialState = {
    country : []
}

export function Country(
    state =  initialState,
    action: CountyActionTypes
): ICountryData {

    switch(action.type) {
        case SET_COUNTRY_LIST:
            return {
                ...state,
                country: action.data
            }
        default:
            return state
    }
}