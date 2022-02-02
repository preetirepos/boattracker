import axios from 'axios';

const url = 'http://localhost:5000/boats';

export const fetchBoats = () => axios.get(url);