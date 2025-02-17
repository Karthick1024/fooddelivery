import { createContext, useContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const Storecontext = createContext(null)

const Storecontextprovider = (props) => {

    const [cartitems, setCartitems] = useState({})



    const addtocart = (itemid) => {
        if (!cartitems[itemid]) {
            setCartitems((prev) => ({
                ...prev, [itemid]: 1
            }))
        }
        else {
            setCartitems((prev) => ({
                ...prev, [itemid]: prev[itemid] + 1
            }))
        }
    }

    const removefromcart = (itemid) => {
        setCartitems((prev) => ({
            ...prev, [itemid]: prev[itemid] - 1
        }))

    }


    const getTotalcartamount = () => {
        let totalamount = 0;
        for (const item in cartitems) {

            if (cartitems[item] > 0) {

                let iteminfo = food_list.find((product) => product._id === item);
                totalamount += iteminfo.price * cartitems[item];
            }

        }
        return totalamount;
    }

    const contextValue = {
        food_list, cartitems, setCartitems, addtocart, removefromcart,getTotalcartamount

    }
    return (
        <Storecontext.Provider value={contextValue}>
            {props.children}
        </Storecontext.Provider>
    )
}

export default Storecontextprovider;