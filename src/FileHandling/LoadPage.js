import React, {useState, useContext, useEffect} from "react";
import LoadPageView from "./LoadPageView";
import CallApi from "../CallApi";
import { AuthContext } from "../Auth/authContext";

export default function LoadPage({
    openLoaderPage,
    setOpenLoaderPage,
    apiAddedParams,
    setEditorContent,
    setTitle,
    editorColors
}){
    const auth = useContext(AuthContext);
    const uid = auth.userId;
    const [loadedEditors, setLoadedEditors] = useState()

    const apiParams = {
        url: `http://localhost:5000/api/files/user/${uid}`,
        callType: 'GET',
        bodyData: null,
        setIsLoading: apiAddedParams.setIsLoading,
        setError: apiAddedParams.setError
    };

    useEffect(()=>{
        const fetchEditors = async () => {
            try {
                const files = await CallApi(apiParams);
                setLoadedEditors(files);
                console.log(files);
            } catch (err) {

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
            apiAddedParams={apiAddedParams}
            loadedEditors={loadedEditors}
            setEditorContent={setEditorContent}
            setTitle={setTitle}
            editorColors={editorColors}
        />
    )
}