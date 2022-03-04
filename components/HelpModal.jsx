import React from "react";
import { StyleSheet, Text } from "react-native";

import CustomModal from "../components/CustomModal";

export default function HelpModal({
  modalVisible,
  setModalVisible,
  title,
  description,
}) {
  return (
    <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
          <Text style={[styles.both, styles.title]}>{title}</Text>
          <Text style={[styles.both, styles.description]}>{description}</Text>
    </CustomModal>
  );
}

const styles = StyleSheet.create({
    both: {
        color: "white",
        fontFamily: "BalsamiqSans_400Regular",
    }, 
    title: {
        textDecorationLine: 'underline',
        fontSize: 40,
        marginBottom: 10,
    },
    description: {
        textAlign: "center",
        fontSize: 20,
    }
});