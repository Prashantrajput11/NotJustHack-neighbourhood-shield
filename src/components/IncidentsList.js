import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import IncidentCard from "./IncidentCard";

const IncidentsList = ({ incidents }) => {
	return (
		<FlatList
			data={incidents}
			renderItem={({ item }) => <IncidentCard incident={item} />}
		/>
	);
};

export default IncidentsList;

const styles = StyleSheet.create({});
