import {
    FontAwesome,
    MaterialCommunityIcons,
    Foundation,
    Ionicons,
} from "@expo/vector-icons";
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image,
    FlatList,
    ScrollView,
} from "react-native";
const Home = () => {
    const data = [
        { id: 1, title: "Brainstorm" },
        { id: 2, title: "Books" },
        { id: 3, title: "Video" },
        { id: 4, title: "PodCast" },
        { id: 5, title: "Articles" },
    ];
    const cardListData = [
        {
            icons: require("../assets/images/messenger.png"),
            id: 1,
            title: "Chatting",
            time: "5 minutes",
        },
        {
            icons: require("../assets/images/microphone.png"),
            id: 2,
            title: "Reading",
            time: "3 minutes",
        },
        {
            icons: require("../assets/images/headphones.png"),
            id: 3,
            title: "Listening",
            time: "2 minutes",
        },
        {
            icons: require("../assets/images/talking.png"),
            id: 4,
            title: "Conversation",
            time: "5 minutes",
        },
    ];
    return (
        <View style={styles.body}>
            <View>
                <View style={styles.iconsContainer}>
                    <MaterialCommunityIcons name="dots-grid" size={24} color="black" />
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome
                            name="search"
                            size={24}
                            color="black"
                            style={{ marginRight: 20 }}
                        />
                        <Foundation name="save" size={24} color="black" />
                    </View>
                </View>
                <View style={styles.title}>
                    <Text style={{ fontSize: 40 }}>Choose what </Text>
                    <Text style={{ fontSize: 40, fontWeight: "bold", color: "black" }}>
                        to learn today?
                    </Text>
                </View>
                <FlatList
                    horizontal
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={({ item, index }) => {
                        return (
                            <View>
                                <Text
                                    style={
                                        index == 0
                                            ? {
                                                backgroundColor: "black",
                                                color: "white",
                                                padding: 15,
                                                borderRadius: 50,
                                                marginTop: 20,
                                                marginRight: 10,
                                                width: 120,
                                                textAlign: "center",
                                            }
                                            : styles.listItem
                                    }
                                >
                                    {item.title}
                                </Text>
                            </View>
                        );
                    }}
                />
                <View style={styles.videoSection}>
                    <View style={{ margin: 20 }}>
                        <Text style={styles.videohead}>Vocabulary</Text>
                        <Text style={styles.videoCaption}>Listen 20 new words</Text>
                        <TouchableHighlight style={styles.startButton}>
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Text style={{ textAlign: "justify", marginTop: 5 }}>
                                    Start
                                </Text>
                                <Ionicons
                                    name="md-play-circle"
                                    size={24}
                                    color="black"
                                    style={{ marginTop: 3 }}
                                />
                            </View>
                        </TouchableHighlight>
                    </View>
                    <Image
                        source={require("../assets/images/boy.jpg")}
                        resizeMode="stretch"
                        style={{ width: 170, height: 150, borderRadius: 100, zIndex: 1, marginTop: 20 }}
                    />
                </View>
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>Recommended</Text>
                    <ScrollView style={{ height: 200 }} showsVerticalScrollIndicator={false}>
                        {cardListData.map((item, index) => {
                            return (
                                <View
                                    style={{
                                        flexDirection: "row",
                                        backgroundColor: "mintcream",
                                        padding: 5,
                                        margin: 10,
                                        borderRadius: 10,
                                    }}
                                    key={item.id}
                                >
                                    <View style={{ padding: 10 }}>
                                        <Image
                                            source={item.icons}
                                            style={{
                                                width: 30,
                                                height: 30,
                                                marginRight: 20,
                                            }}
                                        />
                                    </View>
                                    <View style={{ marginTop: 5 }}>
                                        <Text
                                            style={{
                                                fontWeight: "bold",
                                                fontSize: 15,
                                                color: "hotpink",
                                            }}
                                        >
                                            {item.title}
                                        </Text>
                                        <Text>{item.time}</Text>
                                    </View>
                                    <View style={{ marginLeft: 120, justifyContent: "center" }}>
                                        <Foundation name="save" size={24} color="black" />
                                    </View>
                                </View>
                            );
                        })}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        padding: 25,
        margin: 10
    },
    iconsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    title: {
        marginTop: 20,
    },

    listItem: {
        backgroundColor: "silver",
        color: "white",
        padding: 15,
        borderRadius: 50,
        marginTop: 20,
        marginRight: 10,
        width: 120,
        fontWeight: "bold",
        textAlign: "center",
    },
    videoSection: {
        width: "100%",
        backgroundColor: "orchid",
        height: 200,
        borderRadius: 30,
        marginVertical: 40,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    videohead: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25,
    },
    videoCaption: {
        marginTop: 15,
        color: "white",
    },
    startButton: {
        marginTop: 30,
        backgroundColor: "white",
        width: 100,
        borderRadius: 15,
        padding: 10,
        height: 50,
    },
});

export default Home;
