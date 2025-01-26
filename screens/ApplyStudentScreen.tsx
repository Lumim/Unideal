import React from 'react';
import { ScrollView, StyleSheet, Linking } from 'react-native';
import { Title, Paragraph, Button, List } from 'react-native-paper';

export default function ApplyStudentScreen() {
  const openWebsite = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>Apply for Student Visa in Denmark</Title>
      
      <Paragraph style={styles.paragraph}>
        Follow these steps to apply for your student visa to Denmark:
      </Paragraph>

      <List.Section>
        <List.Item
          title="1. Check Eligibility"
          description="Ensure you meet all requirements for a Danish student visa."
          left={props => <List.Icon {...props} icon="checkbox-marked-circle" />}
        />
        <List.Item
          title="2. Gather Required Documents"
          description="Collect all necessary documents, including acceptance letter, passport, etc."
          left={props => <List.Icon {...props} icon="file-multiple" />}
        />
        <List.Item
          title="3. Complete Online Application"
          description="Fill out the online application form on the SIRI website."
          left={props => <List.Icon {...props} icon="laptop" />}
        />
        <List.Item
          title="4. Pay Application Fee"
          description="Pay the required fee for your visa application."
          left={props => <List.Icon {...props} icon="credit-card" />}
        />
        <List.Item
          title="5. Submit Biometrics"
          description="Visit a Danish representation to submit your biometrics."
          left={props => <List.Icon {...props} icon="fingerprint" />}
        />
        <List.Item
          title="6. Await Decision"
          description="Wait for the Danish authorities to process your application."
          left={props => <List.Icon {...props} icon="clock-outline" />}
        />
      </List.Section>

      <Paragraph style={styles.paragraph}>
        For the most up-to-date information and to start your application, visit the official Danish Immigration Service website:
      </Paragraph>

      <Button
        mode="contained"
        onPress={() => openWebsite('https://www.nyidanmark.dk/en-GB/You-want-to-apply/Study')}
        style={styles.button}
      >
        Visit Official Website
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  paragraph: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});