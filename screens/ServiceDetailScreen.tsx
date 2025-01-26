import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Title, Paragraph, List } from 'react-native-paper';

export default function ServiceDetailScreen({ route }) {
  const { service } = route.params;

  const getServiceDetails = (serviceTitle) => {
    switch (serviceTitle) {
      case 'Bank Account':
        return {
          title: 'Opening a Bank Account',
          steps: [
            'Choose a bank (e.g., Danske Bank, Nordea)',
            'Gather required documents (passport, residence permit, CPR number)',
            'Visit the bank branch or apply online',
            'Provide necessary information and sign documents',
            'Receive your account details and bank card',
          ],
        };
      case 'Bus Card':
        return {
          title: 'Getting a Bus Card',
          steps: [
            'Visit the local transportation website',
            'Choose the type of card (e.g., monthly pass, pay-as-you-go)',
            'Register for an account',
            'Order your card online or at a service point',
            'Top up your card and start using public transportation',
          ],
        };
      case 'CPR':
        return {
          title: 'Obtaining a CPR Number',
          steps: [
            'Register with the local municipality (kommune)',
            'Bring your passport, residence permit, and housing contract',
            'Fill out the registration form',
            'Provide your address in Denmark',
            'Receive your CPR number and yellow health insurance card',
          ],
        };
      case 'MIT ID':
        return {
          title: 'Getting Your MIT ID',
          steps: [
            'Visit the IT Service Desk at your educational institution',
            'Bring your student ID or acceptance letter',
            'Provide necessary personal information',
            'Have your photo taken for the ID card',
            'Receive your MIT ID card',
          ],
        };
      case 'Doctor':
        return {
          title: 'Finding a Doctor',
          steps: [
            'Ensure you have a CPR number and yellow health insurance card',
            'Visit www.sundhed.dk',
            'Search for available doctors in your area',
            'Choose a doctor and register with them',
            'Book an appointment when needed',
          ],
        };
        case 'Travel Fine':
        return {
          title: 'Got a fine in DSB/Metro/Movia/Bus',
          steps: [
            'Ensure you have a CPR number and yellow health insurance card',
            'Visit www.lummim.dk',
            'Search fines in the area',
            'fill up the form and tell them why you face problem ',
            'Dont tell everything, tell them you have a ticket and show them the ticket, hopefully they will waive your fine',
          ],
        };
      default:
        return {
          title: 'Service Information',
          steps: ['Details for this service are not available.'],
        };
    }
  };

  const serviceDetails = getServiceDetails(service.title);

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>{serviceDetails.title}</Title>
      <Paragraph style={styles.paragraph}>Follow these steps to {service.title.toLowerCase()}:</Paragraph>
      <List.Section>
        {serviceDetails.steps.map((step, index) => (
          <List.Item
            key={index}
            title={step}
            left={() => <List.Icon icon="check-circle" />}
          />
        ))}
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
});