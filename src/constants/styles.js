import { StyleSheet, Dimensions } from "react-native";
import { primary, secondary } from "./colors";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    width: 300,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 30,
    padding: 30,
    backgroundColor: "white",
  },
  guessesTyle: {
    flex: 1,
    flexDirection: "row",
    marginTop: 30,
    marginHorizontal: 60,
    justifyContent: "space-between",
    borderColor: "black",
    borderWidth: 0.5,
    padding: 10,
  },
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    borderRadius: 25,
    elevation: 6,
  },
  input: {
    width: 70,
    height: 50,
    padding: 10,
    marginTop: 15,
    borderColor: primary,
    borderRadius: 20,
    borderWidth: 2,
    textAlign: "center",
    fontSize: 18,
  },
  selectedNumber: {
    color: secondary,
    fontWeight: "500",
    width: 70,
    height: 50,
    padding: 10,
    marginTop: 15,
    borderColor: secondary,
    borderRadius: 20,
    borderWidth: 2,
    textAlign: "center",
    fontSize: 18,
  },
  confirmCard: {
    width: 200,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 30,
    padding: 30,
    backgroundColor: "white",
  },
  title: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "open-sans-bold",
  },
  roundsText: {
    color: primary,
    marginTop: 15,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "open-sans-bold",
  },
  btnLayout: {
    width: Dimensions.get("window").width / 2,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  reset: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 20,
  },
  header: {
    height: 90,
    backgroundColor: primary,
    justifyContent: "center",
    paddingTop: 36,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  customText: {
    fontFamily: "open-sans-bold",
    color: "white",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: "black",
    overflow: "hidden",
    alignSelf: "center",
  },
});
