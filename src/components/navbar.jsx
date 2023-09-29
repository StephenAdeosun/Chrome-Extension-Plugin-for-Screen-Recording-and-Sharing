import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Image, Text, Button, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Logo from '../assets/Logo.svg';
import '../styles/navbar.css';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box bgColor={'white'} px={{base:"4",md:'4', lg:'20'}}>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Box>
          <Link to="/">
          <Image src={Logo} alt="Logo" />
          </Link>
        </Box>
        {isMobile ? (
          <>
            <IconButton
              aria-label="Open menu"
              icon={<HamburgerIcon />}
              size="lg"
              variant="ghost"
              color="black"
              onClick={onOpen}
            />
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                  <Flex flexDirection="column" alignItems="center">
                    <Link to="/">
                      <Text fontWeight={'700'} mb={4}>
                        Features
                      </Text>
                    </Link>
                    <Link to="/about">
                      <Text fontWeight={'700'} mb={4}>
                        How it works
                      </Text>
                    </Link>
                    <Link to="/signup">
                    <Button color={'black'} fontWeight={'700'} mb={4}>
                      Get Started
                    </Button>
                    </Link>
                  </Flex>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          <Box color={'black'}>
            <Flex justifyContent={'space-around'} gap={'4'} alignItems={'center'}>
              <Link to="/">
                <Text fontWeight={'700'}>Features</Text>
              </Link>
              <Link to="/about">
                <Text fontWeight={'700'}>How it works</Text>
              </Link>
            </Flex>
          </Box>
        )}
        {!isMobile && (
          <Box>
              <Link to="/signup">
                    <Button color={'black'} fontWeight={'700'} >
                      Get Started
                    </Button>
                    </Link>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;