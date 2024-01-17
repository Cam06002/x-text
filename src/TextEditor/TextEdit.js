import React, { useRef, useEffect, useState } from 'react';
import { Slate, Editable, withReact } from 'slate-react';

export default function TextEdit({
    editorColors
}) {
  const [editorBackground, setEditorBackground] = useState();

  useEffect(()=>{
    setEditorBackground(editorColors.label);
    console.log(editorColors.label);
  },[editorColors]);
  
  return (
    <>
      <Editor
      />
    </>
  );
}