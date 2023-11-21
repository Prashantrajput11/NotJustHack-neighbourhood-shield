import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";

const Map = ({ mapHeight, mapWidth }) => {
	const [markedLocation, setMarkedLocation] = useState();

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
					// description={marker.description}
				/>
			)}
		</MapView>
	);
};

export default Map;

const styles = StyleSheet.create({});
