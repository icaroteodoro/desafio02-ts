import { ChakraProvider } from '@chakra-ui/react'
import { Card } from './components/Card';
import { Header } from './components/Header/Header';


function App() {
  return (
    <ChakraProvider>
      <Header></Header>
        <Card id={1} paragraph='Ícaro Teodoro' details='Novo detalhe'></Card>
    </ChakraProvider>
  );
}

export default App;
