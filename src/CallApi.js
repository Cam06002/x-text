export default async function CallApi(apiParams, setEditorId) {
    const abortController = new AbortController();
    let responseData;

    try{
        apiParams.setIsLoading(true);
        const response = await fetch(apiParams.url, {
            signal: abortController.signal,
            method: apiParams.callType,
            headers: apiParams.headers,
            body: apiParams.bodyData
        });

        responseData = await response.json();
        if(!response.ok){
            throw new Error(responseData.message)
        }
        
        if(apiParams.callType==='POST'&&apiParams.url==='http://localhost:5000/api/files'){
            setEditorId(responseData.editor.id);
        }
        
        apiParams.setIsLoading(false);
        apiParams.auth&&apiParams.auth.login(responseData.userId, responseData.token);
        apiParams.auth&&apiParams.HandleCloseAuth();
    } catch (err) {
        console.log(err);
        apiParams.setIsLoading(false);
        apiParams.setError(err.message || 'Something went wrong. Please try again.');
    }

    return responseData;
}