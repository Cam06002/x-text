import ToolbarView from "./ToolbarView"

export default function Toolbar({
    editorColors,
    onColorChange
}){
    const colorOptions = [
        {value: 'blue-text-box', label: 'blue'},
        {value: 'green-text-box', label: 'green'},
        {value: 'black-text-box', label: 'black'},
        {value: 'pink-text-box', label: 'pink'}
    ];

    return(
        <>
        <ToolbarView 
            colorOptions={colorOptions}
            editorColors={editorColors}
            onColorChange={onColorChange}
        />
        </>
    )
}