import {  useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom"
import * as apiClient from '../api-client';
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm";
import { useAppContext } from "../contexts/AppContext";


export default function EditHotel() {

    const { hotelId  } = useParams();
    const {showToast} = useAppContext();
    const {data : hotel} = useQuery("fetchMyHotelsById",() => apiClient.fetchMyHotelsById(hotelId || ""), {
        enabled: !!hotelId,
    });

    const { mutate, isLoading } = useMutation(apiClient.updateMyHotelById, {
        onSuccess: ()=>{
            showToast({ message: "Hotel Saved!", type: "SUCCESS" });
        },
        onError: ()=> {
            showToast({ message: "Error Saving Hotel", type: "ERROR" });
        }
    });

    const handelSave = (hotelFormData: FormData) => {
        mutate(hotelFormData);
    }

    return (
        <ManageHotelForm hotel={hotel} onSave={handelSave} isLoading={isLoading} />
    )
}


