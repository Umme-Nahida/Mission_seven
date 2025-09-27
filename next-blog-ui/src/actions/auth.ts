import { FieldValues } from "react-hook-form";

export const register = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json(); 

  if (!res.ok) {
    console.log("User Registration Failed:", result);
    throw new Error(result.message || "Registration failed");
  }

  return result;
};

export const login = async (data: FieldValues) => {
  const res = await fetch(`http://localhost:5000/api/v1/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json(); 
  console.log(res)

  if (!res.ok) {
    console.error("User Login Failed:", result);
    throw new Error(result.message || "Login failed");
  }

  return result;
};
