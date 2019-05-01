import { StyleSheet } from "react-native";

export const AppStyles = StyleSheet.create({
  container: {
    backgroundColor : '#CBCBCB'
  },
  GridViewBlockStyle: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    height: 100,
    margin: 5,
    backgroundColor: "#05BC87"
  },
  GridViewInsideTextItemStyle: {
    color: "#fff",
    padding: 10,
    fontSize: 18,
    justifyContent: "center"
  },
  welcomeText: {
    color: "#0F2284",
    padding: 60,
    fontSize: 30,
    justifyContent: "center",
    textAlign: "center"
  },
  text: {
    fontSize: 20,
    justifyContent: "center",
    marginLeft:10
  },
  slider: {
    width: '100%',
    marginBottom: 25,
    marginTop: 10,
    justifyContent: "center",
    alignItems : "center"
  },
  tabs: {
    flex: 1,
    borderWidth: 7,
    borderColor: "#222222",
    borderRadius: 20
  },
  settings: {
    flex: 0.2,
    backgroundColor: "#222222",
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
    fontSize : 60,
    color: '#000'
  }
});