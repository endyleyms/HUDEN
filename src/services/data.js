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
    const response = await fetch(`${API_URL}`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
export const updateById = async (id, body) => {
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
