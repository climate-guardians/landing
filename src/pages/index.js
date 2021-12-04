import {
  Link as ChakraLink,
  Text,
  Code,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  VStack
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon, Box } from '@chakra-ui/icons'
import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Footer } from '../components/Footer'
import Hero from '../components/Hero'
import curupira from '../../public/cw-curupira.png'
import naiara from '../../public/cw-naiara.png'
import naiaraPlants from '../../public/naiara-plants.png'
import politician from '../../public/cw-politician.png'
import Image from 'next/image'
import SplitScreenLeft from '../components/SplitScreenLeft'
import SplitScreenRight from '../components/SplitScreenRight'

const Index = () => (
  <Container height="450vh">
      <Hero />
      <VStack>
      <SplitScreenLeft 
        img={naiara}
        title='Naiara'
        subTitle='Village Girl'
        text='A girl from a nearby village, fighting to protect the Amazon 
        she loves so much. Has an affinity to plants most people consider weeds.
        Naiara stops bulldozers in their tracks with her Ivy Trap.'
      />
      <SplitScreenRight 
        img={curupira}
        title='Curupira'
        subTitle='Amazon Protector'
        text="Curupira is the mythological protector of the Amazon. His battlecry
        gathers the animals of the forest for help. Together they defend the Amazon
        against evil corporations. Lumberjacks tremble with fear when they hear Curupira's
        battlecry!"
      />
      <SplitScreenLeft 
        img={politician}
        title='Bolso'
        subTitle='Corupt Politician'
        text='Land grabbing villain who only loves the smell of money. His goal is 
        simple but evil: destroy the Amazon and make as much money as humanly 
        possible. His evil corporations are a force to be reckoned with.'
      />
      </VStack>
      {/* <Stack direction="row">
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
      </Stack> */}
    <DarkModeSwitch />
    <Footer>
      <Text>climateguardians.io</Text>
    </Footer>
  </Container>
)

export default Index
