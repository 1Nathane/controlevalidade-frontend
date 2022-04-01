import axios from 'axios'
import consts from '../consts'

const controleValidadeUser = JSON.parse(localStorage.getItem('_controlevalidade_user'))

export function getSummary() {

    const request = axios.get(`${consts.API_URL}/batch/summary?user_email=_${controleValidadeUser.email}`)
    console.log(request) 
    return {
        type: 'SUMMARY_FETCHED',
        payload: request
    }
}