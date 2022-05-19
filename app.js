import { signUpUser, signInUser, } from '../fetch-utils.js';
//import { signInUser, } from "./fetch-utils.js";

const signInForm = document.getElementById('sign-in');
//const signInEmail = document.getElementById('sign-in-email');
//const signInPassword = document.getElementById('sign-in-password');

const signUpForm = document.getElementById('sign-up');

//const signUpPassword = document.getElementById('sign-up-password');

// Wire up sign in and sign up forms to supabase
// Redirect to /other-page on successful auth
// Redirect to /other-page when page loads if user is authenticated
signUpForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(signUpForm);
    
    const user = await signUpUser(data.get('email'), data.get('password'));
    if (user) {
        location.replace('./other-page');
    } 
});


signInForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(signInForm);
    const user = await signInUser(data.get('email'), data.get('password'));
    if (user) {
        location.replace('./other-page');
    }
    
});




