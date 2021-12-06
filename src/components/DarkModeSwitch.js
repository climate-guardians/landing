import { useColorMode, Switch, Flex, Button, IconButton } from '@chakra-ui/react'
import { useState } from 'react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Link from 'next/link'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [display, changeDisplay] = useState('none')

  return (
    <Flex>
      <Flex
        position="absolute"
        top="1rem"
        right="1rem"
        align="center">

        {/*Desktop */}
        <Flex
          display={['none', 'none', 'flex', 'flex']}
          >
          <Link href="/about" passHref>
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%" >
              About
            </Button>
          </Link>

          <Link href="https://climateguardians.medium.com" passHref>
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              Blog
            </Button>
          </Link>

          <Link href="https://climate-warriors-app.vercel.app/welcome" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Enter App
            </Button>
          </Link>
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay('flex')}
          display={['flex', 'flex', 'none', 'none']}
        />
        <Switch
        color="green"
        isChecked={isDark}
        onChange={toggleColorMode}
        />
      </Flex>

      <Flex
        w="100vw"
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflow="auto"
        flexDir="column"
        display={display}
      >
        <Flex justify="flex-end">
          <IconButton 
            mt={2}
            mr={2}
            aria-label="Close Menu"
            size="lg"
            icon={
              <CloseIcon />
            }
            onClick={() => changeDisplay('none')}
          />
        </Flex>
        
        <Flex
          flexDir="column"
          align="center"
        >
         
          <Link href="/about" passHref>
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              About
            </Button>
          </Link>

          <Link href="https://climateguardians.medium.com" passHref>
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              Blog
            </Button>
          </Link>

          <Link href="https://climate-warriors-app.vercel.app/welcome" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Enter App
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}
