import type React from "react"
import { useState } from "react"
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import type { NavigationProp } from "@react-navigation/native"

interface RegistrationScreenProps {
  navigation: NavigationProp<any>
}

const RegistrationScreen: React.FC<RegistrationScreenProps> = ({ navigation }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [skills, setSkills] = useState("")
  const [gender, setGender] = useState("")
  const [education, setEducation] = useState("")
  const [experience, setExperience] = useState("")

  const handleRegistration = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all required fields.")
      return
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.")
      return
    }

    // For now, just show an alert with the entered data
    Alert.alert("Registration Successful", `Welcome, ${name}!`)
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registration</Text>
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
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
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TextInput style={styles.input} placeholder="Skills (comma-separated)" value={skills} onChangeText={setSkills} />
      <TextInput style={styles.input} placeholder="Gender" value={gender} onChangeText={setGender} />
      <TextInput style={styles.input} placeholder="Education" value={education} onChangeText={setEducation} />
      <TextInput style={styles.input} placeholder="Experience" value={experience} onChangeText={setExperience} />
      <Button title="Register" onPress={handleRegistration} />
      <TouchableOpacity style={styles.loginLink} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginLinkText}>Already have an account? Go back to Login</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  loginLink: {
    marginTop: 20,
  },
  loginLinkText: {
    color: "blue",
    textAlign: "center",
  },
})

export default RegistrationScreen

