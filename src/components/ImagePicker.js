import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { launchImageLibraryAsync } from "expo-image-picker";

const ImagePicker = () => {
	const [selectedImage, setSelectedImage] = useState("");

	const takePhoto = async () => {
		let result = await launchImageLibraryAsync({
			allowsEditing: true,
			aspect: [16, 9],
			quality: 0.6,
		});

		console.log(result);

		if (!result.cancelled) {
			setSelectedImage(result.uri);
			console.log(result.uri);
		}
	};
	return (
		<View>
			<TouchableOpacity style={{ backgroundColor: "red" }} onPress={takePhoto}>
				<Text>Button</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ImagePicker;

const styles = StyleSheet.create({});
