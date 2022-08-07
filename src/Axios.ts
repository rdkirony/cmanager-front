import axios from "axios";
const API_URL = "http://localhost:8080";

const Api = axios.create({
    baseURL: API_URL,
    headers:{
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true',
      "Access-Control-Allow-Methods": "*",
       Authorization: `Bearer ${localStorage.getItem('token')}`
    }
    
  })

export default Api