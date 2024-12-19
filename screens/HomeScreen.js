import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Header from '../components/Header';
import ViewScreen from './ViewScreen';
import Movements from '../components/Movement.s';

const list = [
    {
        id: 1,
        descricao: 'Boleto conta luz',
        valor: '252,25',
        date: '14/12/2024',
        type: 0 //despesas
    },
    {
        id: 2,
        descricao: 'Dividendos',
        valor: '325,50',
        date: '18/11/2024',
        type: 1 //receitas
    },
    {
        id: 3,
        descricao: 'Pix família',
        valor: '125,00',
        date: '30/11/2024',
        tipo: 1 //receitas
    }
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header nome="Wagner Vieira"/>
      <ViewScreen saldo="9.000,00" gastos="-527,00"/>

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem ={ ({ item }) => <Movements data={item} /> }
      />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',    
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
});
