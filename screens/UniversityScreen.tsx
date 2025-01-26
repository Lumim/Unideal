import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Title, Subheading, Paragraph, Card, List } from 'react-native-paper';

const mockUniversityData = {
  1: {
    name: 'University of Example',
    events: [
      { id: 1, name: 'Open Day', date: '2023-07-15', description: 'Come and explore our campus!' },
      { id: 2, name: 'Career Fair', date: '2023-08-20', description: 'Meet potential employers and learn about job opportunities.' },
    ],
    news: [
      { id: 1, title: 'New Research Grant', date: '2023-06-01', summary: 'Our university has been awarded a $1M research grant.' },
      { id: 2, title: 'Sports Team Victory', date: '2023-06-10', summary: 'Our basketball team won the national championship!' },
    ],
    applyInfo: {
      instructions: 'To apply, visit our official website and fill out the online application form.',
      requirements: [
        'High school diploma or equivalent',
        'Minimum GPA of 3.0',
        'SAT or ACT scores',
        'Two letters of recommendation',
      ],
      deadlines: 'Applications for the Fall 2024 semester are due by March 1, 2024.',
    },
  },
  // Add similar data for other universities (ids 2-5)
};

export default function UniversityScreen({ route }) {
  const { universityId } = route.params;
  const universityData = mockUniversityData[universityId];

  if (!universityData) {
    return <Paragraph style={styles.container}>University not found</Paragraph>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.title}>{universityData.name}</Title>
      
      <Subheading style={styles.sectionTitle}>Events</Subheading>
      {universityData.events.map((event) => (
        <Card key={event.id} style={styles.item}>
          <Card.Content>
            <Paragraph style={styles.itemTitle}>{event.name}</Paragraph>
            <Paragraph>{event.date}</Paragraph>
            <Paragraph>{event.description}</Paragraph>
          </Card.Content>
        </Card>
      ))}

      <Subheading style={styles.sectionTitle}>News</Subheading>
      {universityData.news.map((newsItem) => (
        <Card key={newsItem.id} style={styles.item}>
          <Card.Content>
            <Paragraph style={styles.itemTitle}>{newsItem.title}</Paragraph>
            <Paragraph>{newsItem.date}</Paragraph>
            <Paragraph>{newsItem.summary}</Paragraph>
          </Card.Content>
        </Card>
      ))}

      <Subheading style={styles.sectionTitle}>How to Apply</Subheading>
      <Paragraph>{universityData.applyInfo.instructions}</Paragraph>
      <Subheading style={styles.subTitle}>Requirements</Subheading>
      <List.Section>
        {universityData.applyInfo.requirements.map((requirement, index) => (
          <List.Item key={index} title={requirement} left={() => <List.Icon icon="check" />} />
        ))}
      </List.Section>
      <Subheading style={styles.subTitle}>Deadlines</Subheading>
      <Paragraph>{universityData.applyInfo.deadlines}</Paragraph>
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