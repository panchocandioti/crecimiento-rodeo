import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    table: {
        width: '100%',
        margin: '20px 0',
        border: '1px solid #000',
        fontFamily: 'Helvetica',
    },
    tableRow: {
        flexDirection: 'row',
    },
    tableCell: {
        flex: 1,
        border: '1px solid #000',
        padding: 8,
        textAlign: 'center',
    },
});

function ReportePDF(props) {

    const inputs1 = props.inputs1;
    const inputs2 = props.inputs2;
    const inputs3 = props.inputs3;
    const resultados1 = props.resultados1;
    const resultados2 = props.resultados2;
    const resultados3 = props.resultados3;

    return (
        <Document>
            <Page size="A4" orientation='landscape'>
                <View>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>INPUTS</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>ESTADO 1</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>ESTADO 2</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>ESTADO 3</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Interv. entre partos (meses):</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs1[0]}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs2[0]}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs3[0]}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Rechazo adultas (%):</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs1[1]}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs2[1]}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs3[1]}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default ReportePDF