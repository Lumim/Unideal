import type React from "react"
import { useState } from "react"
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from "react-native"
import type { NavigationProp, RouteProp } from "@react-navigation/native"
import Logo from "./components/Logo"
type LoginScreenProps = {
  navigation: NavigationProp<any>
  route: RouteProp<{ params: { onLogin: () => void } }, "params">
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation, route }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { onLogin } = route.params

  const handleLogin = () => {
   /*  if (email === "lamimsarker@gmail.com" && password === "Lamim123123") {
      onLogin()
    } else {
      Alert.alert("Invalid Credentials", "Please check your email and password.")
    } */
   onLogin()
  }

  const handleRegistrationScreen = () => {
    navigation.navigate("Registration")
  }

  const handleForgotPassword = () => {
    navigation.navigate("ResetPassword")
  }

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>Welcome to Bangladeshi Student in Abroad</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity style={styles.forgotPassword} onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <Text style={styles.registerText}>Not a member? Want to register?</Text>
      <Button color={"green"} title="Register" onPress={handleRegistrationScreen} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  forgotPassword: {
    marginTop: 10,
    alignSelf: "flex-end",
  },
  forgotPasswordText: {
    color: "blue",
  },
  registerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
})

export default LoginScreen

