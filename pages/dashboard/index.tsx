import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { useDispatch } from "react-redux";
export default function Dashboard() {
  
  const router = useRouter()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('auth/login')
    }
  }, []);

  let u_name = "";
  let u_email = "";

  useEffect(() => {
    const u_name = localStorage.getItem("userName");
    const u_email = localStorage.getItem("userEmail");
    setName(u_name ?? "");
    setEmail(u_email ?? "");

  }, []);

  const [name, setName] = useState(u_name ?? "");
  const [email, setEmail] = useState(u_email ?? "");


  return (
    <>
      <div>
        <h1>User {name} Logged in Successfully</h1>
      </div>
    </>
  );
};
