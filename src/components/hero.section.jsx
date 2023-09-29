import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, Image, Text, Button } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import hero_img from '../assets/hero-img.jpg';
import '../styles/hero.css'
import { ArrowForwardIcon } from '@chakra-ui/icons';

const HeroSection = () => {
    return (
        <Box bgColor={'white'} mt={24} px={{base:"4",md:'4', lg:'20'}} mb={24}>
            <Flex alignItems={'center'}flexDir={{base:'column', md:'row'}}justifyContent={'space-between'}gap={4}>
                <Box w={{base:'100%', md:'60%'}}>
                    <Text fontWeight={900} fontSize={'48px'} color={'black'} className='hero-heading'>
                        Show Them
                        <br />
                        Don’t Just Tell
                    </Text>

                    <Text fontWeight={300} fontSize={'18px'} color={'rgba(0, 0, 0, 0.75)'} className='hero-text'>
                        Help your friends and loved ones by creating and sending videos on how to get things done on a website.
                    </Text>
                <Link to='/'><Button className='install-btn' mt={8} py={6} px={4} color={'white'} bgColor={'black'} _hover={{bgColor:'black'}}>Install HelpMeOut
                <ArrowForwardIcon alignItems={'center'} ml={'2'} />
                </Button></Link>    
                </Box>

                <Box>
                    <Image src={hero_img} w='100%'/>
                </Box>
            </Flex>
        </Box>
    )
}

export default HeroSection;