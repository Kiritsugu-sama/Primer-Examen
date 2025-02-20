import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";

export default function AddScreen() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter();

    const agregar = () => {
        if (!title.trim() || !description.trim()) {
            Alert.alert("Error", "Ambos campos son obligatorios");
            return;
        }

        router.push({
            pathname: "/tabs/home",
            params: { title, description }
        });
        
        setTitle("");
        setDescription("");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Agregar Nueva Tarea</Text>
            <TextInput
                style={styles.input}
                placeholder="Título"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Descripción"
                value={description}
                onChangeText={setDescription}
                multiline
            />
            <TouchableOpacity style={styles.addButton} onPress={agregar}>
                <Text style={styles.addButtonText}>Agregar Tarea</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: "#F5F7FA",
    },
    header: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
        backgroundColor: "#fff",
    },
    addButton: {
        backgroundColor: "#4CAF50",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10,
    },
    addButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});
