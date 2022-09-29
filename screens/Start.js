import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const Start = ({ navigation }) => {
    return (
        <View style={styles.body}>
            <Image
                source={require("../assets/images/logo.png")}
                resizeMode="contain"
                style={{ height: 50, width: 100 }}
            />
            <Image
                source={require("../assets/images/cat.png")}
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.headLine}>Be Ready to Learn English easily</Text>
            <Text style={styles.subtitle}>
                Listen to stories,watch videos and improve your language with BrainBob
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Home")}
            >
                <Text style={{ textAlign: "center", color: "deeppink" }}>
                    Let's Start
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(200,100,200)",
    },
    image: {
        margin: 100,
        height: 200,
        width: 200,
        borderRadius: 100,
    },
    headLine: {
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
    },
    subtitle: {
        textAlign: "center",
        color: "white",
        padding: 15,
        fontSize: 20,
    },
    button: {
        width: 200,
        padding: 15,
        backgroundColor: "rgb(255,255,255)",
        margin: 20,
        borderRadius: 50,
    },
});
export default Start;
