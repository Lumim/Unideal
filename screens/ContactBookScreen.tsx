import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

const mockUniversities = [
  { id: 1, name: 'suhan',email:"xyz@domain.com",phone:"+23 4399344", social_link:'google.com' },
  { id: 2, name: 'jammi manna', email:"xyz@domain.com",phone:"+23 4399344" ,social_link:'google.com'},
  { id: 3, name: 'afda kasa',email:"xyz@domain.com",phone:"+23 4399344 ",social_link:'google.com'},
  { id: 4, name: 'AArhus ',email:"xyz@domain.com",phone:"+23 4399344" ,social_link:'google.com'},
  { id: 5, name: 'AAlborg ' ,email:"xyz@domain.com",phone:"+23 4399344",social_link:'google.com'},
  { id: 6, name: 'AAlborg  (Copemhagen)' ,email:"xyz@domain.com",phone:"+23 4399344",social_link:'google.com'},
  { id: 7, name: 'Niels  - ' ,email:"xyz@domain.com",phone:"+23 4399344",social_link:'google.com'},
    { id: 8, name: 'IBA niussan' ,email:"xyz@domain.com",phone:"+23 4399344",social_link:'google.com'},

];

export default function ContactBookScreen({ navigation }) {
  const renderUniversityItem = ({ item }) => (
    <List.Item
      title={item.name+item.email+item.phone+item.social_link}
      onPress={() => navigation.navigate('University', { universityId: item.id, universityName: item.name })}
      left={props => <List.Icon {...props} icon="Person" />}
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