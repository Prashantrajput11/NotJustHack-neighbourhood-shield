import { StyleSheet, Text, View } from "react-native";
import React from "react";
import OutlineButton from "../UI/OutlineButton";
import { Colors } from "../constants/colors";

const LocationPicker = () => {
	function getUserLocation() {}

	function getUserLocationWithMap() {}
	return (
		<View>
			<View style={styles.mapPreview}>
				<Text>No location Picked Yet</Text>
			</View>
			<View style={styles.actions}>
				<OutlineButton icon={"location"} onPress={getUserLocation}>
					Locate User
				</OutlineButton>
				<OutlineButton icon={"map"} onPress={getUserLocationWithMap}>
					Pick On Map
				</OutlineButton>
			</View>
		</View>
	);
};

export default LocationPicker;

const styles = StyleSheet.create({
	mapPreview: {
		width: "100%",
		height: 200,
		marginVertical: 8,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.maroon,
		borderRadius: 4,
	},
	actions: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
});
