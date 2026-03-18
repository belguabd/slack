'use client'
import { useState } from "react";
import { AuthStatus } from "../types";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export const AuthScreen = () => {
    const [authStatus, setAuthStatus] = useState<AuthStatus>("SignIn");
    return (
        <div className="flex h-screen items-center justify-center bg-[#4A154B]">
            {authStatus === "SignIn" ? <SignIn setAuthStatus={setAuthStatus} /> : (<SignUp setAuthStatus={setAuthStatus} />)}
        </div>
    )
}
