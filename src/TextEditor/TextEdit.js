import React, { useState, useCallback, useEffect, useContext } from 'react';
import { Slate, Editable, withReact, useSlate } from 'slate-react';
import {createEditor, Editor} from 'slate';
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../Auth/authContext';

export default function TextEdit({
  editorColors,
  editorContent,
  setEditorContent,
  title,
  setTitle,
  editorChange
}) {
  const [initialValue, setInitialValue] = useState(getInitialValue(editorContent));

  const slateVars = {
    initialValue: initialValue,
    editorColors: editorColors,
    setEditorContent: setEditorContent,
    title: title,
    setTitle: setTitle
  };

  const [slateEditor, setSlateEditor] = useState(SlateEditorModule(slateVars));
  const [updateSlate, setUpdateSlate] = useState();

  const auth = useContext(AuthContext);
  
  useEffect(()=>{
    let newInitialValue = getInitialValue(editorContent);
    setInitialValue(newInitialValue);

    let newSlateVars = {
      initialValue: newInitialValue,
      editorColors: editorColors,
      setEditorContent: setEditorContent,
      title: title,
      setTitle: setTitle
    };
    
    setUpdateSlate(SlateEditorModule(newSlateVars));
    setSlateEditor();
    // eslint-disable-next-line
  },[editorChange]);

  useEffect(()=>{
    setSlateEditor(updateSlate);
    // eslint-disable-next-line
  },[updateSlate]);

  useEffect(()=>{
    if(!auth.isLoggedIn){
      localStorage.setItem('title', title);
    }
  },[title, auth.isLoggedIn]);

  return slateEditor;
}

const SlateEditor = ({
  initialValue, 
  setEditorContent,
  title,
  setTitle,
}) => {

  const [editor] = useState(()=> withReact(createEditor()));
  const renderElement = useCallback(props => {
    switch (props.element.type) {
      default:
        return <DefaultElement {...props} />
    }
  }, []);

  const renderLeaf = useCallback(props => {
    return <Leaf {...props} />
  }, []);

  return (
    <>
      <Slate 
        editor={editor} 
        initialValue={initialValue} 
        onChange={value => {
          const isAstChange = editor.operations.some(
            op => 'set_selection' !== op.type
          )
          if (isAstChange) {
            // Save the value to Local Storage.
            const content = JSON.stringify(value)
            setEditorContent(value);
            localStorage.setItem('content', content)
          }
        }}>
      <div className='toolbar-div left-justify-override'>
        <MarkButton format="bold" icon={<FaBold/>}/>
        <MarkButton format="italic" icon={<FaItalic />}/>
        <MarkButton format="underline" icon={<FaUnderline />}/>
        <div className='horizontal-margins'>
          <Form.Control size='lg' type='text' defaultValue={title} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
      </div>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
      />
    </Slate>
    </>
  );
}

const DefaultElement = props => {
  return <p {...props.attributes}>{props.children}</p>
}

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
}

const MarkButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      active={isMarkActive(editor, format)}
      className='editor-button'
      onMouseDown={event => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      {icon}
    </Button>
  )
}

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

const getInitialValue = (editorContent) => {
  let initialValue = editorContent ? editorContent : 
  localStorage.getItem('content') ?
  JSON.parse(localStorage.getItem('content')) : [
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ]

  return initialValue;
}

const SlateEditorModule = (slateVars)=>{
  return <SlateEditor
    initialValue={slateVars.initialValue}
    editorColors={slateVars.editorColors}
    setEditorContent={slateVars.setEditorContent}
    title={slateVars.title}
    setTitle={slateVars.setTitle}
  />
}