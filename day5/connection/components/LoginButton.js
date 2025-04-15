"use Client";
import supabase from "../lib/supabase";

export default function LoginButton() {
    async function signInWithGoogle(){
        const {error} =await supabase.auth.signInWithOAuth({
            provider:'google'
        });
        if (error) console.error('Error signing in:',error);
    }

    return (
        <button onClick={signInWithGoogle} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Sign in with Google
        </button>
    );
}