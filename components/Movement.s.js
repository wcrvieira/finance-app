import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Movements({ data }) {

    const [showValor, setShowValor] = useState(false);

    return (
        <TouchableOpacity style={styles.container} onPress={ () => setShowValor(!showValor)}>
            <Text style={styles.date}>{data.date}</Text>

            <View style={styles.content}>
                <Text style={styles.descricao}>{data.descricao}</Text>

                {
                    showValor ? (
                        <Text
                            style={data.type === 1 ? styles.valor : styles.expenses}>

                            {data.type === 1 ? `R$ ${data.valor}` : `R$ -${data.valor}`}
                        </Text>
                    ) : (
                        <View style={styles.skeleton}>
                        </View>
                    )
                }

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },
    date: {
        color: '#DADADA',
        fontWeight: 'bold',
    },
    descricao: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    valor: {
        fontSize: 16,
        color: '#2ecc71',
        fontWeight: 'bold'
    },
    expenses: {
        fontSize: 16,
        color: '#e74e3c',
        fontWeight: 'bold'
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#DADADA',
        borderRadius: 8,
    }
})