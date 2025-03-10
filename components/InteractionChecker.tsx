import { interactionDatabase } from '@/lib/data';
import { AlertTriangle, Search, X } from 'lucide-react-native';
import React, { useState, useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native';

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
      <View className="border rounded-lg border-gray-200 mx-4 mb-4 bg-white">
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
        {/* <TouchableOpacity
          className="p-4 border-t border-gray-200 bg-[#3B82F6] py-3 rounded-lg justify-center items-center mt-4"
          onPress={clearSearch}
        >
          <Text className="text-white text-center">Back to search</Text>
        </TouchableOpacity> */}
      </View>
    );
  };

  return (
    <View className="rounded-lg">
      <View className="p-4">
        {/* <Text className="text-sm text-gray-600 mb-2">Check if your medication(s) interacts with other medications or with specific foods.</Text> */}
        <View className="flex-row items-center relative">
          <View className="flex-row items-center flex-1 h-12 rounded-lg px-3 border border-gray-200 bg-white">
            <Search size={16} color="#6B7280" />
            <TextInput
              className="flex-1 h-12 pl-2"
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