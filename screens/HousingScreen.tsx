import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Title, Subheading, Paragraph, Card, List } from 'react-native-paper';

const mockHousingData = {
  1: {
    name: 'House in KKIK',
    events: [
      { id: 1, name: 'Open House', date: '2023-07-15', description: 'Come and explore our housing options!' },
      { id: 2, name: 'Tenant Meet & Greet', date: '2023-08-20', description: 'Meet potential roommates and neighbors.' },
    ],
    news: [
      { id: 1, title: 'New Amenities Added', date: '2023-06-01', summary: 'Our housing complex has added a new gym and study area.' },
      { id: 2, title: 'Rent Specials', date: '2023-06-10', summary: 'Sign a lease this month and get your first month free!' },
    ],
    applyInfo: {
      instructions: 'To apply, visit our official website and fill out the online application form.',
      requirements: [
        'Proof of income or financial aid',
        'Valid ID or passport',
        'Rental history (if applicable)',
        'Personal references',
      ],
      deadlines: 'Applications for Fall 2023 move-in are due by July 31, 2023.',
    },
  },
  // Add similar data for other housing options (ids 2-8)
};

export default function HousingScreen({ route }) {
  const { housingId } = route.params;
  const housingData = mockHousingData[housingId];

  if (!housingData) {
    return <Paragraph style={styles.container}>Housing not found</Paragraph>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.title}>{housingData.name}</Title>
      
      <Subheading style={styles.sectionTitle}>Events</Subheading>
      {housingData.events.map((event) => (
        <Card key={event.id} style={styles.item}>
          <Card.Content>
            <Paragraph style={styles.itemTitle}>{event.name}</Paragraph>
            <Paragraph>{event.date}</Paragraph>
            <Paragraph>{event.description}</Paragraph>
          </Card.Content>
        </Card>
      ))}

      <Subheading style={styles.sectionTitle}>News</Subheading>
      {housingData.news.map((newsItem) => (
        <Card key={newsItem.id} style={styles.item}>
          <Card.Content>
            <Paragraph style={styles.itemTitle}>{newsItem.title}</Paragraph>
            <Paragraph>{newsItem.date}</Paragraph>
            <Paragraph>{newsItem.summary}</Paragraph>
          </Card.Content>
        </Card>
      ))}

      <Subheading style={styles.sectionTitle}>How to Apply</Subheading>
      <Paragraph>{housingData.applyInfo.instructions}</Paragraph>
      <Subheading style={styles.subTitle}>Requirements</Subheading>
      <List.Section>
        {housingData.applyInfo.requirements.map((requirement, index) => (
          <List.Item key={index} title={requirement} left={() => <List.Icon icon="check" />} />
        ))}
      </List.Section>
      <Subheading style={styles.subTitle}>Deadlines</Subheading>
      <Paragraph>{housingData.applyInfo.deadlines}</Paragraph>
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
  sectionTitle: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
  },
  item: {
    marginBottom: 10,
  },
  itemTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});