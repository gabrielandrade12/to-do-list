import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import TrashIcon from '../../images/trashIcon.svg';
import Check  from '../../images/check.svg'
import CompletedTaskBox from "../CompletedTaskBox";

import { styles } from "./styles";

interface TaskBoxProps {
    key: string;
    taskName: string;
    onRemove: () => void;
    addCompletedTaskCount: () => void;
    removeCompletedTaskCount: () => void
    handleRemoveCompletedTask: () => void;
}

export default function TaskBox({ taskName, onRemove, addCompletedTaskCount, handleRemoveCompletedTask, removeCompletedTaskCount }: TaskBoxProps){
    const [isCompleted, setIsCompleted] = useState(false)

    function handleCompleteTask(){
        setIsCompleted(true)
        addCompletedTaskCount()
    }

    function handleUndoTask(){
        setIsCompleted(false);
        removeCompletedTaskCount();
    }

    if(isCompleted){
        return(
            <CompletedTaskBox
                key={taskName}
                taskName={taskName}
                onRemove={onRemove}
                handleRemoveCompletedTask={handleRemoveCompletedTask}
                handleUndoTask={handleUndoTask}
            />
        )
    } else {
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.check} onPress={handleCompleteTask}>
                    <Check width={24} height={24}/>
                </TouchableOpacity>
                <Text style={styles.textTaskBox}>{taskName}</Text>
                <TouchableOpacity style={styles.trash} onPress={onRemove}>
                    <TrashIcon width={32} height={32}/>
                </TouchableOpacity>
            </View>
        )
    }
}