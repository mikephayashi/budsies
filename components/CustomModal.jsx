import React from "react";
import { View, StyleSheet, Modal, TouchableOpacity } from "react-native";

export default function CustomModal({
  children,
  modalVisible,
  setModalVisible,
}) {
  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true}>
      <TouchableOpacity
        style={styles.touchable}
        activeOpacity={1}
        onPressOut={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>{children}</View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#314758ff",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    minWidth: "30%",
    maxWidth: "50%",
    minHeight: "20%",
    maxHeight: "40%",
  },
  touchable: {
    flex: 1,
  },
});
