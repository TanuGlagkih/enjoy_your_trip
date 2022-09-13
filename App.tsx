import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Preloader } from './assets/preloader';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import { persistor, store } from './services/configureStore';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return <Preloader />;
  } else {
    return (
      <ReduxProvider store={store}>
        <SafeAreaProvider>

          <PersistGate loading={null} persistor={persistor}>
            <Navigation />
            <StatusBar />
          </PersistGate>
        </SafeAreaProvider>
      </ReduxProvider>

    );
  }
}

