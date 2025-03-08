import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, Pill, UtensilsCrossed } from 'lucide-react-native';
import InteractionChecker from '@/components/InteractionChecker';
import GlucoseMonitor from '@/components/GlucoseMonitor';
import TodaysMedication from '@/components/TodaysMedication';

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

        <InteractionChecker />

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

        <TodaysMedication />

        <GlucoseMonitor />
      </ScrollView>
    </SafeAreaView>
  );
}