import axios from '@/lib/axios'

export const loadOccupation = async () => {
    let occupationOptions = []
    await axios
        .get('api/occupation')
        .then(response => {
            occupationOptions = response.data.data
        })
        .catch(error => {
            console.log(error)
        })

    return occupationOptions
}
export const loadInstitute = async () => {
    let instituteOptions = []
    await axios
        .get('api/institute-organization')
        .then(response => {
            instituteOptions = response.data.data
        })
        .catch(error => {
            console.log(error)
        })

    return instituteOptions
}

/**
 * loads Countries from the Countries API into the countries select option
 */
export const loadCountries = async () => {
    let countryOptions = []
    await axios
        .get('api/countries')
        .then(response => {
            countryOptions = response.data.data
        })
        .catch(error => {
            console.log(error)
        })

    return countryOptions
}
export const loadDivisions = async countryId => {
    let divisionOptions = []
    console.log('api/division-country/' + '/' + countryId)
    await axios
        .get('api/division-country/' + countryId)
        .then(response => {
            divisionOptions = response.data.data
        })
        .catch(error => {
            console.log(error)
        })

    return divisionOptions
}

export const loadCities = async divisionId => {
    let cityOptions = []
    console.log('api/city-division/' + divisionId)
    await axios
        .get('api/city-division/' + divisionId)
        .then(response => {
            cityOptions = response.data.data
        })
        .catch(error => {
            console.log(error)
        })

    return cityOptions
}

export const loadProfilePicture = async () => {
    let profilePicture
    await axios
        .get('sanctum/csrf-cookie')
        .then(response => {
            if (response.status == 204) {
                return axios.get('api/profile-picture', {
                    responseType: 'blob',
                })
            }
        })
        .then(response => {
            profilePicture = response
        })
        .catch(error => {
            console.log(error)
        })

    return profilePicture
}
