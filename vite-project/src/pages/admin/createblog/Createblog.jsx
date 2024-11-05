import React, { useState, useContext } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import myContext from '../../../context/data/myContext';
import { Link, useNavigate } from "react-router-dom";
import {
    Button,
    Typography,
} from "@material-tailwind/react";
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { fireDB, storage } from '../../../firebase/FirebaseConfig';

function CreateBlog() {
    const context = useContext(myContext);
    const { mode } = context;
    const navigate = useNavigate();

    const [blogs, setBlogs] = useState({
        title: '',
        category: '',
        content: '',
        time: Timestamp.now(),
    });
    const [thumbnail, setThumbnail] = useState(null);

    // Add Post Function
    const addPost = async () => {
        if (!blogs.title || !blogs.category || !blogs.content || !thumbnail) {
            toast.error('Please fill all fields');
            return;
        }
        uploadImage();
    };

    // Upload Image Function
    const uploadImage = () => {
        const imageRef = ref(storage, `blogimage/${thumbnail.name}`);
        uploadBytes(imageRef, thumbnail).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                const productRef = collection(fireDB, "blogPost");
                try {
                    addDoc(productRef, {
                        ...blogs,
                        thumbnail: url,
                        date: new Date().toLocaleString("en-US", {
                            month: "short",
                            day: "2-digit",
                            year: "numeric",
                        }),
                    });
                    navigate('/dashboard');
                    toast.success('Post Added Successfully');
                } catch (error) {
                    toast.error('Error adding post');
                    console.error(error);
                }
            });
        });
    };

    return (
        <div className='container mx-auto max-w-5xl py-6'>
            <div className="p-5" style={{
                background: mode === 'dark' ? '#353b48' : 'rgb(226, 232, 240)',
                borderBottom: mode === 'dark' ? '4px solid rgb(226, 232, 240)' : '4px solid rgb(30, 41, 59)'
            }}>
                {/* Top Section */}
                <div className="mb-2 flex justify-between">
                    <div className="flex gap-2 items-center">
                        <Link to={'/dashboard'}>
                            <BsFillArrowLeftCircleFill size={25} />
                        </Link>
                        <Typography variant="h4" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                            Create Blog
                        </Typography>
                    </div>
                </div>

                {/* Thumbnail Input */}
                <div className="mb-3">
                    {thumbnail && (
                        <img className="w-full rounded-md mb-3" src={URL.createObjectURL(thumbnail)} alt="thumbnail" />
                    )}
                    <Typography variant="small" color="blue-gray" className="mb-2 font-semibold" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                        Upload Thumbnail
                    </Typography>
                    <input
                        type="file"
                        className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1"
                        style={{ background: mode === 'dark' ? '#dcdde1' : 'rgb(226, 232, 240)' }}
                        onChange={(e) => setThumbnail(e.target.files[0])}
                    />
                </div>

                {/* Title Input */}
                <div className="mb-3">
                    <input
                        className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 outline-none"
                        placeholder="Enter Your Title"
                        style={{ background: mode === 'dark' ? '#dcdde1' : 'rgb(226, 232, 240)' }}
                        value={blogs.title}
                        onChange={(e) => setBlogs({ ...blogs, title: e.target.value })}
                    />
                </div>

                {/* Category Input */}
                <div className="mb-3">
                    <input
                        className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 outline-none"
                        placeholder="Enter Your Category"
                        style={{ background: mode === 'dark' ? '#dcdde1' : 'rgb(226, 232, 240)' }}
                        value={blogs.category}
                        onChange={(e) => setBlogs({ ...blogs, category: e.target.value })}
                    />
                </div>

                {/* Content Editor */}
                <Editor
                    apiKey='n736gn8flpeflhhasursopjd6cwkxjiuej3b8tylh8e1hd7e'
                    onEditorChange={(newValue) => setBlogs({ ...blogs, content: newValue })}
                    init={{
                        plugins: 'a11ychecker advcode advlist advtable anchor autocorrect autolink autoresize autosave casechange charmap checklist code codesample directionality editimage emoticons export footnotes formatpainter fullscreen help image importcss inlinecss insertdatetime link linkchecker lists media mediaembed mentions mergetags nonbreaking pagebreak pageembed permanentpen powerpaste preview quickbars save searchreplace table template tinydrive tinymcespellchecker typography visualblocks visualchars wordcount',
                    }}
                />

                {/* Submit Button */}
                <Button
                    className="w-full mt-5"
                    style={{
                        background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)',
                        color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)'
                    }}
                    onClick={addPost}
                >
                    Send
                </Button>
            </div>
        </div>
    );
}

export default CreateBlog;
