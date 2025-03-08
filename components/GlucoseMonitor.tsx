import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Droplet } from 'lucide-react-native';
import { LineChart } from 'react-native-chart-kit';
// Import the LineChart component
const GlucoseMonitor = () => {

  const glucoseData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [1100, 1105, 1105, 1108, 1102, 1102, 1108],
        color: (opacity = 1) => `rgba(59, 130, 246, ${opacity})`, // Blue color (#3B82F6)
        strokeWidth: 2
      }
    ],
    legend: ['Glucose mg/L']
  };

  const screenWidth = Dimensions.get('window').width;

  const chartConfig = {
    backgroundGradientFrom: '#f9fafb',
    backgroundGradientTo: '#f9fafb',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(59, 130, 246, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(55, 65, 81, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: '2',
      strokeWidth: '2',
      stroke: '#3B82F6'
    },
    propsForBackgroundLines: {
      strokeDasharray: '',
      stroke: '#e5e7eb',
      strokeWidth: 1
    },
    propsForVerticalLabels: {
      fontSize: 10,
      rotation: 0
    },
    propsForHorizontalLabels: {
      fontSize: 10
    }
  };

  return (
    <View className="bg-white p-4 rounded-lg m-4 border border-gray-200 mt-0">
      <View className="flex-row items-center justify-between mb-4">
        <View className="flex-row items-center">
          <Droplet size={20} color="#3B82F6" />
          <Text className="font-bold ml-2 text-gray-700 text-[16px]">Glucose Levels</Text>
        </View>
        <Text className="text-[#3B82F6]">Weekly View</Text>
      </View>

      <View className="bg-gray-50 rounded-lg p-2">
        {/* Custom chart container with range indicators */}
        <View className="relative">
          <LineChart
            data={glucoseData}
            width={screenWidth - 48}
            height={220}
            chartConfig={chartConfig}
            bezier
            fromZero={false}
            yAxisSuffix="mg/L"
            yAxisInterval={1}
            segments={4}
            style={{
              marginVertical: 8,
              borderRadius: 8
            }}
          />

          {/* Horizontal reference lines with improved positioning */}
          <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none'
          }}>
            {/* Low reference line */}
            <View style={{
              position: 'absolute',
              left: 60,
              right: 10,
              height: 1,
              top: '70%', // Approximate position for 800 mg/L
              borderWidth: 1,
              borderColor: '#10B981',
              borderStyle: 'dashed',
              zIndex: 5
            }} />

            {/* High reference line */}
            <View style={{
              position: 'absolute',
              left: 60,
              right: 10,
              height: 1,
              top: '30%', // Approximate position for 1400 mg/L
              borderWidth: 1,
              borderColor: '#F59E0B',
              borderStyle: 'dashed',
              zIndex: 5
            }} />
          </View>
        </View>
      </View>

      <View className="flex-row bg-[#EFF6FF] p-3 rounded-lg">
        <View className="flex-1 items-center">
          <Text className="text-sm text-gray-500">Average</Text>
          <Text className="text-lg font-bold text-[#3B82F6]">1150 mg/L</Text>
        </View>
        <View style={{ width: 1 }} className="bg-gray-200 mx-2" />
        <View className="flex-1 items-center">
          <Text className="text-sm text-gray-500">Status</Text>
          <Text className="text-lg font-bold text-[#10B981]">Stable</Text>
        </View>
      </View>

      <TouchableOpacity className="bg-[#3B82F6] py-3 rounded-lg justify-center items-center mt-4">
        <Text className="text-white font-bold">View Detailed History</Text>
      </TouchableOpacity>
    </View>
  );
}

export default GlucoseMonitor;
