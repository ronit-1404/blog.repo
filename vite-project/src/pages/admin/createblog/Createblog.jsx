import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

function CreateBlog() {
    const [blogs, setBlogs] = useState('');

    const [text, settext] = useState('');
    console.log("Value: ", );
    console.log("text: ", text);
    return (
        <div className=' container mx-auto max-w-5xl'>
             <Editor
                    apiKey='9jo3lu73p1xbfqaw6jvgmsbrmy7qr907nqeafe1wbek6os9d'
                    onEditorChange={(newValue, editor) => {
                        setBlogs({ blogs, content: newValue });
                        settext(editor.getContent({ format: 'text' }));
                    }}
                    onInit={(evt, editor) => {
                        settext(editor.getContent({ format: 'text' }));
                    }}
                    init={{
                        plugins: 'a11ychecker advcode advlist advtable anchor autocorrect autolink autoresize autosave casechange charmap checklist code codesample directionality editimage emoticons export footnotes formatpainter fullscreen help image importcss inlinecss insertdatetime link linkchecker lists media mediaembed mentions mergetags nonbreaking pagebreak pageembed permanentpen powerpaste preview quickbars save searchreplace table tableofcontents template  tinydrive tinymcespellchecker typography visualblocks visualchars wordcount'
                    }}
                />
        </div>
    )
}

export default CreateBlog