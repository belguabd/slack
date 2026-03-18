import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa";
import { Mail, Lock } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

import { AuthStatus } from "../types"
import { useState } from "react";


interface SignInProps {
    setAuthStatus: (status: AuthStatus) => void
}

export const SignIn = ({ setAuthStatus }: SignInProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (

        <Card className="w-full max-w-md space-y-4">
            <CardHeader>
                <CardTitle >Login to your account</CardTitle>
                <CardDescription>
                    Enter your email below to login to your account
                </CardDescription>
                <CardAction >
                    <Button
                        variant="link"
                        className="text-sky-700 hover:underline cursor-pointer"
                        onClick={() => setAuthStatus("SignUp")}
                    >
                        Sign Up
                    </Button>
                </CardAction>
            </CardHeader>
            <CardContent className="space-y-4">
                <form >
                    <div className="space-y-5">
                        <div className="grid  gap-2">
                            <Label htmlFor="email">Email</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    className="pl-9"
                                    disabled={false}
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value); }}
                                />
                            </div>
                        </div>
                        <div className="grid  gap-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                    className="pl-9"
                                    disabled={false}
                                />
                            </div>
                            <div className="flex justify-end">
                                <Button variant="link" className="px-0 text-sm text-sky-700 hover:underline cursor-pointer">Forgot password?</Button>
                            </div>
                        </div>
                        <div>
                            <Button type="submit" className="w-full py-5">Continue</Button>
                        </div>
                    </div>
                </form>
                <Separator />
                <div className="flex flex-col gap-2.5">
                    <Button
                        variant="outline"
                        className="w-full py-5 flex gap-2 items-center justify-center"
                        disabled={false}
                        size="lg"
                        onClick={() => { }}
                    >
                        <FcGoogle size={8} className="" />
                        <span>Continue with Google</span>

                    </Button>
                    <Button
                        variant="outline"
                        className="w-full py-5 flex gap-2 items-center justify-center"
                        disabled={false}
                        size="lg"
                        onClick={() => { }}
                    >
                        <FaGithub size={8} className="" />
                        <span>Continue with GitHub</span>

                    </Button>
                </div>
                <div className="text-muted-foreground">
                    Don't have an account? <span
                        className="text-sm text-sky-700 hover:underline cursor-pointer"
                        onClick={() => setAuthStatus("SignUp")}
                    >Sign Up</span>
                </div>
            </CardContent>
        </Card>
    )
}