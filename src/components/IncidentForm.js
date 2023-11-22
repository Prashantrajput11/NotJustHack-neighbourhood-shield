import {
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
	Button,
	TouchableOpacity,
	Image,
	Pressable,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import { useNavigation } from "@react-navigation/native";
const IncidentForm = () => {
	const navigation = useNavigation();
	const [caption, setCation] = useState("");

	return (
		<ScrollView>
			<View style={styles.form}>
				<Text style={styles.label}>Write What You Saw</Text>
				<TextInput
					value={caption}
					onChangeText={(text) => setCation(text)}
					style={styles.input}
					multiline={true}
					numberOfLines={4}
				/>

				<ImagePicker />
				<LocationPicker />
			</View>
		</ScrollView>
	);
};

export default IncidentForm;

const styles = StyleSheet.create({
	form: {
		flex: 1,
		padding: 24,
	},
	label: {
		fontWeight: "bold",
		marginBottom: 4,
	},
	input: {
		borderColor: Colors.red,
		borderWidth: 1,
		marginVertical: 6,
		borderRadius: 6,
		paddingVertical: 10,
		paddingHorizontal: 14,
		fontSize: 18,
		// backgroundColor: Colors.navy,
	},
});
