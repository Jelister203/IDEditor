import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        marginBottom: 10,
        color: "#f1f1f1"
    },
    labelButton: {
        fontSize: 20,
        elevation: 1,
        marginBottom: 10,
        backgroundColor: "#212121",
        paddingVertical: 10,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#333333",
        color: '#f1f1f1',
        width: '95%',
        alignSelf: "center",
        paddingLeft: 15,
        borderRadius: 5,

    },
    appButtonContainer: {
        top:10,
        elevation: 1,
        borderColor: "#333333",
        backgroundColor: "#212121",
        borderRadius: 150,
        paddingVertical: 10,
        paddingHorizontal: 112,
        borderStyle: "solid",
        borderWidth: 3,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        color: '#f1f1f1'

    },
    codeInput: {
        fontFamily: 'monospace',
        fontSize: 16,
        padding: 10,
        borderWidth: 1,
        borderColor: "#333333",
        borderRadius: 5,
        backgroundColor: "#212121",
        color: '#f1f1f1'
    },
    labelBold: {
        fontSize: 20,
        alignSelf: "center",
        fontWeight: "bold",
        color: '#f1f1f1'
    },
        title: {
        fontSize: 30,
        marginBottom: 10,
        fontWeight: "bold",
        color: '#f1f1f1'
    },
});
export default styles;