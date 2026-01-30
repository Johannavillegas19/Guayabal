import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import { useState } from "react";
import { useAuthViewModel } from "../../viewmodel/AuthViewModel";
import { loginStyles as styles } from "../styles/login.styles";

export function LoginScreen({ navigation }: any) {
  const { login, loading, error } = useAuthViewModel();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const success = await login(username.trim(), password);
    if (success) navigation.replace("Home");
  };

  const isValid = username.trim().length > 0 && password.length > 0;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../../shared/assets/logo.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>Licorería Guayabal</Text>
        <Text style={styles.subtitle}>
          Accede al sistema de gestión
        </Text>
      </View>

      {/* Card */}
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          autoCapitalize="none"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {error && <Text style={styles.error}>{error}</Text>}

        <TouchableOpacity
          style={[
            styles.button,
            (!isValid || loading) && styles.buttonDisabled,
          ]}
          disabled={!isValid || loading}
          onPress={handleLogin}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.registerText}>
            ¿No tienes cuenta? Regístrate
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
