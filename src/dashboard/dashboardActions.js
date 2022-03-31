import axios from 'axios'
import consts from '../consts'


export function getSummary() {

    const request = axios.get(`${consts.API_URL}/batch/expired`)
    console.log(request) 
    return {
        type: 'SUMMARY_FETCHED',
        payload: request
    }
}