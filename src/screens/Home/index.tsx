import React from 'react';
import { View, TextInput, TouchableOpacity, Text, FlatList, Alert } from 'react-native';
import { useState } from 'react';

import  ListEmptyContent from '../../components/ListEmptyContent';
import TaskBox from '../../components/TaskBox';

import Logo from '../../images/logo.svg';
import PlusCircle from '../../images/plusCircle.svg';

import { styles } from './styles';

export function Home(){
    const [tasks, setTasks] = useState<string[]>([])
    const [taskTyped, setTaskTyped] = useState('')
    const [ completedTaskCount, setCompletedTaskCount ] = useState(0)

    function handleTaskCreation(){
        setTasks(prevState =>[...prevState, taskTyped])
        setTaskTyped('')
    }

    function handleRemoveCompletedTask(taskName: string){
        Alert.alert('Remover tarefa', 'Deseja remover essa tarefa?', [
            {
                text: 'Sim',
                onPress: () => {
                    setTasks(prevState => prevState.filter(task => task !== taskName))
                    setCompletedTaskCount(completedTaskCount - 1)
                }
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    function handleRemoveTask(taskName: string){
        Alert.alert('Remover tarefa', 'Deseja remover essa tarefa?', [
            {
                text: 'Sim',
                onPress: () => setTasks(prevState => prevState.filter(task => task !== taskName))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    function addCompletedTaskCount(){
        setCompletedTaskCount(completedTaskCount + 1)
    }

    function removeCompletedTaskCount(){
        setCompletedTaskCount(completedTaskCount - 1)
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Logo width={110} height={32} style={styles.logo}/>
                <View style={styles.addTaskForm}>
                    <TextInput
                        style={styles.input}
                        placeholder='Adicione uma tarefa'
                        placeholderTextColor={'#808080'}
                        onChangeText = {setTaskTyped}
                        value={taskTyped}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleTaskCreation}>
                       <PlusCircle width={16} height={16}/>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.taskInfo}>
              <View style={styles.tasksCreatedContainer}>
                <Text style={styles.tasksCreated}>Criadas</Text>
                <TouchableOpacity style={styles.quantityTasksCreated}>
                    <Text style={styles.quantityTasksButtonText}>{tasks.length}</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.tasksCompletedContainer}>
                <Text style={styles.tasksCompleted}>Concluídas</Text>
                <TouchableOpacity style={styles.quantityTasksCompleted}>
                    <Text style={styles.quantityTasksButtonText}>{completedTaskCount}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <FlatList 
                data={tasks}
                keyExtractor={item => item}
                renderItem={({ item }) =>( 
                    <TaskBox
                        key={item} 
                        taskName={item}
                        onRemove={() => handleRemoveTask(item)}
                        addCompletedTaskCount={addCompletedTaskCount}
                        removeCompletedTaskCount={removeCompletedTaskCount}
                        handleRemoveCompletedTask={() => handleRemoveCompletedTask(item)}
                    />
                )}
                ListEmptyComponent={ListEmptyContent}
            />
        </View>
    )
}
