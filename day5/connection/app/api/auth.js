import {createClient} from '@supabase/supabase-js';

const supabase=createClient(process.env.NEXT_PUBLIC_SUPABASE_URL,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export async function signInWithGoogle() {
    const {user,error}=await supabase.auth.signInWithOAuth({provider:'google'});
    if (error) 
        throw error;
}

export async function signOut() {
    await supabase.auth.signOut();
    
}
