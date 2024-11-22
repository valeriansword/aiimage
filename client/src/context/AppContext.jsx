import axios from "axios";
import { createContext, useState } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false)
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [credit , setCredit] = useState(false)
    
    const backendUrl = import.meta.env.VITE_BACKEND_URL  



    const generateImage = async (prompt) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/image/generate-image', { prompt }, { headers: {token: token } })
            
            if (data.success) {
                return data.resultImage
            } else {
                alert(data.message)
            }
        } catch (error) {
            alert(error.message)
        }
    }


    const value = {
        user,setUser,showLogin,setShowLogin,backendUrl,token, setToken,credit , setCredit , generateImage
    }
    return (
        <AppContext.Provider value={value}>
           {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider