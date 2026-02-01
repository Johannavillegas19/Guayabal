import { View, Text, TouchableOpacity, Image } from "react-native";
import { homeStyles as styles } from "../styles/home.styles";

export function PermissionsScreen({ navigation }: any) {
  return (
    <View style={styles.permissionsContainer}>
      {/* ICONO / ILUSTRACIÓN */}
      <Image
        source={require("../../shared/assets/warning.png")}
        style={styles.permissionsIcon}
      />

      {/* TÍTULO */}
      <Text style={styles.permissionsTitle}>
        Uso responsable
      </Text>

      {/* TEXTO LEGAL */}
      <View style={styles.permissionsCard}>
        <Text style={styles.permissionsText}>
          Esta aplicación está destinada exclusivamente a
          personas mayores de edad.
        </Text>

        <Text style={styles.permissionsText}>
          El consumo de bebidas alcohólicas debe realizarse
          de manera responsable.
        </Text>
      </View>

      {/* BOTÓN */}
      <TouchableOpacity
        style={styles.permissionsButton}
        onPress={() => navigation.navigate("Access")}
        activeOpacity={0.85}
      >
        <Text style={styles.permissionsButtonText}>
          Aceptar y continuar
        </Text>
      </TouchableOpacity>

      {/* FOOTER */}
      <Text style={styles.permissionsFooter}>
        Al continuar, aceptas los términos de uso
      </Text>
    </View>
  );
}
