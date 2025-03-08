import { Pill, UtensilsCrossed } from 'lucide-react-native';
import React from 'react';
import { Text, View } from 'react-native';

const HealthStatus = () => {
  return (
    <View className="bg-white p-4 rounded-lg m-4 border border-gray-200 mt-0">
      <View className="flex-row items-center justify-between">
        <Text className="font-bold mb-3 text-gray-700 text-[16px]">Health Status</Text>
        <Text className="text-[#10B981]">All Clear</Text>
      </View>
      <View className="flex-row gap-4">
        <View className="flex-1 p-4 rounded-lg bg-[#ECFDF5]">
          <Pill size={24} color="#10B981" />
          <Text className="font-bold mt-2">Medications</Text>
          <Text className="mt-1">No Conflicts</Text>
        </View>
        <View className="flex-1 p-4 rounded-lg bg-[#EFF6FF]">
          <UtensilsCrossed size={24} color="#3B82F6" />
          <Text className="font-bold mt-2">Diet</Text>
          <Text className="mt-1">Safe to Eat</Text>
        </View>
      </View>
    </View>
  );
}

export default HealthStatus;
