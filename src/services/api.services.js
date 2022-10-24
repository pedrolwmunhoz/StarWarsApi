import Axios from 'axios'

export async function getPeoples () {
    return await Axios
        .get( 'https://swapi.dev/api/' )
        .then( resp => resp.data )
        .catch( erro => erro)
}