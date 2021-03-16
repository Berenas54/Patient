import axios from 'axios'


type resType = {
    entry: Array<entryType>
    id: string
    link: any
    meta: { lastUpdated: string }
    resourceType: string
    total: number
    type: string
}

export type resourceType = {
    address: any
    birthDate: string
    gender: string
    id: string
    identifier: any
    name: any
    resourceType: string
}


type entryType = {
    fullUrl: string
    link: any
    resource: resourceType
}

const instance = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://api.orionhealth.io/fhir/3.0/Patient/',
    headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${"KKS11qBTukBbmCUircGVB3FZprTN"}`,
        "Access-Control-Allow-Origin": "*"
    }
})


export const API = {
    search(values: string) {
        return instance.get<resType>(`?family=${values}&gender=male`)
    }
}

