import type React from "react"
import { useState } from "react"
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from "react-native"
import type { NavigationProp } from "@react-navigation/native"

interface ResetPasswordScreenProps {
  navigation: NavigationProp<any>
}

const ResetPasswordScreen: React.FC<ResetPasswordScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isEmailVerified, setIsEmailVerified] = useState(false)
  const [isCodeSent, setIsCodeSent] = useState(false)

  const handleVerifyEmail = () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email address.")
      return
    }
    // Simulate sending verification code
    // In a real app, you would call an API to send the verification code
    setIsCodeSent(true)
    Alert.alert("Verification Code Sent", "Please check your email for the verification code.")
  }

  const handleVerifyCode = () => {
    if (!verificationCode) {
      Alert.alert("Error", "Please enter the verification code.")
      return
    }
    // Simulate verifying the code
    // In a real app, you would call an API to verify the code
    setIsEmailVerified(true)
    Alert.alert("Email Verified", "You can now reset your password.")
  }

  const handleResetPassword = () => {
    if (!isEmailVerified) {
      Alert.alert("Error", "Please verify your email first.")
      return
    }
    if (!newPassword || !confirmPassword) {
      Alert.alert("Error", "Please enter and confirm your new password.")
      return
    }
    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.")
      return
    }
    // Simulate resetting the password
    // In a real app, you would call an API to reset the password
    Alert.alert("Success", "Your password has been reset successfully.", [
      { text: "OK", onPress: () => navigation.navigate("Login") },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        editable={!isCodeSent}
      />
      <Button title={isCodeSent ? "Resend Verification Code" : "Verify Email"} onPress={handleVerifyEmail} />

      {isCodeSent && (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter verification code"
            value={verificationCode}
            onChangeText={setVerificationCode}
            keyboardType="numeric"
          />
          <Button title="Verify Code" onPress={handleVerifyCode} />
        </View>
      )}

      {isEmailVerified && (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter new password"
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm new password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          <Button title="Reset Password" onPress={handleResetPassword} />
        </View>
      )}

      <TouchableOpacity style={styles.loginLink} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginLinkText}>Go back to Sign In</Text>
      </TouchableOpacity>



      <Text>Contact +4571607573 @lummim for help</Text>
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
  loginLink: {
    marginTop: 20,
  },
  loginLinkText: {
    color: "blue",
    textAlign: "center",
  },
})

export default ResetPasswordScreen

