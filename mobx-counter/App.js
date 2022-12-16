import { StyleSheet, Text, View, Button } from 'react-native';
import SizeStore from './store/sizeStore';
import ClickStore from './store/clickStore';
import { observer } from 'mobx-react-lite';


const sizeStore = SizeStore;
const clickStore = ClickStore;
export default observer(function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', borderWidth: 1, borderRadius: 25, margin: 50, justifyContent: 'space-around'}}>
      <Text style = {{fontSize: sizeStore.fontSize, padding: 25, textAlign: 'center', textAlignVertical: 'center'}}>Изменяйте размер шрифта с помощью кнопок</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Button style={{margin: 25}} onPress={() => {sizeStore.add(); clickStore.addClick()}} title="+" />
          <Text style={{textAlign: 'center', textAlignVertical: 'center'}}>{sizeStore.fontSize}</Text>
          <Button style={{margin: 25}} onPress={() => {sizeStore.sub(); clickStore.addClick()}} title="-" />
      </View>
      <Text style={{textAlign: 'center', textAlignVertical: 'center'}}>Количество кликов: {clickStore.clickCounter}</Text>
  </View>
  );
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
