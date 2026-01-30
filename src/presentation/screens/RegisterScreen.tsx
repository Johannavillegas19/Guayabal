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
import { registerStyles as styles } from "../styles/register.styles";

export function RegisterScreen({ navigation }: any) {
  const { register, loading, error } = useAuthViewModel();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const success = await register(
      username.trim(),
      email.trim(),
      password
    );
    if (success) navigation.goBack();
  };

  const isValid =
    username.trim().length > 0 &&
    email.trim().length > 0 &&
    password.trim().length > 0;

  return (
    <View style={styles.container}>
      {/* Header con LOGO */}
      <View style={styles.header}>
        <Image
          source={require("../../shared/assets/logo.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>Crear cuenta</Text>
        <Text style={styles.subtitle}>
          Registra un nuevo usuario
        </Text>
      </View>

      {/* Card */}
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          placeholderTextColor="#9ca3af"
          autoCapitalize="none"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          placeholderTextColor="#9ca3af"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#9ca3af"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Error */}
        {error && <Text style={styles.error}>{error}</Text>}

        {/* Botón */}
        <TouchableOpacity
          style={[
            styles.button,
            (!isValid || loading) && styles.buttonDisabled,
          ]}
          disabled={!isValid || loading}
          onPress={handleRegister}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Registrarse</Text>
          )}
        </TouchableOpacity>

        {/* Volver */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>
            ¿Ya tienes cuenta? Inicia sesión
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
