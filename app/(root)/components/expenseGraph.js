import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const ExpenseGraph = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.graphTitle}>Expense Frequency</Text>
      <BarChart
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              data: [500, 800, 1200, 1000, 2000, 1500], // Example expenses data
            },
          ],
        }}
        width={Dimensions.get('window').width - 40}
        height={220}
        yAxisLabel="$"
        chartConfig={{
          backgroundGradientFrom: '#fef7ea',
          backgroundGradientTo: '#fef7ea',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        style={styles.graphStyle}
      />
    </View>
  );
};

export default ExpenseGraph;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  graphTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  graphStyle: {
    borderRadius: 10,
  },
});
