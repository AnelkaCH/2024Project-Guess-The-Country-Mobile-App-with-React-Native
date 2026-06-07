import React from 'react';
import { SafeAreaProvider }
from 'react-native-safe-area-context';
import GuessThatCountry from './src/screens/GuessThatCountry';
const App = () => {
    return (
    <SafeAreaProvider>
        <GuessThatCountry/>
    </SafeAreaProvider>
    )
}
export default App;