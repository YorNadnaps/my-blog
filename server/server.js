const express = require("express");
const app = express();
const PORT = 9090;
const cors = require("cors");
const axios = require('axios');
const path = require('path');
const CLIENT_BUILD_FOLDER = '../build';
const STATIC_FILE_PATH = '../build/index.html';

/**
 * App config stuff.
 */
 app.use(
     '/my-blog/',
     express.static(path.join(__dirname, CLIENT_BUILD_FOLDER))
 );
 app.use(
	cors()
);

/**
 * FIREBASE stuff.
 */
const { initializeApp } = require("firebase/app");
const { getStorage, ref, getDownloadURL } = require("firebase/storage");
const { collection, addDoc, getFirestore } = require('firebase/firestore');

const firebaseConfig = {
	apiKey: "AIzaSyCYGICu1JnrbX1WzDtmDCckI6GxsWOqHXA",
	authDomain: "my-blog-b4749.firebaseapp.com",
	projectId: "my-blog-b4749",
	storageBucket: "my-blog-b4749.appspot.com",
	messagingSenderId: "251130603178",
	appId: "1:251130603178:web:746d956e5dbcdc5d9092d3",
	measurementId: "G-V2HQDJDNPH",
};
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const firestoreDb = getFirestore(firebaseApp);


app.get("/getBlogPosts", async (req, res) => {
    const { path } = req.query;
    if (!path) {
        res.status(500).send('The file path is not of the right format.');
        return;
    }
    getDownloadURL(ref(storage, path))
        .then((url) => {
            axios.get(url).then(response => {
                const data = response.data;
                res.status(200).send(data);
            }).catch((err) => {
                res.status(500).send('Something went wrong while fetching data or the data wasn\'t found.');
            });
        }).catch((err) => {
            res.status(500).send('Something went wrong while fetching data or the data wasn\'t found.');
        });
});

app.get("/sendHowYouFeel", async (req, res) => {
    const { doc } = req.query;
    try {
        const docRef = await addDoc(collection(firestoreDb, 'let-us-know'), doc);
        console.log('Doc written with id: ', docRef.id);
    } catch (ex) {
        console.error(`Failed to send message with error: ${ex}`);
        res.status(500).send('Something went wrong while trying to send message.');
        return;
    }
    res.status(200).send('The document has been written successfully.');
});

app.get("/contact", async (req, res) => {
    const { doc } = req.query;
    try {
        const docRef = await addDoc(collection(firestoreDb, 'contact'), doc);
        console.log('Doc written with id: ', docRef.id);
    } catch (ex) {
        console.error(`Failed to send message with error: ${ex}`);
        res.status(500).send('Something went wrong while trying to send message.');
        return;
    }
    res.status(200).send('The document has been written successfully.');
});

app.get('/myblog/*', (req, res) => {
    res.sendFile(path.join(__dirname, STATIC_FILE_PATH));
});

app.listen(PORT, () => {
	console.log("Listening on port: " + PORT + " at http://localhost:" + PORT);
});
