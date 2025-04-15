"use client";
import { useState, useEffect } from "react";
import supabase from "../lib/supabase";
import Navbar from "../components/Navbar";
import DarkModeToggle from "../components/DarkModeToggle";
import LoginButton from "../components/LoginButton";


export default function HomePage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const { data, error } = await supabase.auth.getUser();
            if (error) {
                console.error("Error fetching user:", error.message);
            } else {
                setUser(data.user);
            }
        };
        fetchUser();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-4">
                <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
                <p className="text-gray-600">A place to connect with developers</p>
                {user ? (
                    <p className="mt-4">Logged in as: {user.email}</p>
                ) : (
                    <p className="mt-4">You are not logged in</p>
                )}
            </div>
        </div>
    );
}
