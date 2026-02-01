import { View, Text, TouchableOpacity, Image } from "react-native";
import { useOnboardingViewModel } from "../../viewmodel/OnboardingViewModel";
import { homeStyles as styles } from "../styles/home.styles";

export function AccessScreen({ navigation }: any) {
  const { completeOnboarding } = useOnboardingViewModel();

  const goToLogin = async () => {
    await completeOnboarding();
    navigation.replace("Auth");
  };

  return (
    <View style={styles.accessContainer}>
      {/* LOGO */}
      <Image
        source={require("../../shared/assets/logo.png")}
        style={styles.accessLogo}
      />

      {/* TEXTO */}
      <Text style={styles.accessTitle}>
        Accede a Guayabal
      </Text>

      <Text style={styles.accessSubtitle}>
        Inicia sesión o crea una cuenta para continuar
      </Text>

      {/* BOTONES */}
      <TouchableOpacity
        style={styles.accessPrimaryButton}
        onPress={goToLogin}
        activeOpacity={0.85}
      >
        <Text style={styles.accessPrimaryText}>
          Iniciar sesión
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.accessSecondaryButton}
        onPress={goToLogin}
        activeOpacity={0.85}
      >
        <Text style={styles.accessSecondaryText}>
          Crear cuenta
        </Text>
      </TouchableOpacity>

      {/* FOOTER */}
      <Text style={styles.accessFooter}>
        Compra segura • Uso responsable
      </Text>
    </View>
  );
}
