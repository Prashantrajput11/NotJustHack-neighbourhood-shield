import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/colors";

const OutlineButton = ({ icon, children, onPress }) => {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [styles.button, pressed && styles.pressed]}
		>
			<Ionicons name={icon} size={24} color={Colors.maroon} />
			<Text style={styles.text}>{children}</Text>
		</Pressable>
	);
};

export default OutlineButton;

const styles = StyleSheet.create({
	button: {
		padding: 4,
		margin: 6,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderColor: Colors.maroon,
		borderWidth: 1,
	},
	pressed: {
		opacity: 0.7,
	},
	text: {
		fontSize: 16,
		marginLeft: 6,
	},
});
