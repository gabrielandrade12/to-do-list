import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#454545',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        height: 173,
        backgroundColor: '#0D0D0D',
        alignItems: 'center'
    },
    logo: {
        marginTop: 70,
        marginBottom: 40,
        marginHorizontal: 132
    },
    addTaskForm:{
        flexDirection: 'row',
        marginLeft: 24,
        marginRight: 24,
        alignContent: 'stretch'
    },
    input:{
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 22,
        color: '#F2F2F2',
        width: 271,
        height: 54,
        backgroundColor: '#262626',
        borderWidth: 1,
        borderRadius: 6,
        padding: 16, 
        alignItems: 'center',
        marginRight: 4
    },
    button:{
        width: 52,
        height: 52,
        backgroundColor: '#1E6F9F',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    taskInfo: {
        flexDirection: 'row',
        marginTop: 52,
        marginLeft: 24,
        marginRight: 24,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#333333',
        paddingBottom: 20,
        alignSelf: 'stretch'
    },
    tasksCreatedContainer: {
        flexDirection: 'row',
    },
    tasksCreated: {
        color: '#4EA8DE',
        lineHeight: 17,
        fontWeight: '700',
    },
    quantityTasksCreated: {
        width: 25,
        height: 19,
        borderRadius: 999,
        marginLeft: 8,
        backgroundColor: '#333333',
        paddingVertical: 2,
        paddingHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    quantityTasksButtonText: {
        color: 'white',
        fontWeight:'700',
        fontSize: 12
    },
    tasksCompletedContainer: {
        flexDirection: 'row'
    },
    tasksCompleted: {
        color: '#8284FA',
        lineHeight: 17,
        fontWeight: '700',
    },
    quantityTasksCompleted: {
        width: 25,
        height: 19,
        borderRadius: 999,
        marginLeft: 8,
        backgroundColor: '#333333',
        paddingVertical: 2,
        paddingHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }
})