import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constants/colors";
import IncidentForm from "../components/IncidentForm";

const AddIncidentScreen = () => {
	return (
		<View>
			<IncidentForm />
		</View>
	);
};

export default AddIncidentScreen;

const styles = StyleSheet.create({});
