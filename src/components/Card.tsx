import { 
  Center,
  Input,
  Box,
} from '@chakra-ui/react';

import { login } from '../services/login';
import { Button } from '../components/Button';

interface ICard {
  id: number,
  paragraph: string,
  details: string
}

export const Card = ({ id, paragraph, details }: ICard) => {
  return(
    <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <h1>Faça seu login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <Button onCLick={login}></Button>
          </Center>
        </Box>
      </Box>
  )
}