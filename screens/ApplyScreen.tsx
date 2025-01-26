import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Title, Paragraph, List, Card } from 'react-native-paper';

const mockApplyInfo = {
  instructions: "To apply to our university, please follow these steps:\n\n1. Complete the online application form\n2. Submit all required documents\n3. Pay the application fee\n4. Wait for the admissions decision",
  requirements: [
    "High school diploma or equivalent",
    "Official transcripts",
    "SAT or ACT scores",
    "Letters of recommendation",
    "Personal statement",
    "Application fee"
  ],
  deadlines: {
    "Fall Semester": "January 15",
    "Spring Semester": "October 1",
    "Summer Session": "March 1"
  }
};

export default function ApplyScreen({ route }) {
  const { universityId } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>How to Apply</Title>
          <Paragraph>{mockApplyInfo.instructions}</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Requirements</Title>
          <List.Section>
            {mockApplyInfo.requirements.map((requirement, index) => (
              <List.Item
                key={index}
                title={requirement}
                left={props => <List.Icon {...props} icon="check-circle" />}
              />
            ))}
          </List.Section>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Application Deadlines</Title>
          <List.Section>
            {Object.entries(mockApplyInfo.deadlines).map(([term, date], index) => (
              <List.Item
                key={index}
                title={term}
                description={date}
                left={props => <List.Icon {...props} icon="calendar" />}
              />
            ))}
          </List.Section>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});