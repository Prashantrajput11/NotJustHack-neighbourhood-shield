import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { launchImageLibraryAsync } from "expo-image-picker";
import { Colors } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const ImagePicker = ({ onTakeImage }) => {
	const [selectedImage, setSelectedImage] = useState("");

	const takePhoto = async () => {
		let result = await launchImageLibraryAsync({
			allowsEditing: true,
			aspect: [16, 9],
			quality: 0.6,
		});
		setSelectedImage(result.uri);
		onTakeImage(result.uri);
	};

	let imagePreview = <Text>No Image Yet</Text>;
	if (selectedImage) {
		imagePreview = (
			<Image source={{ uri: selectedImage }} style={styles.image} />
		);
	}
	return (
		<View>
			<View style={styles.imageContainer}>{imagePreview}</View>

			<TouchableOpacity
				style={styles.takeImageCtaContainer}
				onPress={takePhoto}
			>
				<Ionicons name="camera" size={24} color={Colors.beige} />
				<Text style={styles.takeImageCtaText}>Take Image</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ImagePicker;

const styles = StyleSheet.create({
	imageContainer: {
		width: "100%",
		height: 200,
		marginVertical: 8,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.maroon,
		borderRadius: 4,
	},
	image: {
		width: "100%",
		height: "100%",
	},

	takeImageCtaContainer: {
		backgroundColor: Colors.maroon,
		paddingVertical: 8,
		paddingHorizontal: 6,
		borderRadius: 6,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},

	takeImageCtaText: {
		color: Colors.beige,
		fontSize: 18,
		textAlign: "center",
		marginLeft: 16,
	},
});
