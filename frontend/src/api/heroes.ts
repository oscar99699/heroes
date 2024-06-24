import axios from "axios";
const API = 'http://localhost:3000'

export const findHeroes = async (search : string) => {
    const response = await axios.get(`${API}/heroes/${search}`)
    return response.data
}

export const destroyUniverse = async () => {
    const response = await axios.delete(`${API}/heroes/`)
    return response.data
}

export const createUniverse = async () => {
    const response = await axios.post(`${API}/heroes/`)
    return response.data
}

export const blackHole = async () => {
    const response = await axios.get(`${API}/heroes/void/hole`)
    return response.data
}
