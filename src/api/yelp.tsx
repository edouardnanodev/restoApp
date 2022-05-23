
import axios from "axios";


export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization:"Bearer 74-8LZ-1DN2aTRBY4ZfXYcTYUwG4aqcDkWE6bwv-veLJyR4xLaEsAC14x0I1Q5LZvvIHU_IQQ_w0fbd0B5PiQU1eB4HnJclX9YV8IeUbOrcDHVRyjTkgvVPVXreLYnYx"
    }
})