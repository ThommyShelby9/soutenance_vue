import axios from 'axios';

const clientHttp = axios.create(
    {
        baseURL: "http://localhost:8080/api",
        headers: {
            Accept: 'text/plain',
            'Content-Type': 'application/json',
        }
    }
)

export default  clientHttp