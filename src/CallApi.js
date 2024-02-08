export default async function CallApi(apiParams) {
    const abortController = new AbortController();
    
    let responseData;

    try{
        apiParams.setIsLoading(true);
        const response = await fetch(apiParams.url, {
            signal: abortController.signal,
            method: apiParams.callType,
            headers: {'Content-Type': 'application/json'},
            body: apiParams.bodyData
        });

        responseData = await response.json();
        if(!response.ok){
            throw new Error(responseData.message)
        }
        console.log(responseData);
        apiParams.setIsLoading(false);
        apiParams.auth.login();
        apiParams.HandleCloseAuth();
    } catch (err) {
        console.log(err);
        apiParams.setIsLoading(false);
        apiParams.setError(err.message || 'Something went wrong. Please try again.');
    }

    return responseData;
}