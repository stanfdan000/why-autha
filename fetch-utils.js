const SUPABASE_URL = 'https://kzldzoahblcypgytcfej.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6bGR6b2FoYmxjeXBneXRjZmVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIzMDU3NjcsImV4cCI6MTk2Nzg4MTc2N30.j_yg92pc7aweQmR0W4XIaPpIV3g7KQZogm27VeEfxDU';


const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signUpUser(email, password) {
    console.log(email, password);
    const response = await client.auth.signUp({ email, password });
    if (response.user) {
        return response.user;
    
    }
    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });
    return response.user;
}

export async function checkAuth() {}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('./other-page');
    }
}

export async function logout() {
    await client.auth.signOut();
    return (window.location.href = '/');
}

//redirectIfLoggedIn();