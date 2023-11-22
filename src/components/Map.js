import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../UI/IconButton";

const Map = ({ mapHeight, mapWidth, markedLocation, setMarkedLocation }) => {
	const navigation = useNavigation();

	console.log({ markedLocation });
	region = {
		latitude: 28.366113,
		longitude: 77.065738,
		latitudeDelta: 0.922,
		longitudeDelta: 0.0421,
	};

	function selectLocationHandler(event) {
		const lat = event.nativeEvent.coordinate.latitude;
		const lng = event.nativeEvent.coordinate.longitude;

		setMarkedLocation({ lat: lat, lng: lng });
	}

	// Function to confirm and save location
	const savePickedLocationHandler = useCallback(() => {
		if (!markedLocation) {
			Alert.alert(
				"No Location Picked",
				"Please Pick A Location By Tapping On The Map"
			);

			return;
		}

		navigation.navigate("AddIncident", {
			pickedLat: markedLocation.lat,
			pickedLng: markedLocation.lng,
		});
	}, [navigation, markedLocation]);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: ({ tintColor }) => (
				<IconButton
					icon="save"
					size={24}
					color={tintColor}
					onPress={savePickedLocationHandler}
				/>
			),
		});
	}, [navigation, savePickedLocationHandler]);

	return (
		<MapView
			// provider="google"
			// mapType="standard"
			// showsUserLocation
			// zoomEnabled
			// zoomTapEnabled
			style={{ height: mapHeight, width: mapWidth }}
			region={{
				latitude: 28.366113,
				longitude: 77.065738,
				latitudeDelta: 0.922,
				longitudeDelta: 0.0421,
			}}
			onPress={selectLocationHandler}
		>
			{markedLocation && (
				<Marker
					coordinate={{
						latitude: markedLocation.lat,
						longitude: markedLocation.lng,
					}}
					title={"picked location"}
					draggable
					onDragEnd={(e) =>
						setMarkedLocation(e.nativeEvent.coordinate.latitude)
					}
					// description={marker.description}
				/>
			)}
		</MapView>
	);
};

export default Map;

const styles = StyleSheet.create({});
