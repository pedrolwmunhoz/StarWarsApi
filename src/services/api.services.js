import Axios from 'axios'

export async function getApi ( url ) {
    return await Axios
        .get( `https://swapi.dev/api/${url}` )
        .then( resp => {
            return resp.data
        } )
        .catch( erro => erro)
}