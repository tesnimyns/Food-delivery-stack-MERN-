import { createContext, useEffect, useState } from "react";
import axios from 'axios'

interface CartItems {
    [itemId: string]: number;
}

interface StoreContextType {
    food_list: {
        _id: string;
        name: string;
        image: string;
        price: number;
        description: string;
        category: string;
    }[];
    cartItems: { [key: string]: number };
    addToCart: (id: string) => void;
    removeFromCart: (id: string) => void;
    getTotalCartAmount: () => number;
    url: string;
    token: string;
    setToken: (token: string) => void;
}

const defaultValue: StoreContextType = {
    food_list: [],
    cartItems: {},
    addToCart: () => {},
    removeFromCart: () => {},
    getTotalCartAmount: () => 0,
    url: "",
    token: "",
    setToken: () => {}
};

export const StoreContext = createContext<StoreContextType>(defaultValue);

const StoreContextProvider = (props: any) => {
    const [cartItems, setCartItems] = useState<CartItems>({});
    const url = "http://localhost:4000";
    const [token, setToken] = useState<string>("");
    const [food_list, setFoodList] = useState(defaultValue.food_list);

    const addToCart = async(itemId: string) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    };

    const removeFromCart = async (itemId: string) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = food_list.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    const fetchFoodList = async ()=>{
        const response = await axios.get(url+"/api/food/list");
        setFoodList(response.data.data);
    }

    const loadCartData = async (token: string) =>{
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
        setCartItems(response.data.cartData);
    }



    useEffect(() => {
        const loadData = async () => {
            await fetchFoodList();
            const storedToken = localStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
                await loadCartData(storedToken);
            }
        };
        loadData();
    }, []);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
