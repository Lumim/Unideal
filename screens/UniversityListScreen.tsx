import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

const mockUniversities = [
  { id: 1, name: 'University of Copemhagen' },
  { id: 2, name: 'SDU' },
  { id: 3, name: 'DTU' },
  { id: 4, name: 'AArhus University' },
  { id: 5, name: 'AAlborg University' },
  { id: 6, name: 'AAlborg University (Copemhagen)' },
  { id: 7, name: 'Niels Brock - College' },
    { id: 8, name: 'IBA' },

];

export default function UniversityListScreen({ navigation }) {
  const renderUniversityItem = ({ item }) => (
    <List.Item
      title={item.name}
      onPress={() => navigation.navigate('University', { universityId: item.id, universityName: item.name })}
      left={props => <List.Icon {...props} icon="school" />}
    />
  );

  return (
    <FlatList
      data={mockUniversities}
      renderItem={renderUniversityItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});