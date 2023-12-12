import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    label: {
    fontSize: 20,
    marginBottom: 10,
    },
    labelButton: {
        fontSize: 20,
        elevation: 1,
        marginBottom: 10,
        backgroundColor: "#ffffff",
        paddingVertical: 10,
        borderStyle: "solid",
        borderWidth: 2,
        },
    appButtonContainer: {
        elevation: 1,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 112,
        borderStyle: "solid",
        borderWidth: 3,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
      },
    codeInput: {
        fontFamily: 'monospace',
        fontSize: 16,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#f7f7f7',
        color: '#333',
    },
    labelBold: {
    fontSize: 20,
    alignSelf: "center",
    fontWeight: "bold",
    },
    title: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: "bold",
    },
   });
export default styles;