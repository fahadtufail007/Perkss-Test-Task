import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { colors } from '../../utils/theme';

interface props {
  title: string,
}

const Listing = ({ title }: props) => {

  return (
    <View style={styles.listContainer}>
      <Text>
        <Text numberOfLines={1} style={styles.name}>{title}</Text>
      </Text>
      <View style={styles.customWrapper}>
        <TouchableOpacity>
          <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.edit, styles.delete]}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: colors.whiteColor,
    borderWidth: 1,
    borderColor: colors.darkGreyColor,
    borderRadius: 10,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  customWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 22,
    width: 250,
    color: colors.blackColor,
  },
  delete: {
    color: colors.lightRedColor,
  },
  edit: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '500',
    color: colors.blueColor,
  }
});

export default Listing;