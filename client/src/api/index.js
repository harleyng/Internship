import axios from 'axios'
import { baseURL } from '../setting/constants/config'

const API = axios.create({ baseURL });

export default API;
