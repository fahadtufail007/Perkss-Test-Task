import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from '../../utils/theme';

const Line = ({ customClass }) => {
  return (
    <View >
      <View style={[styles.line, { ...customClass }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    minHeight: 'auto',
    backgroundColor: colors.blackColor,
    width: 1,
  }
});

export default Line;