import yelp from "../api/yelp";
import { useState } from "react";

type props = {
    id: string;
};
export default () => {
    const [result, setResults] = useState({
        data: null,
        loading: false,
        error: '',
    });
    const getRestaurant:any = async (id: props) => {
        setResults({
            data:null,
            loading:true,
            error:''
        })
        try {
            const response = await yelp.get(`${id}`);
            setResults({
                data:response.data,
                loading:false,
                error:''
            })

        } catch (error) {
            setResults({
                data:null,
                loading:false,
                error:"something went wrong!"
            })
        }
    };

    return [result, getRestaurant]
};
