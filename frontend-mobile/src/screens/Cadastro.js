// src/screens/Cadastro.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

export default function Cadastro({ navigation }) {
  const { colors, darkMode } = useTheme();
  const { signUp } = useAuth();

  const [nome, setNome] = useState("");
  const [data_nascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    try {
      await signUp({ nome, data_nascimento, email, senha });
      navigation.navigate("Home");
    } catch (err) {
      Alert.alert("Erro", err.response?.data?.message ?? "Erro ao cadastrar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: colors.background }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 50, color: colors.text }}>Cadastro</Text>

      <TextInput
        value={nome}
        onChangeText={setNome}
        placeholder="Nome completo"
        placeholderTextColor={darkMode ? "#888" : "#666"}
        style={{
          backgroundColor: colors.inputBg,
          color: colors.text,
          padding: 12,
          borderRadius: 6,
          marginBottom: 10,
          borderWidth: 1,
          borderColor: colors.inputBorder,
        }}
      />

      <TextInput
        value={data_nascimento}
        onChangeText={setDataNascimento}
        placeholder="Data de nascimento (YYYY-MM-DD)"
        placeholderTextColor={darkMode ? "#888" : "#666"}
        style={{
          backgroundColor: colors.inputBg,
          color: colors.text,
          padding: 12,
          borderRadius: 6,
          marginBottom: 10,
          borderWidth: 1,
          borderColor: colors.inputBorder,
        }}
      />

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor={darkMode ? "#888" : "#666"}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{
          backgroundColor: colors.inputBg,
          color: colors.text,
          padding: 12,
          borderRadius: 6,
          marginBottom: 10,
          borderWidth: 1,
          borderColor: colors.inputBorder,
        }}
      />

      <TextInput
        value={senha}
        onChangeText={setSenha}
        placeholder="Senha"
        placeholderTextColor={darkMode ? "#888" : "#666"}
        secureTextEntry
        style={{
          backgroundColor: colors.inputBg,
          color: colors.text,
          padding: 12,
          borderRadius: 6,
          marginBottom: 10,
          borderWidth: 1,
          borderColor: colors.inputBorder,
        }}
      />

      <TouchableOpacity
        onPress={handleRegister}
        style={{ backgroundColor: "#2e7d32", padding: 12, borderRadius: 6, alignItems: "center", width: "100%" }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
