import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { db, serverTimestamp, storage } from '../firebase';

const createblog = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState('');

    // useEffect(() => {
    //     if (url) {
    //         try {
    //             db.collection('blogs').add({
    //                 title,
    //                 body,
    //                 imageUrl: url,
    //                 createdAt: serverTimestamp()
    //             })
    //             console.log("UPLOADED BLOG S");
    //         } catch (err) {
    //             alert("BLOG faiLED")
    //             console.log(err);
    //         }


    //     }
    // }, [url])

    function foo(name, downloadURL) {
        var docData = {
            title: title,
            body: body,
            image: downloadURL,
            createdAt: serverTimestamp()

        };
        db.collection("Blogs").doc(name).set(docData).then(() => {
            console.log("Document successfully written!");
        });
    }

    const submitBlog = () => {
        if (!title || !body || !image) {

            return
        }
        var uploadTask = storage.ref().child(`image/${uuidv4()}`).put(image)
        uploadTask.on('state_changed',
            (snapshot) => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                if (progress == '100') console.log("DONE");

            },
            (error) => {
                console.log(error);
            },
            () => {

                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    setUrl(downloadURL)
                    let name = uuidv4();
                    foo(name, downloadURL);
                });
            }
        );

    }

    return (
        <div className='grid justify-items-center ' >
            <h3 className='text-center text-2xl font-bold ' >Create A Blog !!</h3>
            <input value={title} className='w-1/3 border-4 border-black' type='text' placeholder='Title' onChange={(e) => { setTitle(e.target.value) }} /><br /><br />
            <textarea className='border-2 border-black' value={body} rows="23" cols='70' type='text' placeholder='Body' onChange={(e) => { setBody(e.target.value) }} />

            {/* file input */}
            <div >
                <div className='border-4 border-indigo-500/100'>
                    <span></span>
                    <input type='file' onChange={(e) => { setImage(e.target.files[0]) }} />
                </div>
                <div>
                    <input type='text' />
                </div>
            </div>
            {/* submit button */}
            <div>
                <button className='bg-yellow-300 p-3' type='submit' onClick={() => submitBlog()} >POST</button>
            </div>

        </div>
    )
}

export default createblog