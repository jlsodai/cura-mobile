import { ArrowRight, AlertTriangle, Search, X } from 'lucide-react-native';
import React, { useState, useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native';

// Define TypeScript interfaces
interface Interaction {
  name: string;
  type: 'food' | 'medication';
  severity: string;
  description: string;
  recommendation: string;
}

// Sample interaction database
const interactionDatabase: Interaction[] = [
  {
    name: "Grapefruit",
    type: "food",
    severity: "High Risk",
    description: "Can increase the concentration of Glipizide in your blood",
    recommendation: "Avoid grapefruit and grapefruit juice while taking Glipizide",
  },
  {
    name: "Alcohol",
    type: "food",
    severity: "High Risk",
    description: "Can cause low blood sugar when combined with diabetes medications",
    recommendation: "Avoid alcohol or consult your doctor for safe limits",
  },
  {
    name: "Salt",
    type: "food",
    severity: "Medium Risk",
    description: "Can affect blood pressure medications",
    recommendation: "Limit salt intake while on blood pressure medications",
  },
  {
    name: "NSAIDs (e.g., Ibuprofen)",
    type: "medication",
    severity: "Medium Risk",
    description: "May reduce effectiveness of some blood pressure medications",
    recommendation: "Consult your doctor before taking NSAIDs regularly",
  },
  {
    name: "Beta Blockers",
    type: "medication",
    severity: "High Risk",
    description: "Can interact with certain diabetes medications",
    recommendation: "Follow doctor's guidance if taking both medications",
  },
  {
    name: "Caffeine",
    type: "food",
    severity: "Low Risk",
    description: "May interact with certain anxiety medications",
    recommendation: "Monitor caffeine intake while on these medications",
  },
];

const InteractionChecker: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [suggestions, setSuggestions] = useState<Interaction[]>([]);
  const [selectedInteraction, setSelectedInteraction] = useState<Interaction | null>(null);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  // Maximum number of suggestions to show
  const MAX_SUGGESTIONS = 5;

  // Update suggestions when search text changes
  useEffect(() => {
    if (searchText.trim() === '') {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const filtered = interactionDatabase
      .filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()))
      .slice(0, MAX_SUGGESTIONS); // Limit to top 10 results for performance

    setSuggestions(filtered);
    setShowSuggestions(true);
  }, [searchText]);

  const handleSelectItem = (item: Interaction) => {
    setSelectedInteraction(item);
    setSearchText(item.name);
    setShowSuggestions(false);
    Keyboard.dismiss();
  };

  const clearSearch = () => {
    setSearchText('');
    setSuggestions([]);
    setSelectedInteraction(null);
    setShowSuggestions(false);
  };

  const getSeverityColor = (severity: string): string => {
    if (severity.includes('High')) return 'text-red-600';
    if (severity.includes('Medium')) return 'text-orange-500';
    return 'text-yellow-500';
  };

  // Render suggestions without using FlatList
  const renderSuggestions = () => {
    if (!showSuggestions || suggestions.length === 0) {
      return null;
    }

    return (
      <View className="border rounded-lg border-gray-200 mx-4 mb-4">
        {suggestions.map(item => (
          <TouchableOpacity
            key={item.name}
            className="flex-row justify-between items-center py-3 px-4 border-b border-gray-200"
            onPress={() => handleSelectItem(item)}
          >
            <Text className="text-base font-medium">{item.name}</Text>
            <View className="bg-gray-100 px-3 py-1 rounded-full">
              <Text className="text-gray-500 text-sm">{item.type}</Text>
            </View>
          </TouchableOpacity>
        ))}
        {suggestions.length === MAX_SUGGESTIONS && (
          <Text className="py-2 px-4 italic text-xs text-gray-500">
            Showing top {MAX_SUGGESTIONS} results. Refine your search for more specific results.
          </Text>
        )}
      </View>
    );
  };

  const renderNoResults = () => {
    if (showSuggestions && suggestions.length === 0 && searchText.trim() !== '') {
      return (
        <View className="border-t border-gray-200 p-4">
          <Text className="text-center py-2 text-gray-500">No interactions found</Text>
        </View>
      );
    }
    return null;
  };

  const renderInteractionDetails = () => {
    if (!selectedInteraction) {
      return null;
    }

    return (
      <View className="mx-4 rounded-lg mb-4">
        <View className="border border-l-4 border-red-100 border-l-red-500 p-4 rounded-lg bg-red-50">
          <View className="flex-row items-center mb-2">
            <View className="bg-red-100 w-8 h-8 rounded-full justify-center items-center mr-2">
              <AlertTriangle size={18} color="#DC2626" />
            </View>
            <Text className="text-lg font-bold">{selectedInteraction.name}</Text>
            <Text className={`ml-2 ${getSeverityColor(selectedInteraction.severity)}`}>
              {selectedInteraction.severity}
            </Text>
          </View>
          <Text className="text-gray-600 mb-2">{selectedInteraction.description}</Text>
          <View>
            <Text className="font-bold text-gray-700">Recommendation:</Text>
            <Text className="text-gray-600">{selectedInteraction.recommendation}</Text>
          </View>
        </View>
        <TouchableOpacity
          className="p-4 border-t border-gray-200"
          onPress={clearSearch}
        >
          <Text className="text-blue-500 text-center">Back to search</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View className="rounded-lg mx-4 mb-4 border border-gray-200">
      <View className="p-4">
        <Text className="text-sm text-gray-600 mb-2">Check if your medication(s) interacts with other medications or with specific foods.</Text>
        <View className="flex-row items-center relative">
          <View className="flex-row items-center flex-1 h-12 rounded-lg px-3 mr-2 border border-gray-200">
            <Search size={16} color="#6B7280" />
            <TextInput
              className="flex-1 h-10 pl-2"
              placeholder="Search medication or food..."
              placeholderTextColor="#6B7280"
              value={searchText}
              onChangeText={setSearchText}
              autoCapitalize="none"
            />
            {searchText.length > 0 && (
              <TouchableOpacity onPress={clearSearch} className="p-1">
                <X size={16} color="#6B7280" />
              </TouchableOpacity>
            )}
          </View>
          {/* <TouchableOpacity
            className="w-10 h-10 bg-blue-500 rounded-lg justify-center items-center"
            onPress={() => setShowSuggestions(true)}
          >
            <ArrowRight size={18} color="#FFFFFF" />
          </TouchableOpacity> */}
        </View>
      </View>

      {renderSuggestions()}
      {renderNoResults()}
      {renderInteractionDetails()}
    </View>
  );
};

export default InteractionChecker;