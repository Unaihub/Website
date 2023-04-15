// Import the required Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions

// Your project's configuration (replace placeholders with your actual project information)
const firebaseConfig = {
  apiKey: "AIzaSyDUkX11lsk-linfhnjAiu9IzlykYdwve6g",
  authDomain: "unaihub.firebaseapp.com",
  projectId: "unaihub",
  storageBucket: "unaihub.appspot.com",
  messagingSenderId: "987528947541",
  appId: "1:987528947541:web:7714413c63841ecb8531dc",
  measurementId: "G-VPVPD71RFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

async function submitForm(event) {
  // Prevent the form from reloading the page
  event.preventDefault();

  // Get the form data
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;

  // Save the data to Firestore
  try {
    // Add a new document to the "waitlist" collection
    const docRef = await addDoc(collection(getFirestore(app), "waitlist"), {
      name: name,
      email: email,
      timestamp: new Date()
    });

    // Log the ID of the newly created document
    console.log("Document written with ID: ", docRef.id);

    // Reset the form (optional)
    form.reset();
  } catch (e) {
    // Log any errors
    console.error("Error adding document: ", e);
  }
}

// Make the submitForm function accessible from the global scope
window.submitForm = submitForm;
