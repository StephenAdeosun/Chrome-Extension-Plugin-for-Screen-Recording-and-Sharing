import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, Image, Text, Button } from '@chakra-ui/react';
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'
import '../styles/footer.css'
import Logo from '../assets/Footer_logo.svg';
const Footer = () => {
    return (
        <Box bgColor={'rgba(18, 11, 72, 1)'} w={'100%'} m={0} px={{ base: '0', md: '20' }} >
            <Flex justifyContent={'space-between'} py={{base:'4' , md:'24'}} flexDir={{ base: 'column', md: 'row' }}>
                <Box>
                    <Image src={Logo} alt="Logo" />
                </Box>
                <Box>
            <Flex justifyContent={'space-between'}  mt={{base:'12', md:'0'}} flexDir={{ base: 'column', md: 'row' }} gap={{base:'6', md:'36'}}>
                    
                <Box>

                    <UnorderedList color={'white'} listStyleType={'none'} >
                        <ListItem mb={4} fontWeight={'900'}>Menu</ListItem>
                        <ListItem mb={4}>Home</ListItem>
                        <ListItem mb={4}>Converter</ListItem>
                        <ListItem mb={4}>How it Works</ListItem>
                    </UnorderedList>
                </Box> 
                  <Box>

                    <UnorderedList color={'white'} listStyleType={'none'}>
                        <ListItem mb={4} fontWeight={'900'}>About us</ListItem>
                        <ListItem mb={4}>About</ListItem>
                        <ListItem mb={4}>Contact Us</ListItem>
                        <ListItem mb={4}>Privacy Policy</ListItem>
                    </UnorderedList>
                </Box>
                <Box>

                    <UnorderedList color={'white'} listStyleType={'none'}>
                        <ListItem mb={4} fontWeight={'900'}>Screen Record</ListItem>
                        <ListItem mb={4}>Browser Window</ListItem>
                        <ListItem mb={4}>Desktop</ListItem>
                        <ListItem mb={4}>Application</ListItem>
                    </UnorderedList>
                </Box>
                </Flex>
                </Box>
             
             


            </Flex>
        </Box>
    )
}

export default Footer;


