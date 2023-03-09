const express = require("express");
const app = express();
const PORT = 9090;
const cors = require("cors");
const axios = require('axios');

/**
 * FIREBASE stuff.
 */
const { initializeApp } = require("firebase/app");
const { getStorage, ref, getDownloadURL } = require("firebase/storage");

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

app.use(
	cors({
		origin: "http://localhost:3000",
	})
);

app.get("/", (req, res) => {
	res.send("Hey there!");
});

app.get("/getBlogPosts", async (req, res) => {
    getDownloadURL(ref(storage, 'blogs/blog.md'))
        .then((url) => {
            console.log(url);
            axios.get(url).then(response => {
                const data = response.data;
                res.status(200).send(data);
            });
        })
	
});

app.listen(PORT, () => {
	console.log("Listening on port: " + PORT);
});
