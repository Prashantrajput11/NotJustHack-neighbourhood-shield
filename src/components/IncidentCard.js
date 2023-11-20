import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

const IncidentCard = ({ incident, onSelect }) => {
	return (
		<Pressable onPress={onSelect}>
			<Image soource={{ uri: incident.imageUri }} />
			<Text>{incident.title}</Text>
			<Text>{incident.address}</Text>
		</Pressable>
	);
};

export default IncidentCard;

const styles = StyleSheet.create({});
