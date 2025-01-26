import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Title, Paragraph, List } from 'react-native-paper';

export default function StudentVisaScreen() {
  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>How to Apply for Student Visa in Denmark</Title>
      
      <Paragraph style={styles.paragraph}>
        To study in Denmark, non-EU/EEA students need to obtain a student visa. Here's a general overview of the process:
      </Paragraph>

      <List.Section>
        <List.Item
          title="1. Get Accepted to a Danish Educational Institution"
          description="You must be admitted to a higher education program in Denmark."
          left={props => <List.Icon {...props} icon="school" />}
        />
        <List.Item
          title="2. Apply for Residence Permit"
          description="Submit your application to the Danish Agency for International Recruitment and Integration (SIRI)."
          left={props => <List.Icon {...props} icon="file-document" />}
        />
        <List.Item
          title="3. Prove Financial Capability"
          description="Show that you can support yourself financially during your studies."
          left={props => <List.Icon {...props} icon="cash" />}
        />
        <List.Item
          title="4. Pay the Application Fee"
          description="Pay the required fee for processing your application."
          left={props => <List.Icon {...props} icon="credit-card" />}
        />
        <List.Item
          title="5. Wait for Processing"
          description="Processing times can vary, so apply well in advance of your studies."
          left={props => <List.Icon {...props} icon="clock" />}
        />
        <List.Item
          title="6. Biometrics and Residence Card"
          description="If approved, you'll need to submit biometrics and receive your residence card."
          left={props => <List.Icon {...props} icon="card-account-details" />}
        />
      </List.Section>

      <Paragraph style={styles.paragraph}>
        For more detailed information and to start your application, visit the official Danish Immigration Service website.
      </Paragraph>
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
});