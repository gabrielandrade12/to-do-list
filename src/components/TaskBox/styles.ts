import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
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
    textTaskBox: {
        color: '#F2F2F2',
        lineHeight: 20,
        fontWeight: '400',
        width: 235
    },
    check: {
        marginRight: 8
    },
    trash: {
        marginLeft: 8
    }
})