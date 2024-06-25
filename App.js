import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from './components/themeContext';
import TabNavigator from './navigation/TabsNavigator';

export default function App() {
  return (
    <>
    <ThemeProvider>
      <StatusBar style="dark" />
      <TabNavigator />
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
