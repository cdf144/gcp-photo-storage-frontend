import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth, googleProvider } from "../../src/config/firebase";

const AuthForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setMessage("Đăng ký thành công!");
        } catch (error: unknown) {
            if (error instanceof Error) {
                setMessage(error.message);
            } else {
                setMessage(String(error));
            }
        }
    };

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setMessage("Đăng nhập thành công!");
        } catch (error: unknown) {
            if (error instanceof Error) {
                setMessage(error.message);
            } else {
                setMessage(String(error));
            }
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            setMessage("Đăng nhập bằng Google thành công!");
        } catch (error: unknown) {
            if (error instanceof Error) setMessage(error.message);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setMessage("Đã đăng xuất!");
        } catch (error: unknown) {
            if (error instanceof Error) {
                setMessage(error.message);
            } else {
                setMessage(String(error));
            }
        }
    };

    return (
        <div className="mx-auto mt-20 w-full max-w-md rounded-xl bg-white p-6 shadow-md">
            <h2 className="mb-4 text-center text-2xl font-bold">Đăng nhập / Đăng ký</h2>
            <input
                className="mb-3 w-full rounded border p-2"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="mb-3 w-full rounded border p-2"
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                onClick={handleGoogleLogin}
                className="mt-3 w-full rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
                Đăng nhập bằng Google
            </button>

            <div className="flex justify-between">
                <button onClick={handleLogin} className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                    Đăng nhập
                </button>
                <button
                    onClick={handleRegister}
                    className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
                >
                    Đăng ký
                </button>
                <button onClick={handleLogout} className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600">
                    Đăng xuất
                </button>
            </div>
            <p className="mt-4 text-center text-green-600">{message}</p>
        </div>
    );
};

export default AuthForm;
