import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://projetogria.herokuapp.com'
    
})

export const busca = async(url: any,setDado: any) => { 
    const resposta = await api.get(url)
    setDado(resposta.data)
}