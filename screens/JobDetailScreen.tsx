import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Title, Subheading, Paragraph, Card, List } from 'react-native-paper';

const mockJobData = {
  1: {
    title: 'Software Engineer',
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    salary: '$100,000 - $150,000',
    description: 'We are seeking a talented Software Engineer to join our dynamic team...',
    responsibilities: [
      'Develop and maintain high-quality software',
      'Collaborate with cross-functional teams',
      'Participate in code reviews and implement best practices',
      'Troubleshoot, debug and upgrade existing systems',
    ],
    requirements: [
      'Bachelors degree in Computer Science or related field',
      '3+ years of experience in software development',
      'Proficiency in JavaScript, React, and Node.js',
      'Experience with cloud platforms (AWS, Azure, or GCP)',
    ],
    benefits: [
      'Competitive salary and stock options',
      'Health, dental, and vision insurance',
      'Flexible work hours and remote work options',
      '401(k) matching',
    ],
    applicationProcess: 'To apply, please send your resume and cover letter to careers@techinnovations.com',
    applicationDeadline: 'Applications are accepted on a rolling basis until the position is filled.',
  },
  // Add similar data for other job listings (ids 2-5)
};

export default function JobDetailScreen({ route }) {
  const { jobId } = route.params;
  const jobData = mockJobData[jobId];

  if (!jobData) {
    return <Paragraph style={styles.container}>Job not found</Paragraph>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.title}>{jobData.title}</Title>
      <Paragraph style={styles.company}>{jobData.company}</Paragraph>
      <Paragraph style={styles.location}>{jobData.location}</Paragraph>
      <Paragraph style={styles.salary}>{jobData.salary}</Paragraph>
      
      <Subheading style={styles.sectionTitle}>Job Description</Subheading>
      <Paragraph>{jobData.description}</Paragraph>

      <Subheading style={styles.sectionTitle}>Responsibilities</Subheading>
      <List.Section>
        {jobData.responsibilities.map((responsibility, index) => (
          <List.Item 
            key={index} 
            title={responsibility} 
            left={() => <List.Icon icon="chevron-right" />} 
          />
        ))}
      </List.Section>

      <Subheading style={styles.sectionTitle}>Requirements</Subheading>
      <List.Section>
        {jobData.requirements.map((requirement, index) => (
          <List.Item 
            key={index} 
            title={requirement} 
            left={() => <List.Icon icon="check" />} 
          />
        ))}
      </List.Section>

      <Subheading style={styles.sectionTitle}>Benefits</Subheading>
      <List.Section>
        {jobData.benefits.map((benefit, index) => (
          <List.Item 
            key={index} 
            title={benefit} 
            left={() => <List.Icon icon="star" />} 
          />
        ))}
      </List.Section>

      <Subheading style={styles.sectionTitle}>How to Apply</Subheading>
      <Paragraph>{jobData.applicationProcess}</Paragraph>
      <Subheading style={styles.subTitle}>Application Deadline</Subheading>
      <Paragraph>{jobData.applicationDeadline}</Paragraph>
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
    marginBottom: 5,
  },
  company: {
    fontSize: 18,
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    marginBottom: 5,
  },
  salary: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: 'bold',
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
});