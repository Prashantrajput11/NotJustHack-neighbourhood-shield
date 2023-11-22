import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import IncidentCard from "./IncidentCard";

const IncidentsList = ({ incidents }) => {
	console.log({ incidents });
	if (!incidents || incidents.length === 0) {
		return (
			<View style={styles.fallbackContainer}>
				<Text style={styles.fallBackText}>No Incidents Added Yet - </Text>
			</View>
		);
	}
	return (
		<FlatList
			style={{ margin: 6 }}
			data={incidents}
			renderItem={({ item }) => <IncidentCard incident={item} />}
			showsVerticalScrollIndicator={false}
		/>
	);
};

export default IncidentsList;

const styles = StyleSheet.create({
	fallbackContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	fallBackText: {
		fontSize: 22,
	},
});
