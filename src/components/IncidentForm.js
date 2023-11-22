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
import React, { useCallback, useState } from "react";
import { Colors } from "../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import { useNavigation } from "@react-navigation/native";
const IncidentForm = ({ onCreateIncident }) => {
	const navigation = useNavigation();
	const [caption, setCation] = useState("");
	const [selectedImage, setSelectedImage] = useState();
	const [pickedLocation, setPickedLocation] = useState();

	// To Handle Image
	function takeImageHandler(imageUri) {
		setSelectedImage(imageUri);
	}

	// To Handle Location
	const pickLocationHandler = useCallback((location) => {
		setPickedLocation(location);
	}, []);

	// Handle Save Places
	function savePlaceHandler() {
		const incidentData = {
			caption: caption,
			selectedImage: selectedImage,
			pickedLocation: pickedLocation,
		};

		onCreateIncident(incidentData);
		// console.log({ caption });
		// console.log({ selectedImage });
		// console.log({ pickedLocation });
	}

	return (
		<ScrollView>
			<View style={styles.form}>
				<Text style={styles.label}>Write What You Saw</Text>
				<TextInput
					value={caption}
					onChangeText={(text) => setCation(text)}
					style={styles.input}
					// multiline={true}
					// numberOfLines={4}
				/>

				<ImagePicker onTakeImage={takeImageHandler} />
				<LocationPicker onPickLocation={pickLocationHandler} />
				<TouchableOpacity
					style={{
						backgroundColor: Colors.maroon,
						width: 150,
						alignSelf: "center",
						alignItems: "center",
						padding: 4,
						borderRadius: 4,
						elevation: 6,
						marginTop: 16,
					}}
					onPress={savePlaceHandler}
				>
					<Text style={{ color: Colors.beige }}>Add Incident</Text>
				</TouchableOpacity>
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
