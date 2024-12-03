import './App.css';
import Layout from './Layout';
import Homepage from './pages/Homepage';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App dark:bg-gray-900 min-h-screen">
        <Layout>
          <Homepage />
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
