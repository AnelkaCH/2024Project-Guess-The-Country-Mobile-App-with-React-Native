import React from 'react';
import { SafeAreaProvider }
from 'react-native-safe-area-context';
import GuessTheCountry from './src/screens/GuessThatCountry';
const App = () => {
    return (
    <SafeAreaProvider>
        <GuessTheCountry/>
    </SafeAreaProvider>
    )
}
export default App;