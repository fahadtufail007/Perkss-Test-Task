import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import { Button, Input, } from '../../components';
import SelectInput from '../../components/inputs/SelectInput';
import { colors } from "../../utils/theme";

interface props {
  name: any,
  setName: any,
  open: any,
  setOpen: any,
  value: any,
  setValue: any,
  items: any,
  setItems: any,
  setTrueAction: any,
  trueAction: any,
  setTrueCondition: any,
  trueCondition: any
}
const HomeScreen = ({ name, setName, open, setOpen, value, setValue, items, setItems, setTrueAction, trueAction, setTrueCondition, trueCondition, setCondotionName, conditionName, actionName, setActionName }: props) => {
  const [itemsAync, setItemAync] = useState([])
  const retrieveData = async () => {
    try {
      const jsonString = await AsyncStorage.getItem('yourKey');
      if (jsonString !== null) {
        const data = JSON.parse(jsonString);
        setItemAync(data)
      } else {
        setItemAync([])
        setActionName('')
        setCondotionName('')
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      retrieveData();
    }, [])
  );

  const navigation = useNavigation();
  const handleNavigate = () => {
    if (actionName && conditionName !== '') {
      setItems([...items, { label: actionName != '' ? actionName : itemsAync.actionName, value: actionName != '' ? actionName : itemsAync.actionName }, { label: conditionName != '' ? conditionName : itemsAync.conditionName, value: conditionName != '' ? conditionName : itemsAync.conditionName }]);
    }
    if ((name && actionName && conditionName && value != '') || (itemsAync.actionName && itemsAync.conditionName != '')) {
      navigation.navigate('workFlow', { userName: name != '' ? name : itemsAync.userName, actionName: actionName != '' ? actionName : itemsAync.actionName, conditionName: conditionName != '' ? conditionName : itemsAync.conditionName, value: value });
    } else {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Please fill all the fields',
        visibilityTime: 3000, // 3 seconds
        autoHide: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Input placeholder='Workflow Name'
        value={itemsAync.userName}
        onChangeText={(text) => setName(text)}
      />
      <SelectInput open={open} setOpen={setOpen} value={value} setValue={setValue} items={items} setItems={setItems} />
      <View style={styles.buttonsWrapper}>
        <Button title="Action" customClass={styles.button} onPress={() => {
          setTrueAction(true)
          setTrueCondition(false)
        }} />
        <Button title="Condtional" customClass={styles.ConditionButton} onPress={() => {
          setTrueCondition(true)
          setTrueAction(false)
        }} />
      </View>
      {
        trueAction ?
          <Input placeholder='Add Action Node' value={actionName != '' ? actionName : itemsAync.actionName} onChangeText={(text) => setActionName(text)} /> : <View />
      }
      {
        trueCondition ?
          <Input placeholder='Add Conditional Node' value={conditionName != '' ? conditionName : itemsAync.conditionName} onChangeText={(text) => setCondotionName(text)} /> : <View />
      }
      <Button title="Done" customClass={styles.doneButton} onPress={handleNavigate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
    padding: 15,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25
  },
  button: {
    width: 150,
    backgroundColor: colors.lightGreenColor,
  },
  ConditionButton: {
    backgroundColor: colors.lightRedColor,
    width: 150,
  },
  doneButton: {
    position: 'absolute',
    bottom: 20,
    left: 15,
    right: 15,
  }
});

export default HomeScreen;