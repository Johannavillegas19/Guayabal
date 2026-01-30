import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { enableScreens } from "react-native-screens";

import { AppNavigator } from "./src/navigation/AppNavigator";
import { getToken } from "./src/shared/storage/authStorage";

// Mejora rendimiento de navegación nativa
enableScreens(true);

export default function App() {
  const [checkingSession, setCheckingSession] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loadSession = async () => {
      try {
        const token = await getToken();
        setIsAuthenticated(!!token);
      } finally {
        setCheckingSession(false);
      }
    };

    loadSession();
  }, []);

  if (checkingSession) {
    return (
      <SafeAreaProvider>
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" />
        </View>
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigator initialRouteName={isAuthenticated ? "Home" : "Auth"} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
