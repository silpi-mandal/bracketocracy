import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function Notification() {
  const [notifications, setNotifications] = useState([
    { id: '1', title: 'New Message', message: 'You have a new message from John', timestamp: '2 hours ago' },
    { id: '2', title: 'App Update', message: 'A new update is available for your app', timestamp: '1 day ago' },
    { id: '3', title: 'Reminder', message: 'Don\'t forget to check your schedule for tomorrow', timestamp: '3 days ago' },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationMessage}>{item.message}</Text>
      <Text style={styles.notificationTimestamp}>{item.timestamp}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign:'center'
  },
  notificationItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationMessage: {
    fontSize: 16,
    color: '#666',
    marginVertical: 5,
  },
  notificationTimestamp: {
    fontSize: 14,
    color: '#aaa',
  },
});
