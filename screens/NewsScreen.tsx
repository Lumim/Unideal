import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const mockNews = [
  { id: 1, title: 'New Education Policy Announced', date: '2023-06-15', summary: 'The government has announced a new education policy focusing on digital learning.' },
  { id: 2, title: 'University Rankings Released', date: '2023-06-10', summary: 'The annual university rankings have been released, with several surprises in the top 10.' },
  { id: 3, title: 'Breakthrough in Quantum Computing', date: '2023-06-05', summary: 'Researchers at Tech Institute have made a significant breakthrough in quantum computing.' },
  { id: 4, title: 'Record Number of International Students', date: '2023-05-30', summary: 'Universities report a record number of international student enrollments for the upcoming academic year.' },
  { id: 5, title: 'New Scholarship Program Launched', date: '2023-05-25', summary: 'A new scholarship program aims to support students from underrepresented backgrounds in STEM fields.' },
];

export default function NewsScreen() {
  const renderNewsItem = ({ item }) => (
    <Card style={styles.newsItem}>
      <Card.Content>
        <Title>{item.title}</Title>
        <Paragraph style={styles.newsDate}>{item.date}</Paragraph>
        <Paragraph>{item.summary}</Paragraph>
      </Card.Content>
    </Card>
  );

  return (
    <FlatList
      data={mockNews}
      renderItem={renderNewsItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  newsItem: {
    marginBottom: 10,
  },
  newsDate: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 5,
  },
});