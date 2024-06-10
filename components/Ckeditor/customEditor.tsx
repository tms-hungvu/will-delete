
import React, { useEffect, useRef, useState } from "react";
const editorConfiguration = {
    toolbar: [
        'heading',
        '|',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        '|',
        'outdent',
        'indent',
        '|',
        'imageUpload',
        'blockQuote',
        'insertTable',
        'mediaEmbed',
        'undo',
        'redo'
    ]
};


const TextEditor: React.FC<any> = ({ newBlogData, setNewBlogData }) => {
  const editorRef = useRef<any>();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, //Added .CKEditor
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
    setEditorLoaded(true);
  }, []);

  const handleUpdateBlogData = (data: string) => {
    setNewBlogData({ ...newBlogData, content: data });
  };

  return (
    <>
      {editorLoaded ? (
           <CKEditor
          
           editor={ClassicEditor}
           config={editorConfiguration}
           data={newBlogData?.content}
           onBlur={(event: any, editor: any) => {
             const data = editor.getData();
             //console.log({ event, editor, data });
             handleUpdateBlogData(data);
           }}
         />
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

export default TextEditor;