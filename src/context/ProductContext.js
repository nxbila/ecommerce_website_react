import {createContext, useContext, useEffect, useReducer} from "react";
import axios from 'axios';
import reducer from "../reducer/productReducer";



//Create a context
const AppContext = createContext();
 const API = "https://api.pujakaitem.com/api/products"

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
 };

//Provider
const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const getProducts = async (url) => {
        dispatch({type:"SET_LOADING"});
      try {
         
          const res = await axios.get(url);
          const products = await res.data;
          //we want to store this products inside useReducer Hook. payload means for this task what data we require
          dispatch({type:"SET_API_DATA", payload: products});
      } catch (error) {
        dispatch({type:"API_ERROR"});
      }
    };    
    // SECOND API CALL FOR SINGLE PRODUCT
    const getSingleProduct = async (url) => {
        dispatch({type: "SET_SINGLE_LOADING"});
        try{
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({type: "SET_SINGLE_PRODUCT", payload: singleProduct});
        }catch(error) {
            dispatch({type: "SET_SINGLE_ERROR"});
        }
    }
   
    useEffect(()=> {
        getProducts(API);
    },[]);

    //children is the App here.
return <AppContext.Provider value = {{...state, getSingleProduct}}>{children}</AppContext.Provider>
};

//custom hook
const useProductContext = () => {
    return useContext(AppContext);
}

export {AppProvider, AppContext, useProductContext};
