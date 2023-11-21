import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import OutlineButton from "../UI/OutlineButton";
import { Colors } from "../constants/colors";
import {
	getCurrentPositionAsync,
	useForegroundPermissions,
	PermissionStatus,
} from "expo-location";
import Map from "./Map";

const LocationPicker = () => {
	const [pickedLocation, setPickedLocation] = useState();
	const [locationPermissionInformation, requestPermission] =
		useForegroundPermissions();
	// Allow Permission services
	async function verifyPermssions() {
		if (
			locationPermissionInformation.status === PermissionStatus.UNDETERMINED
		) {
			const permissionResponse = await requestPermission();
			return permissionResponse.granted;
		}

		if (locationPermissionInformation.status === PermissionStatus.DENIED) {
			Alert.alert("insufficent permission", "permission not granted by user");
			return false;
		}

		return true;
	}

	// Get User's location
	async function getUserLocation() {
		const hasPermission = await verifyPermssions();
		if (!hasPermission) {
			return;
		}
		let location = await getCurrentPositionAsync({});
		setPickedLocation({
			lat: location.coords.latitude,
			lng: location.coords.longitude,
		});
		console.log(location);
	}

	function getUserLocationWithMap() {}

	let mapPreview = <Text>No Location Picked Yet</Text>;
	if (pickedLocation) {
		console.log({ pickedLocation });
		mapPreview = <Map />;
	}
	return (
		<View>
			<View style={styles.mapPreview}>{mapPreview}</View>
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
		// backgroundColor: Colors.maroon,
		borderRadius: 4,
	},
	actions: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
});
