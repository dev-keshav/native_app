import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ExpenseGraph from '../components/expenseGraph'
import BottomNav from '../components/BottomNav';

const Home = () => {
  const [selectedRange, setSelectedRange] = useState('today');

  const handleClick = (range) => {
    setSelectedRange(range);
  };

  console.log(BottomNav);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.balanceContainer}>
          <Text style={{ fontWeight: '500', color: 'grey' }}>Account Balance</Text>
          <Text style={styles.balanceText}>$38742</Text>
          <View style={styles.imageContainer}>
            <View style={styles.incomeContainer}>
              <Image source={require('../../../assets/images/income.png')} style={styles.image} />
              <View style={{ marginLeft: 12 }}>
                <Text style={{ color: 'white' }}>Income</Text>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: '500' }}>$5000</Text>
              </View>
            </View>
            <View style={styles.expenseContainer}>
              <Image source={require('../../../assets/images/expense.png')} style={styles.image} />
              <View style={{ marginLeft: 12 }}>
                <Text style={{ color: 'white' }}>Expense</Text>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: '500' }}>$2000</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Graph Section */}
      <View style={styles.graphContainer}>
        <ExpenseGraph selectedRange={selectedRange} />
      </View>

      {/* Buttons for Time Range */}
      <View style={styles.transactionContainer}>
        <View style={styles.btnContainer}>
          {['today', 'week', 'month', 'year'].map((range) => (
            <TouchableOpacity
              key={range}
              style={[styles.btnTouch, selectedRange === range && styles.activeTouch]}
              onPress={() => handleClick(range)}
            >
              <Text style={[styles.btnText, selectedRange === range && styles.activeBtn]}>{range.charAt(0).toUpperCase() + range.slice(1)}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View>
        <BottomNav />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#fef7ea',
  },
  balanceContainer: {
    flex: 1,
    alignItems: 'center',
  },
  balanceText: {
    fontSize: 35,
    fontWeight: '500',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  incomeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00a86b',
    width: 180,
    height: 95,
    borderRadius: 20,
    marginRight: 15,
  },
  expenseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fd3c4a',
    width: 180,
    height: 95,
    borderRadius: 20,
  },
  graphContainer: {
    flex: 1,
  },
  transactionContainer: {
    flex: 4,
    backgroundColor: '#e8dcff'
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  btnText: {
    fontWeight: '500',
    color: 'grey',
    textAlign: 'center',
  },
  activeBtn: {
    color: '#fcac12',
    fontSize: 18,
  },
  btnTouch: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
    backgroundColor: 'transparent',
  },
  activeTouch: {
    backgroundColor: '#fceed4',
  },
});
