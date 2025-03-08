import { ArrowRight } from 'lucide-react-native';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

const InteractionChecker = () => {
  return (
    <View className="bg-white p-4 rounded-lg m-4 border border-gray-200 mt-2">
      <Text className="font-bold mb-3 text-gray-700 text-[16px]">Check Interactions</Text>
      <View className="flex-row items-center">
        <TextInput
          className="flex-1 h-10 bg-white rounded-lg px-4 mr-2 border border-gray-100"
          placeholder="Search medication or food..."
          placeholderTextColor="#6B7280"
        />
        <TouchableOpacity className="w-10 h-10 bg-blue-500 rounded-lg justify-center items-center">
          <ArrowRight size={18} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default InteractionChecker;
