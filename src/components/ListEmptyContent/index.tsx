import React from 'react'
import { View, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { styles } from './styles'

export default function ListEmptyContent(){
    return(
        <View style={styles.container}>
            <MaterialCommunityIcons name="clipboard-text" size={100} color='black'/>
            <Text style={styles.firstText}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.secondText}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}