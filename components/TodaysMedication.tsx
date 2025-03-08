import { router } from 'expo-router';
import { Pill } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const TodaysMedication = () => {
  return (
    <View className="bg-white p-4 rounded-lg m-4 border border-gray-200 mt-0">
      <Text className="font-bold mb-3 text-gray-700 text-[16px]">Today's Medications</Text>
      <View className="mt-2 flex-col divide-y divide-gray-200">
        <View className="flex-row items-center mb-4 border-b border-gray-100 pb-4">
          <View className="w-12 h-12 rounded-lg flex mr-3 bg-[#ECFDF5] justify-center items-center">
            <Pill size={24} color="#6366F1" />
          </View>
          <View className="flex-1">
            <Text className="font-bold">Metformin</Text>
            <Text>500mg • 1 pill</Text>
          </View>
          <Text className="text-[#4B5563]">9:00 AM</Text>
        </View>
        <View className="flex-row items-center">
          <View className="w-12 h-12 rounded-lg flex mr-3 bg-[#FEF3C7] justify-center items-center">
            <Pill size={24} color="#F59E0B" />
          </View>
          <View className="flex-1">
            <Text className="font-bold">Lisinopril</Text>
            <Text>10mg • 1 pill</Text>
          </View>
          <Text className="text-[#4B5563]">2:00 PM</Text>
        </View>
      </View>
      <View className="flex-row gap-4 mt-6">
        <TouchableOpacity onPress={() => router.push('/medications')} className="flex-1 bg-[#3B82F6] py-3 rounded-lg justify-center items-center">
          <Text className="text-white font-bold">All Medications</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 bg-[#10B981] py-3 rounded-lg justify-center items-center">
          <Text className="text-white font-bold">Add Prescription</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TodaysMedication;
