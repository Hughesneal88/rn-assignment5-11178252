import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './navigation/TabsNavigator';
import { ThemeProvider } from './components/themeContext';

export default function App() {
  return (
    <>
    <ThemeProvider>
      <StatusBar style="dark" />
      <StackNavigator />
    </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
