"use client"
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote, useEditorChange } from "@blocknote/react";
import { useEdgeStore } from "@/lib/edgestore";
import { useTheme } from "next-themes";
import { useCallback } from "react";

 

interface EditorProps{
    onChange:(value: string) => void;
    initialContent?: string;
    editable?: boolean;
}
 const  Editor = ({
     onChange,
     initialContent,
     editable    
 }: EditorProps)=> {
  const {resolvedTheme} = useTheme();
  const {edgestore} = useEdgeStore();

  const handleUpload = async (file: File)=>{
    const response = await edgestore.publicFiles.upload({
        file
    })
    return response.url;
  }

  const editor : BlockNoteEditor = useCreateBlockNote({
    initialContent: initialContent ? JSON.parse(initialContent) as PartialBlock[] : undefined, 
    uploadFile: handleUpload 
 });
 const uploadToDatabase = useCallback(() => {
    if (onChange) {
      setTimeout(() => {
        onChange(JSON.stringify(editor.document));
      }, 1000);
    }
  }, [editor, onChange]);

 
  // Renders the editor instance using a React component.
  return (
  <BlockNoteView 
  editor={editor}
  editable= {editable}
  onChange={uploadToDatabase}
  theme={resolvedTheme === "dark" ? "dark" : "light"}
  />
  
  );
}
export default Editor;
 