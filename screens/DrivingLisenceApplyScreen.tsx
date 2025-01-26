import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Title, Paragraph, List, Card, Button } from 'react-native-paper';

export default function DrivingLisenceApplyScreen() {
  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>Apply for Exchange Driving License</Title>
      <Paragraph style={styles.paragraph}>
        Follow these steps to exchange your foreign driving license for a Danish one:
      </Paragraph>
      <List.Section>
        <List.Item
          title="1. Check Eligibility"
          description="Ensure your current license is valid and from an eligible country."
          left={props => <List.Icon {...props} icon="check-circle" />}
        />
        <List.Item
          title="2. Gather Required Documents"
          description="Prepare your current license, passport, residence permit, and passport photo."
          left={props => <List.Icon {...props} icon="file-document" />}
        />
        <List.Item
          title="3. Book an Appointment"
          description="Schedule a visit to a Danish driving license issuing office."
          left={props => <List.Icon {...props} icon="calendar" />}
        />
        <List.Item
          title="4. Pay the Fee"
          description="Be prepared to pay the license exchange fee."
          left={props => <List.Icon {...props} icon="cash" />}
        />
        <List.Item
          title="5. Submit Application"
          description="Visit the office, submit your documents, and complete the process."
          left={props => <List.Icon {...props} icon="check" />}
        />
      </List.Section>
     
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
    marginTop: 10,
  },
});