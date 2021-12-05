import {
  Link as ChakraLink,
  Text,
  Box,
  Heading,
  VStack
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Footer } from '../components/Footer'
import banner from '../../public/cw-banner2.png'
import curupira from '../../public/cw-curupira2.png'
import naiara from '../../public/cw-naiara2.png'
import politician from '../../public/cw-politician2.png'
import Image from 'next/image'
import SplitScreenLeft from '../components/SplitScreenLeft'
import SplitScreenRight from '../components/SplitScreenRight'

const Index = () => (
  <Container height="450vh">
    <Box>
      <Heading
        lineHeight={1.1}
        fontWeight={800}
        fontSize={ { base: '6xl', sm: '4xl', lg: '6xl' } }>
        <Text
          as={'span'}
          position={'relative'}
          _after={ {
            content: "''",
            width: 'full',
            height: '20%',
            position: 'absolute',
            bottom: 3,
            left: 0,
            bg: 'cyan.400',
            zIndex: -1,
          } }>
          Climate Guardians
        </Text>
        <br />
        <Text as={'span'} color={'blue.400'}>
          Play-to-reduce CO2
        </Text>
      </Heading>
      <Image
        objectFit="cover"
        src={banner}
        alt="Let the games begin"
        priority={true}
        placeholder="blur"
      /> 
      </Box>    
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
        {/* <Image
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
        /> */}
    <DarkModeSwitch />
    <Footer>
      <Text>climateguardians.io</Text>
    </Footer>
  </Container>
)

export default Index
