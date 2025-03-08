import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Plus, Clock, CircleAlert as AlertCircle, ChevronLeft } from 'lucide-react-native';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { useRouter } from 'expo-router';

export default function MedicationsScreen() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="flex-1">
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity
              className="mr-3 p-2 bg-gray-200 rounded-full"
              onPress={() => router.back()}
            >
              <ChevronLeft size={24} color="#1F2937" />
            </TouchableOpacity>
            <Text style={styles.title}>Medications</Text>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Plus size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Active Prescriptions</Text>
          <View style={styles.medicationList}>
            {MEDICATIONS.map((medication, index) => (
              <TouchableOpacity key={index} style={styles.medicationCard}>
                <Image source={{ uri: medication.image }} style={styles.medicationImage} />
                <View style={styles.medicationInfo}>
                  <Text style={styles.medicationName}>{medication.name}</Text>
                  <Text style={styles.medicationDose}>{medication.dose}</Text>
                  <View style={styles.scheduleRow}>
                    <Clock size={16} color="#6B7280" />
                    <Text style={styles.scheduleText}>{medication.schedule}</Text>
                  </View>
                </View>
                {medication.hasWarning && (
                  <View style={styles.warningBadge}>
                    <AlertCircle size={16} color="#EF4444" />
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Medication History</Text>
          <View style={styles.historyList}>
            {HISTORY.map((item, index) => (
              <View key={index} style={styles.historyItem}>
                <View style={styles.historyDate}>
                  <Text style={styles.historyDay}>{item.day}</Text>
                  <Text style={styles.historyMonth}>{item.month}</Text>
                </View>
                <View style={styles.historyDetails}>
                  <Text style={styles.historyTitle}>{item.title}</Text>
                  <Text style={styles.historyDescription}>{item.description}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const MEDICATIONS = [
  {
    name: 'Metformin',
    dose: '500mg • 1 pill',
    schedule: 'Daily at 9:00 AM',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=60',
    hasWarning: true,
  },
  {
    name: 'Lisinopril',
    dose: '10mg • 1 pill',
    schedule: 'Daily at 2:00 PM',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&auto=format&fit=crop&q=60',
    hasWarning: false,
  },
];

const HISTORY = [
  {
    day: '15',
    month: 'MAR',
    title: 'Prescription Updated',
    description: 'Metformin dose adjusted to 500mg',
  },
  {
    day: '10',
    month: 'MAR',
    title: 'New Medication Added',
    description: 'Started Lisinopril treatment',
  },
];

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Inter_600SemiBold',
    color: '#1F2937',
  },
  addButton: {
    width: 40,
    height: 40,
    backgroundColor: '#3B82F6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
    color: '#1F2937',
    marginBottom: 16,
  },
  medicationList: {
    gap: 12,
  },
  medicationCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  medicationImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  medicationInfo: {
    flex: 1,
  },
  medicationName: {
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    color: '#1F2937',
  },
  medicationDose: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#6B7280',
    marginTop: 2,
  },
  scheduleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  scheduleText: {
    marginLeft: 4,
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#6B7280',
  },
  warningBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  historyList: {
    gap: 12,
  },
  historyItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
  },
  historyDate: {
    alignItems: 'center',
    marginRight: 16,
    paddingRight: 16,
    borderRightWidth: 1,
    borderRightColor: '#E5E7EB',
  },
  historyDay: {
    fontSize: 20,
    fontFamily: 'Inter_600SemiBold',
    color: '#1F2937',
  },
  historyMonth: {
    fontSize: 12,
    fontFamily: 'Inter_500Medium',
    color: '#6B7280',
  },
  historyDetails: {
    flex: 1,
  },
  historyTitle: {
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    color: '#1F2937',
  },
  historyDescription: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#6B7280',
    marginTop: 2,
  },
});