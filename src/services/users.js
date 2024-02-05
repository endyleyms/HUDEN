import { useState } from "react";
import { useAuthContext } from "../Hooks/useAuthContext";
import { jwtDecode } from "jwt-decode";

const API_URL = "./src/jsons/users.json";
const API_HUDEN = "https://hudenback.onrender.com";

export const listAllUsers = async (token) => {
  try {
    const response = await fetch(`${API_HUDEN}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        "Failed to fetch users. Response status: " + response.status
      );
    }

    const users = await response.json();
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Error fetching users");
  }
};

export const getUser = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const user = await response.json();
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

export const newUser = async (newRegister, token) => {
  try {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Agregar el token de autorización aquí
      },
      body: JSON.stringify(newRegister),
    };
    const response = await fetch(`${API_HUDEN}/auth/register`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateUser = async (email, token, body) => {
  // descomentar cuándo se conecte con el back
  const payload = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Agregar el token de autorización aquí
    },
    body: JSON.stringify(body),
  };
  try {
    const response = await fetch(`${API_HUDEN}/users/${email}`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const useLogin = () => {
  const [loading, setLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const login = async (user) => {
    setLoading(true);
    try {
      const payload = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      };
      const response = await fetch(`${API_HUDEN}/auth/login`, payload);
      const data = await response.json();
      const decoded = jwtDecode(`'${data.msg.token}'`);
      dispatch({ type: "LOGIN", payload: { data, decoded, user } });
      setLoading(false);
      localStorage.setItem("user", JSON.stringify({ data, decoded, user }));
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };
  return { login, loading };
};
