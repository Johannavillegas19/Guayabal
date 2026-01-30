import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useEffect, useState } from "react";
import {
  removeToken,
  getUsername,
} from "../../shared/storage/authStorage";
import { homeStyles as styles } from "../styles/home.styles";

export function HomeScreen({ navigation }: any) {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      const storedUsername = await getUsername();
      setUsername(storedUsername);
    };
    loadUser();
  }, []);

  const logout = async () => {
    await removeToken();
    navigation.replace("Auth");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../../shared/assets/logo.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>Licorería Guayabal</Text>
        <Text style={styles.subtitle}>Panel principal</Text>
      </View>

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.welcome}>
          Bienvenido{username ? `, ${username}` : ""}
        </Text>

        <Text style={styles.description}>
          Desde aquí podrás gestionar productos,
          ventas y operaciones de la licorería.
        </Text>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={logout}
        >
          <Text style={styles.logoutText}>
            Cerrar sesión
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
