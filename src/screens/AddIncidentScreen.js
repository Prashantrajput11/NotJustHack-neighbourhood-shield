import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constants/colors";
import IncidentForm from "../components/IncidentForm";

const AddIncidentScreen = ({ navigation }) => {
	function createIncidentHandler(incident) {
		// Save to device data base
		navigation.navigate("All Incidents", {
			incident: incident,
		});
	}
	return (
		<View>
			<IncidentForm onCreateIncident={createIncidentHandler} />
		</View>
	);
};

export default AddIncidentScreen;

const styles = StyleSheet.create({});
