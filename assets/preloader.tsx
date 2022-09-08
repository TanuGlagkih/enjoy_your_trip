import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export const Preloader = () => (
    <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#6ead3a" />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});