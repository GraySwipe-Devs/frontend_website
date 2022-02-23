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
        <div>
            <h3>Create A Blog !!</h3>
            <input value={title} className='w-1/3 border-slate-50' type='text' placeholder='Title' onChange={(e) => { setTitle(e.target.value) }} /><br />
            <textarea value={body} rows="10" columns="50" type='text' placeholder='Body' onChange={(e) => { setBody(e.target.value) }} />

            {/* file input */}
            <div >
                <div>
                    <span>File</span>
                    <input type='file' onChange={(e) => { setImage(e.target.files[0]) }} />
                </div>
                <div>
                    <input type='text' />
                </div>
            </div>
            {/* submit button */}
            <div>
                <button type='submit' onClick={() => submitBlog()} >POST</button>
            </div>

        </div>
    )
}

export default createblog