import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView from "react-native-maps";

const Map = () => {
	return (
		<View style={{}}>
			<MapView
				// provider="google"
				mapType="standard"
				// showsUserLocation
				// zoomEnabled
				// zoomTapEnabled
				style={{ height: 200, width: 350 }}
				region={{
					latitude: 28.366113,
					longitude: 77.065738,
					latitudeDelta: 0.922,
					longitudeDelta: 0.0421,
				}}
			/>
		</View>
	);
};

export default Map;

const styles = StyleSheet.create({});
