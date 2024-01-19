import React, { useState, useCallback, useMemo } from 'react';
import { Slate, Editable, withReact, useSlate } from 'slate-react';
import {createEditor, Editor} from 'slate';
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";
import { Button } from 'react-bootstrap';

export default function TextEdit() {
  const [editor] = useState(()=> withReact(createEditor()));
  const initialValue = useMemo(
    () =>
      JSON.parse(localStorage.getItem('content')) || [
        {
          type: 'paragraph',
          children: [{ text: 'A line of text in a paragraph.' }],
        },
      ],
    []
  );

  const renderElement = useCallback(props => {
    switch (props.element.type) {
      default:
        return <DefaultElement {...props} />
    }
  }, []);

  const renderLeaf = useCallback(props => {
    return <Leaf {...props} />
  }, [])
  
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
            localStorage.setItem('content', content)
          }
        }}>
      <div>
        <MarkButton format="bold" icon={<FaBold/>}/>
        <MarkButton format="italic" icon={<FaItalic />}/>
        <MarkButton format="underline" icon={<FaUnderline />}/>
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
