import { useState } from "react";
import { useAuthContext } from "../Hooks/useAuthContext";

const API_URL = "./src/jsons/users.json";
const API_HUDEN = "https://hudenback.onrender.com";

export const listAllUsers = async (token) => {
  try {
    const response = await fetch(`${API_HUDEN}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const users = await response.json();
    return users;
  } catch {
    throw new Error("Error in fetch users");
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

export const newUser = async (newRegister) => {
  try {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRegister),
    };
    const response = await fetch(`${API_URL}`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateUser = async (id, body) => {
  // descomentar cuándo se conecte con el back
  const payload = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  };
  try {
    const response = await fetch(`${API_URL}/${id}`, payload);
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
      dispatch({ type: "LOGIN", payload: { data, user } });
      setLoading(false);
      localStorage.setItem("user", JSON.stringify({ data, user }));
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };
  return { login, loading };
};
