import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { Listing } from '../../components';
import { colors } from "../../utils/theme";

const WorkFlowListScreen = ({ ListingData }) => {

  return (
    <View style={styles.container}>
      <FlatList
        data={ListingData}
        renderItem={({ item }) => (
          <Listing
            title={item.title}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatlist}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: colors.whiteColor,
  },
  flatlist: {
    gap: 15,
  },
});

export default WorkFlowListScreen;