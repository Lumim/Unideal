import React from "react"
import { View, StyleSheet, ScrollView } from "react-native"
import { Title, Paragraph, Card, Text } from "react-native-paper"
import Logo from "./components/Logo"

// Mock data for news
const recentNews = [
  { id: 1, title: "New Scholarship Program Launched", date: "2023-06-15", time: "14:30" },
  { id: 2, title: "Danish Universities Welcome More International Students", date: "2023-06-14", time: "09:45" },
  { id: 3, title: "Changes in Student Visa Regulations", date: "2023-06-13", time: "11:20" },
]

// Mock data for events
const upcomingEvents = [
  { id: 1, title: "Bangladeshi Cultural Night", date: "2023-07-01", time: "18:00", location: "Copenhagen" },
  { id: 2, title: "Networking Event for Bangladeshi Students", date: "2023-07-15", time: "14:00", location: "Aarhus" },
  { id: 3, title: "Bengali New Year Celebration", date: "2023-07-30", time: "12:00", location: "Odense" },
]

export default function HomeScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Logo />
        <Title style={styles.title}>Welcome to Bangladeshis in Abroad</Title>
        <Paragraph style={styles.subtitle}>
          Your gateway to study and university related information chat based application
        </Paragraph>

        <Title style={styles.sectionTitle}>What's New?</Title>
        <Paragraph>From now on you can get all in one information steps.</Paragraph>

        <Title style={styles.sectionTitle}>Recent News</Title>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {recentNews.map((news) => (
            <Card key={news.id} style={styles.card}>
              <Card.Content>
                <Title style={styles.cardTitle}>{news.title}</Title>
                <Text style={styles.cardDate}>
                  {news.date} at {news.time}
                </Text>
              </Card.Content>
            </Card>
          ))}
        </ScrollView>

        <Title style={styles.sectionTitle}>Upcoming Bangladeshi Events in Denmark</Title>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {upcomingEvents.map((event) => (
            <Card key={event.id} style={styles.card}>
              <Card.Content>
                <Title style={styles.cardTitle}>{event.title}</Title>
                <Text style={styles.cardDate}>
                  {event.date} at {event.time}
                </Text>
                <Text style={styles.cardLocation}>{event.location}</Text>
              </Card.Content>
            </Card>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#bdd4c5",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  horizontalScroll: {
    marginBottom: 20,
  },
  card: {
    width: 200,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 14,
  },
  cardDate: {
    fontSize: 11,
    marginTop: 5,
  },
  cardLocation: {
    fontSize: 12,
    marginTop: 5,
    fontStyle: "italic",
  },
})

