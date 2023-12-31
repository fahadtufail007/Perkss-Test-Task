import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { colors } from '../../utils/theme';

interface props {
  placeholder: string,
  value: any,
  onChangeText: any,
}

const Input = ({ placeholder, value, onChangeText }: props) => {
  return (
    <TextInput style={styles.input} placeholder={placeholder} inputMode="text" placeholderTextColor={colors.darkGreyColor} value={value} onChangeText={onChangeText} />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.greyColor,
    color: colors.blackColor,
    height: 56,
    padding: 12,
    borderRadius: 12,
    fontSize: 18,
    lineHeight: 24,
    marginTop: 20,
    fontWeight: '500',
  }
});

export default Input;