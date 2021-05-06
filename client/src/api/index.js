import axios from 'axios'
import { baseURL } from '../constants/config'

const API = axios.create({ baseURL });

export default API;
