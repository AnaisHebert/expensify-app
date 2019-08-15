import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((child) => {
//         expenses.push({
//             id: child.key,
//             ...child.val()
//         });
//     });
//     console.log(expenses);
// }, (e) => {
//     console.log("Error: ", e);
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((child) => {
//         expenses.push({
//             id: child.key,
//             ...child.val()
//         });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').push({
//     desciption: 'item 1',
//     note: 'test',
//     amount: 123,
//     createdAt: 10000
// });





// database.ref('notes/-LlmkfHXBH8BfKYRxzjs').remove();

// database.ref('notes').push({
//     title: 'Course topics',
//     body: 'React Native, Angular, Python'
// });



// const onValueChange = database.ref().on('value', (snapshot) => {
//      const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// }, (e)=> {
//     console.log("Error fetching data: ", e);
// });


// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log("Error with data fetching", e);
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log(e);
//     });


// database.ref().set({
//     name: 'Anais Hebert',
//     age: 25,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Victoria',
//         country: 'Canada'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((error) => {
//     console.log('this failed: ', error);
// });

// database.ref().update({
//     stressLevel: '9',
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// }).then(() => {
//     console.log('data is saved');
// }).catch((error) => {
//     console.log('this failed: ', error);
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {

//     }).catch((e) => {
//         console.log(e);
//     });



