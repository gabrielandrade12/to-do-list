import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CheckCompleted from '../../images/checkTaskCompleted.svg'
import TrashIcon from '../../images/trashIcon.svg'
import { styles } from "./styles";

interface CompletedTaskBoxProps {
    key: string;
    taskName: string;
    onRemove: () => void;
    handleRemoveCompletedTask: () => void; 
    handleUndoTask: () => void;
}

export default function CompletedTaskBox({taskName, onRemove, handleRemoveCompletedTask, handleUndoTask}: CompletedTaskBoxProps){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.checkFilled} onPress={handleUndoTask}>
                <CheckCompleted width={24} height={24}/>
            </TouchableOpacity>
            <Text style={styles.textCompletedTaskBox}>{taskName}</Text>
            <TouchableOpacity style={styles.trashCompletedTask} onPress={handleRemoveCompletedTask}>
                <TrashIcon width={32} height={32}/>
            </TouchableOpacity>
        </View>
    )
}