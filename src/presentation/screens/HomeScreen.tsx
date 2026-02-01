import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import { getUsername, removeToken } from "../../shared/storage/authStorage";
import { useProductViewModel } from "../../viewmodel/ProductViewModel";
import { useCartViewModel } from "../../viewmodel/CartViewModel";
import { homeStyles as styles } from "../styles/home.styles";

const categories = ["Todos", "Cerveza", "Vinos", "Ron", "Whisky"];

export function HomeScreen({ navigation }: any) {
  const [username, setUsername] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const { products } = useProductViewModel();
  const { addToCart } = useCartViewModel();

  useEffect(() => {
    getUsername().then(setUsername);
  }, []);

  const logout = async () => {
    await removeToken();
    navigation.replace("Auth");
  };

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>Licorería Guayabal 🍾</Text>
        <TouchableOpacity onPress={logout}>
          <Text style={styles.logoutMini}>Salir</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>
        Bienvenido{username ? `, ${username}` : ""}
      </Text>

      {/* BANNER */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>🔥 20% OFF en cervezas</Text>
      </View>

      {/* CATEGORÍAS */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.categoryChip,
              selectedCategory === cat && styles.categoryActive,
            ]}
            onPress={() => setSelectedCategory(cat)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === cat && styles.categoryTextActive,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* PRODUCTOS */}
      <FlatList
        data={products}
        numColumns={2}
        scrollEnabled={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ marginTop: 16 }}
        renderItem={({ item }) => (
          <View style={styles.productGridCard}>
            <Image
              source={require("../../shared/assets/bottle.png")}
              style={styles.productImage}
            />

            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>

            <TouchableOpacity
              style={styles.addButton}
              onPress={() => addToCart(item.id)}
            >
              <Text style={styles.addButtonText}>Agregar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </ScrollView>
  );
}
