const { initializeApp } = require('firebase/app');
const {
    collection,
    getDocs,
    getFirestore
} = require('firebase/firestore');

const firebaseConfig = {
	apiKey: "AIzaSyCYGICu1JnrbX1WzDtmDCckI6GxsWOqHXA",
	authDomain: "my-blog-b4749.firebaseapp.com",
	projectId: "my-blog-b4749",
	storageBucket: "my-blog-b4749.appspot.com",
	messagingSenderId: "251130603178",
	appId: "1:251130603178:web:746d956e5dbcdc5d9092d3",
	measurementId: "G-V2HQDJDNPH",
};

initializeApp(firebaseConfig);
const database = getFirestore();
const dbCollection = collection(database, 'emails');
(async () => {
    const docsSnap = await getDocs(dbCollection);
    docsSnap.forEach(doc => {
        console.log(doc.data());
    });
})();