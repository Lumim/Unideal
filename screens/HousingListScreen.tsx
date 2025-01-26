import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

const mockHousingOffers = [
  { id: 1, name: 'House in KKIK' },
  { id: 2, name: 'Tomsgardsvej 2, 3 room without cpr' },
  { id: 3, name: 'Lyngby house with cpr' },
  { id: 4, name: 'One room available' },
  { id: 5, name: 'AAlborg University' },
  { id: 6, name: 'AAlborg University (Copenhagen)' },
  { id: 7, name: 'Niels Brock - College' },
  { id: 8, name: 'IBA' },
];

export default function HousingListScreen({ navigation }) {
  const renderHousingItem = ({ item }) => (
    <List.Item
      title={item.name}
      onPress={() => navigation.navigate('HousingDetail', { housingId: item.id, housingName: item.name })}
      left={props => <List.Icon {...props} icon="home" />}
    />
  );

  return (
    <FlatList
      data={mockHousingOffers}
      renderItem={renderHousingItem}
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