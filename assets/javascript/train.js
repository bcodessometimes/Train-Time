    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyA_yMSeaor9dIR8nU-alggh9dV3D5W-rbE",
        authDomain: "trainscheculer2.firebaseapp.com",
        databaseURL: "https://trainscheculer2.firebaseio.com",
        projectId: "trainscheculer2",
        storageBucket: "trainscheculer2.appspot.com",
        messagingSenderId: "1018417807427",
        appId: "1:1018417807427:web:891006dac6765088"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    // Create a variable to reference the database
    var database = firebase.database();

    // Initial Variables (SET the first set IN FIREBASE FIRST)
    // Note remember to create these same variables in Firebase!
    var trainName = "";
    var destination = "";
    var frequency = "";
    var nextArrival = "";
    var minutesAway = "";


    $("#click-button").on("click", function (event) {
        // Prevent the page from refreshing
        event.preventDefault();

        // Get inputs
        trainName = $("#trainName").val().trim();
        destination = $("#destination").val().trim();
        frequency = $("#frequency").val().trim();
        nextArrival = $("#nextArrival").val().trim();
        //   minutesAway = $("#phone-input").val().trim();

        // Change what is saved in firebase
        database.ref().update({
            trainName: trainName,
            destination: destination,
            frequency: frequency,
            nextArrival: nextArrival
        });
    });

    database.ref().on("value", function (snapshot) {

        // Print the initial data to the console.
        console.log(snapshot.val());

        // Log the value of the various properties
        console.log(snapshot.val().trainName);
        console.log(snapshot.val().destination);
        console.log(snapshot.val().frequency);
        console.log(snapshot.val().nextArrival);

        $("#text1").text(snapshot.val().trainName)
        $("#text2").text(snapshot.val().destination)
        $("#text3").text(snapshot.val().frequency)
        $("#text4").text(snapshot.val().nextArrival)
        // Change the HTML
        // $("#displayed-data").text(snapshot.val().trainName + " | " + snapshot.val().destination + " | " + snapshot.val()
        //     .frequency + " | " + snapshot.val().nextArrival);

        // If any errors are experienced, log them to console.
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });
