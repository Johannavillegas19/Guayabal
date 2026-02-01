import { View, Text, TouchableOpacity, Image } from "react-native";
import { homeStyles as styles } from "../styles/home.styles";

export function BenefitsScreen({ navigation }: any) {
  return (
    <View style={styles.benefitsContainer}>
      {/* TÍTULO */}
      <Text style={styles.benefitsTitle}>
        ¿Por qué usar Guayabal?
      </Text>

      <Text style={styles.benefitsSubtitle}>
        Todo lo que necesitas en una sola app
      </Text>

      {/* CARDS */}
      <View style={styles.benefitsGrid}>
        <View style={styles.benefitCard}>
          <Image
            source={require("../../shared/assets/cart.png")}
            style={styles.benefitIcon}
          />
          <Text style={styles.benefitTitle}>
            Compra fácil
          </Text>
          <Text style={styles.benefitText}>
            Compra tus bebidas en segundos desde tu celular.
          </Text>
        </View>

        <View style={styles.benefitCard}>
          <Image
            source={require("../../shared/assets/offer.png")}
            style={styles.benefitIcon}
          />
          <Text style={styles.benefitTitle}>
            Promociones
          </Text>
          <Text style={styles.benefitText}>
            Accede a descuentos y ofertas exclusivas.
          </Text>
        </View>

        <View style={styles.benefitCard}>
          <Image
            source={require("../../shared/assets/shield.png")}
            style={styles.benefitIcon}
          />
          <Text style={styles.benefitTitle}>
            Compra segura
          </Text>
          <Text style={styles.benefitText}>
            Pagos y pedidos protegidos.
          </Text>
        </View>

        <View style={styles.benefitCard}>
          <Image
            source={require("../../shared/assets/clock.png")}
            style={styles.benefitIcon}
          />
          <Text style={styles.benefitTitle}>
            Rapidez
          </Text>
          <Text style={styles.benefitText}>
            Ahorra tiempo con pedidos rápidos.
          </Text>
        </View>
      </View>

      {/* BOTÓN */}
      <TouchableOpacity
        style={styles.benefitsButton}
        onPress={() => navigation.navigate("Permissions")}
        activeOpacity={0.85}
      >
        <Text style={styles.benefitsButtonText}>
          Continuar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

