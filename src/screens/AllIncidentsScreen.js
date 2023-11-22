import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import IncidentsList from "../components/IncidentsList";
import { useIsFocused } from "@react-navigation/native";

const incidentList = [
	// {
	// 	id: "01",
	// 	title: "Fire near tank",
	// 	address: "ryan enclave",
	// },
	// {
	// 	id: "02",
	// 	title: "Flood in school",
	// 	address: "Sohna",
	// },
];
const AllIncidentsScreen = ({ route }) => {
	const [loadedIncidents, setLoadedIncidents] = useState([]);

	// const data = route.params.incident;
	// console.log({ data });
	// console.log({ loadedIncidents });
	const isFocused = useIsFocused();
	useEffect(() => {
		if (route.params && isFocused) {
			setLoadedIncidents((currIncidents) => [
				...currIncidents,
				route.params.incident,
			]);
		}
	}, [isFocused]);

	return <IncidentsList incidents={loadedIncidents} />;
};

export default AllIncidentsScreen;

const styles = StyleSheet.create({});
