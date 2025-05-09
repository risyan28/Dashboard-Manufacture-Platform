// hooks/useLogin.ts
"use client"; // Pastikan ini hanya berjalan di client

import { useState } from "react";
import { useRouter } from "next/navigation";

export function useLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      router.push("/dashboard-user");
    } else {
      alert("Please fill in both fields.");
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    handleLogin,
  };
}
