import {
	StyleSheet,
	Text,
	View,
	Image,
	Pressable,
	Linking,
} from "react-native";
import React from "react";
import { Colors } from "../constants/colors";
import IconButton from "../UI/IconButton";
import * as Sharing from "expo-sharing";

const emergencyNumber = "911";
const IncidentCard = ({ incident, onSelect }) => {
	console.log({ incident });
	const handleCallEmergency = () => {
		const emergencyNumber = "911"; // Replace with the actual emergency number

		// Use Linking to open the phone dialer with the pre-filled number
		Linking.openURL(`tel:${emergencyNumber}`);
	};
	const postText = incident.selectedImage;
	const handleShare = async () => {
		try {
			await Sharing.shareAsync(postText);
		} catch (error) {
			console.error("Error sharing post:", error);
		}
	};
	return (
		<Pressable onPress={onSelect} style={styles.incidentCardContainer}>
			<Image
				source={{ uri: incident.selectedImage }}
				style={{ width: "100%", height: "100%", paddingVertical: 12 }}
			/>

			<View
				style={{
					// flexDirection: "row",

					alignItems: "center",
				}}
			>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Text
						style={{ color: Colors.beige }}
					>{`${incident.caption}   `}</Text>

					<Text style={{ color: Colors.beige, marginVertical: 6 }}>
						At Ryan Enaclave, Gurgaon
					</Text>
				</View>

				<Pressable
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginHorizontal: 6,
					}}
					onPress={handleShare}
				>
					<Text style={{ color: Colors.beige }}>Share</Text>
					<IconButton name="share-social" size={24} color={Colors.beige} />
				</Pressable>

				<Pressable
					style={{ flexDirection: "row", alignItems: "center" }}
					onPress={handleCallEmergency}
				>
					<Text style={{ color: Colors.beige }}>Call For Help</Text>
					<IconButton name="ios-call" size={24} color={Colors.beige} />
				</Pressable>
			</View>

			{/* <Text>{incident.address}</Text> */}
		</Pressable>
	);
};

export default IncidentCard;

const styles = StyleSheet.create({
	incidentCardContainer: {
		width: 400,
		height: 300,
		// margin: 32,
		// marginHorizontal: 16,
		marginVertical: 32,
		// flex: 1,
		// borderRadius: 2,
		// borderWidth: 2,
		// borderColor: Colors.maroon,
		backgroundColor: Colors.maroon,
		alignSelf: "center",
		justifyContent: "center",
		paddingBottom: 70,

		borderRadius: 6,
	},
});
