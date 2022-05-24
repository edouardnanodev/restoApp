import yelp from "../api/yelp";
import { useState } from "react";

type props = {
    term: string;
};
export default () => {
    const [results, setResults] = useState({
        data: null,
        loading: false,
        error: '',
    });
    const searchRestaurant:any = async (term: props) => {
        setResults({
            data:null,
            loading:true,
            error:''
        })
        try {
            const response = await yelp.get("/search", {
                params: {
                    limit: 15,
                    term,
                    location: "Toronto",
                },
            });

            setResults({
                data:response.data.businesses,
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

    return [results, searchRestaurant]
};
