export const SET_COUNTRY_LIST = 'SET_COUNTRY_LIST'

export interface ICountryData {
    country: any[];
}

interface ICountyAction {
    type: typeof SET_COUNTRY_LIST
    data: any
  }


export type CountyActionTypes = ICountyAction;