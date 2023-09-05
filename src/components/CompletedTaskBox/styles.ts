import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 327,
        height: 64,
        paddingVertical: 12,
        paddingHorizontal: 8,
        marginBottom: 8,
        backgroundColor: '#333333',
        borderRadius: 8,
        alignItems: 'center',
    },
    textCompletedTaskBox: {
        color: '#808080',
        lineHeight: 20,
        fontWeight: '400',
        textDecorationLine: 'line-through',
        width: 235
    },
    checkFilled: {
        marginRight: 8
    },
    trashCompletedTask: {
        marginLeft: 8
    }
})