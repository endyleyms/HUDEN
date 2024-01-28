const API_URL = "./src/jsons/data.json";
const API_HUDEN = "https://hudenback.onrender.com";

export const listAll = async () => {
  try {
    const response = await fetch(`${API_HUDEN}/assets`);
    const data = await response.json();
    return data;
  } catch {
    throw new Error("Error in fetch products");
  }
};

export const getOne = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
export const newData = async (newRegister) => {
  try {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRegister),
    };
    const response = await fetch(`${API_HUDEN}`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
export const updateByCode = async (code, token, body) => {
  const payload = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Agregar el token de autorización aquí
    },
    body: JSON.stringify(body),
  };
  try {
    const response = await fetch(`${API_HUDEN}/assets/${code}`, payload);
    console.log(response);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
