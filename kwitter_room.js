
const firebaseConfig = {
      apiKey: "AIzaSyCq_nl7RRp5X6sGqlQabR6JxnBT6Tokttw",
      authDomain: "kwitter-cbc0f.firebaseapp.com",
      projectId: "kwitter-cbc0f",
      storageBucket: "kwitter-cbc0f.appspot.com",
      messagingSenderId: "268178060658",
      appId: "1:268178060658:web:f2336519d9fa5e517d19eb",
      measurementId: "G-BNYGNJ841E"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
