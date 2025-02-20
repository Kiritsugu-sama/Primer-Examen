import TaskCard from "@/components/TaskCard";
import {  useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, TextInput, FlatList } from "react-native";


export default function HomeScreen() {
    const params = useLocalSearchParams();
    const title: string = params.title as string;
    const description: string = params.description as string;

    const [tasks, setTasks] = useState([
        { title: "test", description: "test 1" },
    ]);

    useEffect(() => {
        if (title && description) {
            setTasks((prevTasks) => [...prevTasks, { title, description }]);
        }
    }, [title, description]);

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Lista de tareas:</Text>
            <FlatList
                data={tasks}
                renderItem={({ item }) => (
                    <TaskCard title={item.title} description={item.description} />
                )}
            />
        </View>
    );
}
