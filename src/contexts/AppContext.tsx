import  React, { useContext, useState }  from 'react';
import Toast from '../components/Toast';
import { useQuery } from 'react-query';
import * as apiClient from '../api-client';
type ToastMessage = {
    message: string;
    type: "SUCCESS" | "ERROR";
}

type AppContext = {
    showToast: (toastMessage: ToastMessage) => void;
    isLoggedIn : boolean;
};

const AppContext = React.createContext<AppContext | undefined>(undefined);

export const AppContextProvider = ({children}: {children: React.ReactNode}) => {
    
    const [toast, setToast] = useState<ToastMessage | undefined>(undefined);
    
    //Note:- The useQuery hook makes one fetch request during the first load, but does not refetch on subsequent renders to do refetch you can invalidateQueries refer "sigIn page"
    const {isError} = useQuery("validateToken", apiClient.validateToken, {retry: false});
    
    return(
        <AppContext.Provider
        value={{
            showToast: (toastMessage) => {
                setToast(toastMessage);
            },
            isLoggedIn: !isError
        }}>
            {toast && (<Toast 
                message={toast.message}
                type={toast.type}
                onClose={() => {
                    setToast(undefined)}}
            />
            )}
            {children}
        </AppContext.Provider>
    )
};

//creating hook that let our component easily accesss provider
export const useAppContext = () => {
    const context = useContext(AppContext);
    return context as AppContext;
}