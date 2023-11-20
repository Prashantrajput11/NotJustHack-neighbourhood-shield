import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IncidentsList from "../components/IncidentsList";

const incidentList = [
	{
		id: "01",
		title: "Fire near tank",
		address: "ryan enclave",
	},
	{
		id: "02",
		title: "Flood in school",
		address: "Sohna",
	},
];
const HomeScreen = () => {
	return <IncidentsList incidents={incidentList} />;
};

export default HomeScreen;

const styles = StyleSheet.create({});
