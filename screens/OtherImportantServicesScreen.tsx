import React from 'react';
import { View, StyleSheet } from 'react-native';
import { List, Title } from 'react-native-paper';

const services = [
  { id: 1, title: 'Bank Account', icon: 'bank' },
  { id: 2, title: 'Bus Card', icon: 'bus' },
  { id: 3, title: 'CPR', icon: 'card-account-details' },
  { id: 4, title: 'MIT ID', icon: 'card-account-details-outline' },
  { id: 5, title: 'Doctor', icon: 'doctor' },
  { id: 6, title: 'Travel Fine', icon: 'bus' },
];

export default function OtherImportantServicesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Other Important Services</Title>
      {services.map((service) => (
        <List.Item
          key={service.id}
          title={service.title}
          left={(props) => <List.Icon {...props} icon={service.icon} />}
          onPress={() => navigation.navigate('ServiceDetail', { service })}
        />
      ))}
    </View>
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
});