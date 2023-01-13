// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyARFZyI8fW5pWYwFyV8b4njBFeu5bTjf0s",
  authDomain: "kwitter-e5248.firebaseapp.com",
  databaseURL: "https://kwitter-e5248-default-rtdb.firebaseio.com",
  projectId: "kwitter-e5248",
  storageBucket: "kwitter-e5248.appspot.com",
  messagingSenderId: "541051087744",
  appId: "1:541051087744:web:d8a5a74ad33cd445072f65"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



