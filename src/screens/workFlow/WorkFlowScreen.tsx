import React, { useState } from 'react';

import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';


import { Button, Box, PolygonShape, Line } from '../../components';
import { colors } from "../../utils/theme";

const WorkFlowScreen = ({ navigate, navigation }) => {


  

  const route = useRoute();
  const { userName, conditionName, actionName, value } = route.params;
  const [startValue, setStartValue] = useState(value)
  const [conditionValue, setConditionValue] = useState(conditionName)
  const [actionValue, setActionValue] = useState(actionName)
  const [edit, setEdit] = useState(false)
  const saveData = async () => {
    try {
      const data = { startValue: startValue, conditionName: conditionValue, actionName:actionValue,userName:userName};
      const jsonString = JSON.stringify(data);
  if(jsonString != null){
    await AsyncStorage.setItem('yourKey', jsonString);
    navigation.goBack();
  }
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Data saved successfully!',
        visibilityTime: 3000, // 3 seconds
        autoHide: true,
      });
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  const deleteData = async () => {
    try {
    await AsyncStorage.removeItem('yourKey');
    navigation.goBack();
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Data deleted successfully!',
        visibilityTime: 3000, // 3 seconds
        autoHide: true,
      });
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{userName}</Text>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollview}>
        <View style={styles.flowChart}>
          <Box value={startValue} setStartValue={setStartValue} borderRadius={100} bgColor={colors.lightGreenColor} editable={edit} />
          <Line customClass={styles.line} />
          <PolygonShape value={conditionValue} setConditionValue={setConditionValue} editable={edit} />
          <Line customClass={styles.line} />
          <Box value={actionValue} setStartValue={setActionValue} editable={edit} />
          <Line customClass={styles.line} />
          <Box value="End" borderRadius={100} bgColor={colors.lightGreenColor} editable={edit} />
        </View>
      </ScrollView>
      <View style={styles.buttonsWrapper}>
        <Button title="Edit" customClass={styles.editButton} onPress={() => setEdit(true)} />
        <Button title="Save" customClass={styles.saveButton} onPress={saveData} />
        <Button title="Delete" customClass={styles.deleteButton} onPress={deleteData}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: colors.whiteColor,
  },
  title: {
    fontSize: 24,
    lineHeight: 28,
    marginTop: 10,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.blackColor,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 15,
    left: 15,
    right: 15,
  },
  editButton: {
    width: 110,
    backgroundColor: colors.lightGreenColor,
  },
  deleteButton: {
    width: 110,
    backgroundColor: colors.lightRedColor,
  },
  saveButton:{
    width: 110,
    backgroundColor: colors.darkGreyColor,
  },
  line: {
    // transform: [{ rotate: '20deg' }],
    height: 40
  },
  flowChart: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  scrollview: {
    paddingBottom: 70,
  }
});

export default WorkFlowScreen;