// src/screens/Perfil.js
import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

export default function Perfil({ navigation }) {
  const { colors } = useTheme();
  const { user, signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
    navigation.navigate("Home");
    Alert.alert("Logout", "Você saiu da conta.");
  };

  if (!user) {
    return (
      <ScrollView style={{ flex: 1, padding: 20, backgroundColor: colors.background }}>
        <Text style={{ color: colors.text, textAlign: "center" }}>
          Nenhum usuário logado.
        </Text>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: colors.background }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 20,
          color: colors.text,
        }}
      >
        Perfil
      </Text>

      <View style={{ alignItems: "center", marginBottom: 30 }}>
        <Text style={{ fontSize: 16, color: colors.text }}>
          <Text style={{ fontWeight: "bold" }}>Nome: </Text>
          {user.nome ?? "—"}
        </Text>
        <Text style={{ fontSize: 16, color: colors.text }}>
          <Text style={{ fontWeight: "bold" }}>Email: </Text>
          {user.email ?? "—"}
        </Text>
        <Text style={{ fontSize: 16, color: colors.text }}>
          <Text style={{ fontWeight: "bold" }}>Data de nascimento: </Text>
          {user.data_nascimento
            ? new Date(user.data_nascimento).toLocaleDateString("pt-BR")
            : "—"}
        </Text>
      </View>

      <TouchableOpacity
        onPress={handleLogout}
        style={{
          backgroundColor: "#d32f2f",
          padding: 12,
          borderRadius: 6,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Sair</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
