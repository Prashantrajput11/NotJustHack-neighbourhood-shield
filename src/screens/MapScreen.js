import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useState, useCallback, useLayoutEffect } from "react";
import Map from "../components/Map";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../UI/IconButton";

const MapScreen = () => {
	const navigation = useNavigation();
	// const [markedLocation, setMarkedLocation] = useState();

	// Function to confirm and save location
	// const savePickedLocationHandler = useCallback(() => {
	// 	if (!markedLocation) {
	// 		Alert.alert(
	// 			"No Location Picked",
	// 			"Please Pick A Location By Tapping On The Map"
	// 		);

	// 		return;
	// 	}

	// 	navigation.navigate("AddIncident", {
	// 		pickedLat: markedLocation.lat,
	// 		pickedLng: markedLocation.lng,
	// 	});
	// }, [navigation, markedLocation]);

	// useLayoutEffect(() => {
	// 	navigation.setOptions({
	// 		headerRight: ({ tintColor }) => (
	// 			<IconButton
	// 				name="save"
	// 				size={24}
	// 				color={tintColor}
	// 				onPress={savePickedLocationHandler}
	// 			/>
	// 		),
	// 	});
	// }, [navigation, savePickedLocationHandler]);

	return (
		<Map
			mapHeight={"100%"}
			mapWidth={"100%"}
			// markedLocation={markedLocation}
			// setMarkedLocation={setMarkedLocation}
		/>
	);
};

export default MapScreen;

const styles = StyleSheet.create({});
