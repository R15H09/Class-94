// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCoy6x2JqqkATjlqIJq65_U5hPU4uMYFKk",
    authDomain: "class-93-f61d1.firebaseapp.com",
    databaseURL: "https://class-93-f61d1-default-rtdb.firebaseio.com",
    projectId: "class-93-f61d1",
    storageBucket: "class-93-f61d1.appspot.com",
    messagingSenderId: "632464576784",
    appId: "1:632464576784:web:a2a8ba14b4090adbd51595"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser() {
      user_name = document.getElementById("user_name").value;
      user_traits = document.getElementById("user_traits").value;
      localStorage.setItem("user_traits", user_traits);
      localStorage.setItem("UserName", user_name);

      firebase.database().ref("/").child(user_name).update({
          purpose : user_traits
      });
  }