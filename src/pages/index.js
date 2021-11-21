import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Stack
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon, Box } from '@chakra-ui/icons'
import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Footer } from '../components/Footer'
import Hero from '../components/Hero'
import curupira from '../../public/cw-curupira.png'
import naiara from '../../public/cw-naiara.png'
import politician from '../../public/cw-politician.png'
import Image from 'next/image'

const Index = () => (

  <Container height="150vh">
    <br/>
      <Text>
         <Code>Climate Guardians Placeholder</Code> 
      </Text>
      <Hero />
      <Stack direction="row">
        <Image
          boxSize="150px"
          objectFit="cover"
          src={politician}
          alt="Corupt Politician"
          priority={true}
          placeholder="blur"
        />   
        <Image
          boxSize="150px"
          objectFit="cover"
          src={curupira}
          alt="Curupira"
          priority={true}
          placeholder="blur"
        />
        <Image
          boxSize="150px"
          objectFit="cover"
          src={naiara}
          alt="Naiara"
          priority={true}
          placeholder="blur"
        />
      </Stack>
    <DarkModeSwitch />
    <Footer>
      <Text>climateguardians.io</Text>
    </Footer>
  </Container>
)

export default Index
