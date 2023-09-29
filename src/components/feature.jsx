import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, Image, Text, Button } from '@chakra-ui/react';
import '../styles/feature.css'
import simpleRecord from '../assets/simpleRecord.svg';
import VideoRepo from '../assets/Video Repository.svg';
import Revisit from '../assets/Revisit.svg';
import Share from '../assets/Easy2Share.svg';

const Feature = () => {
    return (
        <Box mt={24} px={{base:"4",md:'4', lg:'20'}} mb={24}>
            <Box  bgColor={'white'}>
                <Text fontWeight={500} textAlign={'center'} fontSize={'28px'} color={'black'} className='feature-heading'>
                    Features
                </Text>
                <Text fontWeight={300} textAlign={'center'} fontSize={'14px'} color={'rgba(97, 97, 99, 1)'} className='feature-text'>
                    Key Highlights of Our Extension
                </Text>
            </Box>

            <Box mt={16}>
                <Flex justifyContent={'space-between'} flexDir={{base:'column', md:'row'}} gap={'4'} >
                    <Box order={{base:'1', md:'0'}} >
                        <Flex gap={'4'} flexDir={'column'} alignItems={'top'} w='100%'>
                            <Flex gap={'4'} alignItems={'top'} w='100%'>
                                <Image src={simpleRecord} alt="Logo" mb={12} />
                                <Box>
                                    <Text fontWeight={600} mb={2} fontSize={'22px'} color={'black'} className='record-feature'>Simple Screen Recording</Text>
                                    <Text fontWeight={200} fontSize={'18px'} color={'rgba(97, 97, 99, 1)'} className='feature-text'>
                                        Effortless screen recording for everyone. Record with ease, no tech expertise required.
                                    </Text>
                                </Box>
                            </Flex>
                            <Flex gap={'4'} alignItems={'top'} w='80%'>
                                <Image src={Share} alt="Logo" mb={12} />
                                <Box>
                                    <Text fontWeight={600} mb={2} fontSize={'22px'} color={'black'} className='record-feature'>Easy-to-Share URL</Text>
                                    <Text fontWeight={200} fontSize={'18px'} color={'rgba(97, 97, 99, 1)'} className='feature-text'>
                                        Share your recordings instantly with a single link. No attachments, no downloads.
                                    </Text>
                                </Box>
                            </Flex>
                            <Flex gap={'4'} alignItems={'top'} w='80%'>
                                <Image src={Revisit} alt="Logo" mb={12} />
                                <Box>
                                    <Text fontWeight={600} mb={2} fontSize={'22px'} color={'black'} className='record-feature'>Revisit Recordings</Text>
                                    <Text fontWeight={200} fontSize={'18px'} color={'rgba(97, 97, 99, 1)'} className='feature-text'>
                                        Access and review your past content effortlessly. Your recordings, always at your fingertips.
                                    </Text>
                                </Box>
                            </Flex>
                        </Flex>
                    </Box>
                    <Box order={{base:'0', md:'1'}}>

                        <Image src={VideoRepo} alt="Logo" w={'100%'} />
                    </Box>


                </Flex>
            </Box>
        </Box>
    )
}
export default Feature;