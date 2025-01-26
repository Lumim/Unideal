import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Title, List } from 'react-native-paper';

const mockProfile = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  university: 'University of Example',
  major: 'Computer Science',
  year: 'Junior',
  gpa: '3.8',
};

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.title}>Personal Information</Title>
      <List.Section>
        <List.Item title="Name" description={mockProfile.name} />
        <List.Item title="Email" description={mockProfile.email} />
        <List.Item title="University" description={mockProfile.university} />
        <List.Item title="Major" description={mockProfile.major} />
        <List.Item title="Year" description={mockProfile.year} />
        <List.Item title="GPA" description={mockProfile.gpa} />
      </List.Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});