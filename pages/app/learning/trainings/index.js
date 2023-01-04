import { TrainingLayout } from "Layout";
import { useEffect, useState } from "react";
import { MakeProtectedApiCall } from "utils/api";
import getHeaders from "utils/getHeaders";

const Trainingpage = () => {
    const [trainings, setTrainings] = useState([])
    
    const getTrainings = async ()=>{
        let url  = 'https://mocki.io/v1/d7995c41-2de4-4831-afdd-4367036a47a3'
        const res = await MakeProtectedApiCall(url, 'GET', getHeaders())
        setTrainings(res.data)
    }

    useEffect(()=>{
        getTrainings()
    },[])

    return (
        <>
            <TrainingLayout trainings={trainings} />
        </>
    )
}

export default Trainingpage;