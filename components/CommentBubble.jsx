import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function CommentBubble({ comment }) {
  return (
    <View id={comment.id} style={styles.row}>
      <Text>{comment.name}: </Text>
      <Text>{comment.comment}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
});
