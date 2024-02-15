import React, {useState, useContext, useEffect} from "react";
import LoadPageView from "./LoadPageView";
import CallApi from "../CallApi";
import { AuthContext } from "../Auth/authContext";

export default function LoadPage({
    openLoaderPage,
    setOpenLoaderPage,
    newParams,
    setEditorId
}){
    const auth = useContext(AuthContext);
    const uid = auth.userId;
    const [loadedEditors, setLoadedEditors] = useState()

    const apiParams = {
        url: `${process.env.REACT_APP_API_URL}/files/user/${uid}`,
        callType: 'GET',
        bodyData: null,
        setIsLoading: newParams.apiAddedParams.setIsLoading,
        setError: newParams.apiAddedParams.setError,
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${newParams.apiAddedParams.auth.token}`
        }
    };

    useEffect(()=>{
        const fetchEditors = async () => {
            try {
                const files = await CallApi(apiParams);
                setLoadedEditors(files);
                console.log(files);
            } catch (err) {
                console.log(err);
            }
        }
        fetchEditors();
        // eslint-disable-next-line
    },[]);

    const HandleCloseLoader = () => {
        setOpenLoaderPage(false);
    };

    return(
        <LoadPageView
            openLoaderPage={openLoaderPage}
            HandleCloseLoader={HandleCloseLoader}
            newParams={newParams}
            loadedEditors={loadedEditors}
            setEditorId={setEditorId}
        />
    )
}