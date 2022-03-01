import React from 'react';
import {View, TextInput, Button, ScrollView} from 'react-native';

export default function ChatPane({comment, onChangeComment, room, userState, comments}) {
  return (
    <View>
      <TextInput
        placeholder="Comment"
        onChangeText={onChangeComment}
        value={comment}
      />
      <Button
        title="Submit"
        onPress={() =>
          uploadComment(room.id, comment, onChangeComment, userState.name)
        }
      />
      <ScrollView>
        {comments.map((comment) => {
          return (
            <Text key={comment.id}>
              {comment.name}: {comment.comment}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
}
