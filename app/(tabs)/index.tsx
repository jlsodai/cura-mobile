import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, ArrowRight, Pill as Pills, UtensilsCrossed } from 'lucide-react-native';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from '@expo-google-fonts/inter';

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>S</Text>
            </View>
            <View>
              <Text style={styles.greeting}>Hi, Sarah</Text>
              <Text style={styles.subGreeting}>Stay healthy today</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Bell size={24} color="#1F2937" />
          </TouchableOpacity>
        </View>

        <View style={styles.searchSection}>
          <Text style={styles.sectionTitle}>Check Interactions</Text>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search medication or food..."
              placeholderTextColor="#6B7280"
            />
            <TouchableOpacity style={styles.searchButton}>
              <ArrowRight size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
          <View style={styles.filterTags}>
            <TouchableOpacity style={styles.filterTag}>
              <Text style={styles.filterTagText}>Medications</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterTag}>
              <Text style={styles.filterTagText}>Foods</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterTag}>
              <Text style={styles.filterTagText}>Recent</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.healthStatus}>
          <View style={styles.healthStatusHeader}>
            <Text style={styles.sectionTitle}>Health Status</Text>
            <Text style={styles.statusText}>All Clear</Text>
          </View>
          <View style={styles.statusCards}>
            <View style={[styles.statusCard, styles.medicationCard]}>
              <Pills size={24} color="#10B981" />
              <Text style={styles.statusCardTitle}>Medications</Text>
              <Text style={styles.statusCardValue}>No Conflicts</Text>
            </View>
            <View style={[styles.statusCard, styles.dietCard]}>
              <UtensilsCrossed size={24} color="#3B82F6" />
              <Text style={styles.statusCardTitle}>Diet</Text>
              <Text style={styles.statusCardValue}>Safe to Eat</Text>
            </View>
          </View>
        </View>

        <View style={styles.medications}>
          <Text style={styles.sectionTitle}>Today's Medications</Text>
          <View style={styles.medicationList}>
            <View style={styles.medicationItem}>
              <View style={[styles.medicationIcon, { backgroundColor: '#EEF2FF' }]}>
                <Pills size={24} color="#6366F1" />
              </View>
              <View style={styles.medicationInfo}>
                <Text style={styles.medicationName}>Metformin</Text>
                <Text style={styles.medicationDose}>500mg • 1 pill</Text>
              </View>
              <Text style={styles.medicationTime}>9:00 AM</Text>
            </View>
            <View style={styles.medicationItem}>
              <View style={[styles.medicationIcon, { backgroundColor: '#FEF3C7' }]}>
                <Pills size={24} color="#F59E0B" />
              </View>
              <View style={styles.medicationInfo}>
                <Text style={styles.medicationName}>Lisinopril</Text>
                <Text style={styles.medicationDose}>10mg • 1 pill</Text>
              </View>
              <Text style={styles.medicationTime}>2:00 PM</Text>
            </View>
          </View>
          <View style={styles.medicationButtons}>
            <TouchableOpacity style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>All Medications</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Add Prescription</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
  },
  greeting: {
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
    color: '#1F2937',
  },
  subGreeting: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#6B7280',
  },
  notificationButton: {
    padding: 8,
  },
  searchSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter_600SemiBold',
    color: '#1F2937',
    marginBottom: 12,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginRight: 8,
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
  },
  searchButton: {
    width: 48,
    height: 48,
    backgroundColor: '#3B82F6',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterTags: {
    flexDirection: 'row',
    gap: 8,
  },
  filterTag: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
  },
  filterTagText: {
    color: '#4B5563',
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
  },
  healthStatus: {
    padding: 16,
  },
  healthStatusHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  statusText: {
    color: '#10B981',
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
  },
  statusCards: {
    flexDirection: 'row',
    gap: 12,
  },
  statusCard: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  medicationCard: {
    backgroundColor: '#ECFDF5',
  },
  dietCard: {
    backgroundColor: '#EFF6FF',
  },
  statusCardTitle: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    color: '#1F2937',
  },
  statusCardValue: {
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    color: '#1F2937',
  },
  medications: {
    padding: 16,
  },
  medicationList: {
    gap: 12,
    marginBottom: 16,
  },
  medicationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
  },
  medicationIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  medicationTime: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    color: '#4B5563',
  },
  medicationButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#10B981',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
  },
});