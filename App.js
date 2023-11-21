import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllIncidentsScreen from "./src/screens/AllIncidentsScreen";
import AddIncidentScreen from "./src/screens/AddIncidentScreen";
import IconButton from "./src/UI/IconButton";
import { Colors } from "./src/constants/colors";
import MapScreen from "./src/screens/MapScreen";

const Stack = createNativeStackNavigator();
export default function App() {
	return (
		<>
			<StatusBar />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: { backgroundColor: Colors.maroon },
						headerTintColor: Colors.beige,
						contentStyle: { backgroundColor: Colors.beige },
					}}
				>
					<Stack.Screen
						name="All Incidents"
						component={AllIncidentsScreen}
						options={({ navigation }) => ({
							headerRight: ({ tintColor }) => (
								<IconButton
									name="add"
									size={24}
									color={Colors.beige}
									onPress={() => navigation.navigate("AddIncident")}
								/>
							),
						})}
					></Stack.Screen>
					<Stack.Screen
						name="AddIncident"
						component={AddIncidentScreen}
						options={{
							title: "Add An Incident",
						}}
					></Stack.Screen>
					<Stack.Screen
						name="MapScreen"
						component={MapScreen}
						options={{
							title: "Map screen",
						}}
					></Stack.Screen>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
