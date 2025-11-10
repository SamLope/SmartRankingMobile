// src/screens/Homepage.js
import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

export default function Homepage({ navigation }) {
  const { colors, darkMode } = useTheme();
  const { user } = useAuth();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 20,
        paddingVertical: 40,
      }}
    >
      
      {/* Título principal */}
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          textAlign: "center",
          color: colors.text,
          marginBottom: 20,
        }}
      >
        Smart Ranking
      </Text>

      {/* Subtítulo */}
      <Text
        style={{
          fontSize: 18,
          textAlign: "center",
          color: darkMode ? "#b0b0b0" : "#444",
          marginBottom: 30,
        }}
      >
        Explore, avalie e descubra os melhores aplicativos da Google Play.
      </Text>

      {/* Texto descritivo */}
      <Text
        style={{
          fontSize: 16,
          lineHeight: 26,
          textAlign: "justify",
          color: colors.text,
          backgroundColor: darkMode ? "#1c1c1c" : "#f8f8f8",
          padding: 15,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: darkMode ? "#333" : "#ddd",
        }}
      >
        O <Text style={{ fontWeight: "bold" }}>Smart Ranking</Text> é um sistema que
        permite que usuários explorem e ranqueiem apps da{" "}
        <Text style={{ fontWeight: "bold" }}>Google Play Store</Text> com base em
        critérios inteligentes, e recebam recomendações com base na mineração de
        dados a partir do ranking gerado.{"\n\n"}
        Ele oferece insights sobre{" "}
        <Text style={{ fontWeight: "bold" }}>categorias</Text>,{" "}
        <Text style={{ fontWeight: "bold" }}>gêneros</Text>,{" "}
        <Text style={{ fontWeight: "bold" }}>preços</Text> e{" "}
        <Text style={{ fontWeight: "bold" }}>qualidade de apps</Text>, ajudando
        tanto <Text style={{ fontWeight: "bold" }}>desenvolvedores</Text> a
        escolherem nichos de mercado quanto{" "}
        <Text style={{ fontWeight: "bold" }}>usuários finais</Text> a descobrirem
        apps de alta qualidade.
      </Text>

      {/* Botões aparecem apenas se o usuário não estiver logado */}
      {!user && (
        <View style={{ marginTop: 40 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{
              backgroundColor: "#1976d2",
              padding: 14,
              borderRadius: 8,
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
              Entrar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Cadastro")}
            style={{
              backgroundColor: "#2e7d32",
              padding: 14,
              borderRadius: 8,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
              Cadastrar
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Caso o usuário esteja logado, mostra uma saudação */}
      {user && (
        <View style={{ marginTop: 40, alignItems: "center" }}>
          <Text
            style={{
              fontSize: 18,
              color: colors.text,
              textAlign: "center",
            }}
          >
            👋 Bem-vindo(a),{" "}
            <Text style={{ fontWeight: "bold" }}>{user.nome}</Text>!
          </Text>
        </View>
      )}
    </ScrollView>
  );
}
