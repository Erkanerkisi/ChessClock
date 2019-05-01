import { StyleSheet } from "react-native";

export const AppStyles = StyleSheet.create({
  tabs: {
    flex: 1
  },
  settings: {
    flex: 0.2,
    backgroundColor: "#444444",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row"
  },
  active: {
    color: "#000000",
    backgroundColor: "#3499FF",
    textAlign: "center",
    justifyContent: "center"
  },
  passive: {
    color: "#000000",
    backgroundColor: "#9C9C9C",
    textAlign: "center",
    justifyContent: "center"
  },
  rotate180: {
    transform: [{ rotate: "180deg" }]
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  separatorStyle: {
    fontSize : 90,
    height: '67%',
    width: '100%',
    color: '#000'
  }
});