import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, ArrowRight, Pill as Pills, UtensilsCrossed } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100 flex gap-0">
      <ScrollView className="flex-1">
        <View className="flex-row justify-between items-center p-4">
          <View className="flex-row items-center gap-3">
            <View className="w-10 h-10 bg-blue-500 rounded-full justify-center items-center">
              <Text className="text-white text-lg font-bold">S</Text>
            </View>
            <View>
              <Text className="font-bold">Hi, Sarah</Text>
              <Text>Stay healthy today</Text>
            </View>
          </View>
          <TouchableOpacity className="w-10 h-10 bg-gray-200 rounded-lg justify-center items-center">
            <Bell size={24} color="#1F2937" />
          </TouchableOpacity>
        </View>

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

        <View className="bg-white p-4 rounded-lg m-4 border border-gray-200 mt-0">
          <View className="flex-row items-center justify-between">
            <Text className="font-bold mb-3 text-gray-700 text-[16px]">Health Status</Text>
            <Text className="text-[#10B981]">All Clear</Text>
          </View>
          <View className="flex-row gap-4">
            <View className="flex-1 p-4 rounded-lg bg-[#ECFDF5]">
              <Pills size={24} color="#10B981" />
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

        <View className="bg-white p-4 rounded-lg m-4 border border-gray-200 mt-0">
          <Text className="font-bold mb-3 text-gray-700 text-[16px]">Today's Medications</Text>
          <View className="mt-2 flex-col divide-y divide-gray-200">
            <View className="flex-row items-center mb-4 border-b border-gray-200 pb-4">
              <View className="w-12 h-12 rounded-lg flex mr-3 bg-[#ECFDF5] justify-center items-center">
                <Pills size={24} color="#6366F1" />
              </View>
              <View className="flex-1">
                <Text className="font-bold">Metformin</Text>
                <Text>500mg • 1 pill</Text>
              </View>
              <Text className="text-[#4B5563]">9:00 AM</Text>
            </View>
            <View className="flex-row items-center">
              <View className="w-12 h-12 rounded-lg flex mr-3 bg-[#FEF3C7] justify-center items-center">
                <Pills size={24} color="#F59E0B" />
              </View>
              <View className="flex-1">
                <Text className="font-bold">Lisinopril</Text>
                <Text>10mg • 1 pill</Text>
              </View>
              <Text className="text-[#4B5563]">2:00 PM</Text>
            </View>
          </View>
          <View className="flex-row gap-4 mt-6">
            <TouchableOpacity className="flex-1 bg-[#3B82F6] py-3 rounded-lg justify-center items-center">
              <Text className="text-white font-bold">All Medications</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 bg-[#10B981] py-3 rounded-lg justify-center items-center">
              <Text className="text-white font-bold">Add Prescription</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
