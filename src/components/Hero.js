import { Container, Stack, Flex, Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import Blob from './Blob';
import Image from 'next/image'
import banner from '../../public/cw-banner.png'

const Hero = () => {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={ { base: 8, md: 10 } }
        py={ { base: 20, md: 28 } }
        direction={ { base: 'column', md: 'row' } }>
        <Stack flex={1} spacing={ { base: 5, md: 10 } }>
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
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('cyan.50', 'cyan.400')}
          />
          <Box
            position={'relative'}
            height={'240px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={banner}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

export default Hero;