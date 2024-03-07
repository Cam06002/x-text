export default function SavePopup(savePopup, setSavePopup){
    return (
        <dialog open={savePopup}>
            <p>Saved successfully!</p>
            <button onClick={()=>setSavePopup(false)}>Okay</button>
        </dialog>
    )
}