import React from 'react';
import { FlatList, StyleSheet, Linking } from 'react-native';
import { List, IconButton } from 'react-native-paper';

const mockFiles = [
  { id: 1, name: 'University Brochure.pdf', url: 'https://example.com/brochure.pdf' },
  { id: 2, name: 'Admission Guidelines.pdf', url: 'https://example.com/admission.pdf' },
  { id: 3, name: 'Course Catalog.pdf', url: 'https://example.com/courses.pdf' },
  { id: 4, name: 'Financial Aid Information.pdf', url: 'https://example.com/financial-aid.pdf' },
  { id: 5, name: 'Student Handbook.pdf', url: 'https://example.com/handbook.pdf' },
];

export default function FilesScreen() {
  const openFile = (url) => {
    Linking.openURL(url);
  };

  const renderFileItem = ({ item }) => (
    <List.Item
      title={item.name}
      left={() => <List.Icon icon="file-pdf-box" />}
      right={() => <IconButton icon="download" onPress={() => openFile(item.url)} />}
    />
  );

  return (
    <FlatList
      data={mockFiles}
      renderItem={renderFileItem}
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