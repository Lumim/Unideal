import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider, DefaultTheme, Appbar, TextInput, Button, Card, Text, Avatar, Title, Surface } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const initialPrivateMessages = [
  { id: 1, text: 'Hello! How can I help you today?', isUser: false, time: '10:00 AM', user: { name: 'Admin', avatar: 'https://example.com/admin-avatar.jpg' } },
  { id: 2, text: 'I have a question about admissions.', isUser: true, time: '10:05 AM', user: { name: 'You', avatar: 'https://example.com/user-avatar.jpg' } },
  { id: 3, text: 'Sure, I\'d be happy to help with any admissions questions. What would you like to know?', isUser: false, time: '10:07 AM', user: { name: 'Admin', avatar: 'https://example.com/admin-avatar.jpg' } },
];

const initialCommunityMessages = [
  { id: 1, text: 'Welcome to the community chat!', isUser: false, time: '09:30 AM', user: { name: 'Moderator', avatar: 'https://example.com/moderator-avatar.jpg' } },
  { id: 2, text: 'Hi everyone! Excited to be here.', isUser: false, time: '09:35 AM', user: { name: 'Alice', avatar: 'https://example.com/alice-avatar.jpg' } },
  { id: 3, image: 'https://example.com/welcome-image.jpg', isUser: false, time: '09:40 AM', user: { name: 'Bob', avatar: 'https://example.com/bob-avatar.jpg' } },
];

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee',
    accent: '#03dac4',
    communityBackground: '#FFF5E6', // Cream color
    adminBackground: '#E6F3FF', // Light blue color
  },
};

export default function ChatScreen() {
  const [privateMessages, setPrivateMessages] = useState(initialPrivateMessages);
  const [communityMessages, setCommunityMessages] = useState(initialCommunityMessages);
  const [inputMessage, setInputMessage] = useState('');
  const [activeTab, setActiveTab] = useState('private');
  const [selectedImage, setSelectedImage] = useState(null);

  const sendMessage = async (isPrivate) => {
    if (inputMessage.trim() === '' && !selectedImage) return;

    const newMessage = {
      id: (isPrivate ? privateMessages : communityMessages).length + 1,
      text: inputMessage,
      image: selectedImage,
      isUser: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      user: { name: 'You', avatar: 'https://example.com/user-avatar.jpg' },
    };

    if (isPrivate) {
      setPrivateMessages([...privateMessages, newMessage]);
      // Simulate admin response
      setTimeout(() => {
        const adminResponse = {
          id: privateMessages.length + 2,
          text: 'Thank you for your message. An admin will respond to you shortly.',
          isUser: false,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          user: { name: 'Admin', avatar: 'https://example.com/admin-avatar.jpg' },
        };
        setPrivateMessages(prevMessages => [...prevMessages, adminResponse]);
      }, 1000);
    } else {
      setCommunityMessages([...communityMessages, newMessage]);
    }

    setInputMessage('');
    setSelectedImage(null);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  const renderMessage = ({ item }) => (
    <View style={[
      styles.messageContainer,
      item.isUser ? styles.userMessage : styles.otherMessage,
      { backgroundColor: activeTab === 'community' ? theme.colors.communityBackground : theme.colors.adminBackground }
    ]}>
      {!item.isUser && (
        <Avatar.Image size={40} source={{ uri: item.user.avatar }} style={styles.avatar} />
      )}
      <View style={[styles.messageBubble, item.isUser ? styles.userBubble : styles.otherBubble]}>
        <Text style={styles.userName}>{item.user.name}</Text>
        {item.text && <Text style={styles.messageText}>{item.text}</Text>}
        {item.image && <Image source={{ uri: item.image }} style={styles.messageImage} />}
        <Text style={styles.messageTime}>{item.time}</Text>
      </View>
      {item.isUser && (
        <Avatar.Image size={40} source={{ uri: item.user.avatar }} style={styles.avatar} />
      )}
    </View>
  );

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Appbar.Header style={{ backgroundColor: activeTab === 'community' ? theme.colors.communityBackground : theme.colors.adminBackground }}>
          <Appbar.Content 
            title={activeTab === 'private' ? 'Private Chat' : 'Community Chat'} 
            titleStyle={{ color: theme.colors.primary }}
          />
          <Appbar.Action 
            icon="account-group" 
            onPress={() => setActiveTab('community')} 
            color={activeTab === 'community' ? theme.colors.primary : theme.colors.disabled}
          />
          <Appbar.Action 
            icon="account" 
            onPress={() => setActiveTab('private')} 
            color={activeTab === 'private' ? theme.colors.primary : theme.colors.disabled}
          />
        </Appbar.Header>
        <FlatList
          data={activeTab === 'private' ? privateMessages : communityMessages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.chatContainer}
        />
        <Surface style={styles.inputContainer}>
          <Button icon="image" onPress={pickImage} style={styles.imageButton}>
            Upload
          </Button>
          <TextInput
            style={styles.input}
            value={inputMessage}
            onChangeText={setInputMessage}
            placeholder="Type a message..."
          />
          <Button mode="contained" onPress={() => sendMessage(activeTab === 'private')}>
            Send
          </Button>
        </Surface>
        {selectedImage && (
          <View style={styles.selectedImageContainer}>
            <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
            <Icon name="close-circle" size={24} color="black" onPress={() => setSelectedImage(null)} style={styles.removeImageIcon} />
          </View>
        )}
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatContainer: {
    padding: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'flex-end',
  },
  messageBubble: {
    maxWidth: '70%',
    padding: 10,
    borderRadius: 20,
  },
  userMessage: {
    justifyContent: 'flex-end',
  },
  otherMessage: {
    justifyContent: 'flex-start',
  },
  userBubble: {
    backgroundColor: '#E3F2FD',
    marginLeft: 10,
  },
  otherBubble: {
    backgroundColor: '#FFFFFF',
    marginRight: 10,
  },
  avatar: {
    marginHorizontal: 5,
  },
  userName: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  messageText: {
    fontSize: 14,
    color: '#000000',
  },
  messageTime: {
    fontSize: 10,
    color: 'gray',
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  messageImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ECECEC',
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
  },
  imageButton: {
    justifyContent: 'center',
  },
  selectedImageContainer: {
    position: 'relative',
    margin: 10,
  },
  selectedImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  removeImageIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
});