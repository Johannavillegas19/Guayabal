import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = "auth_token";
const REFRESH_KEY = "refresh_token";
const USERNAME_KEY = "auth_username"; // 👈 NUEVO

export const saveAuthTokens = async (access: string, refresh?: string) => {
  await AsyncStorage.setItem(TOKEN_KEY, access);
  if (refresh) {
    await AsyncStorage.setItem(REFRESH_KEY, refresh);
  }
};

// 👇 NUEVO: guardar username
export const saveUsername = async (username: string) => {
  await AsyncStorage.setItem(USERNAME_KEY, username);
};

// Compat
export const saveToken = async (token: string) => saveAuthTokens(token);

export const getToken = async () => {
  return await AsyncStorage.getItem(TOKEN_KEY);
};

// 👇 NUEVO: obtener username
export const getUsername = async () => {
  return await AsyncStorage.getItem(USERNAME_KEY);
};

export const getRefreshToken = async () => {
  return await AsyncStorage.getItem(REFRESH_KEY);
};

export const removeToken = async () => {
  await AsyncStorage.multiRemove([
    TOKEN_KEY,
    REFRESH_KEY,
    USERNAME_KEY, // 👈 también se borra el usuario
  ]);
};
