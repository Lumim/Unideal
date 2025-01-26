import React from 'react';
import { View, FlatList, StyleSheet, Linking } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const mockEvents = [
  {
    id: '1',
    name: 'Open Day',
    date: '2023-07-15',
    description: 'Explore our campus, meet faculty, and learn about our programs.',
    link: 'https://example.com/open-day'
  },
  {
    id: '2',
    name: 'Career Fair',
    date: '2023-08-20',
    description: 'Connect with potential employers and explore career opportunities.',
    link: 'https://example.com/career-fair'
  },
  {
    id: '3',
    name: 'Alumni Networking Event',
    date: '2023-09-10',
    description: 'Network with successful alumni and gain valuable insights.',
    link: 'https://example.com/alumni-event'
  },
  {
    id: '4',
    name: 'Research Symposium',
    date: '2023-10-05',
    description: 'Discover cutting-edge research from our faculty and students.',
    link: 'https://example.com/research-symposium'
  },
];

export default function EventsScreen({ route }) {
  const { universityId } = route.params;

  const renderEvent = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{item.name}</Title>
        <Paragraph style={styles.date}>{item.date}</Paragraph>
        <Paragraph>{item.description}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => Linking.openURL(item.link)}>Learn More</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mockEvents}
        renderItem={renderEvent}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  date: {
    color: '#666',
    marginBottom: 8,
  },
});