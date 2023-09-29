import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, Image, Text, Button } from '@chakra-ui/react';
import how1 from '../assets/how_it_works1.svg';
import how2 from '../assets/how_it_works2.svg';
import how3 from '../assets/how_it_works3.svg';
import how from '../assets/how_it_work.svg';
const HowItWorks = () => {
return(
<Box bgColor={'white'} px={{base:"4",md:'4', lg:'20'}} py={24}>
    <Text fontWeight={500} textAlign={'center'} fontSize={'28px'} color={'black'} className='feature-heading'>
                  How it works 
                </Text>

                <Box>
                    <Flex gap={4} flexDir={{base:'column', md:'row'}} alignItems={'center'} justifyContent={'space-between'} mt={12}>
                        <Box textAlign={'center'}>
                            <Image src={how1} alt="Logo" m={'auto'} w='15%'/>
                            <Text fontWeight={600} mb={2}  mt={8} fontSize={'22px'} color={'black'} className='record-feature'>Record screen</Text>
                            <Text fontWeight={200} mb={4} fontSize={'18px'} color={'rgba(97, 97, 99, 1)'} className='feature-text'>
                            Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.
                            </Text>
                            <Image src={how} alt="Logo" m={'auto'} />
                        </Box>
                        <Box textAlign={'center'}>
                            <Image src={how2} alt="Logo" m={'auto'} w='15%'/>
                            <Text fontWeight={600} mb={2}  mt={8} fontSize={'22px'} color={'black'} className='record-feature'>Share Your Recording</Text>
                            <Text fontWeight={200} mb={4} fontSize={'18px'} color={'rgba(97, 97, 99, 1)'} className='feature-text'>
                            We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.
                            </Text>
                            <Image src={how} alt="Logo" m={'auto'} />
                        </Box>
                        <Box textAlign={'center'}>
                            <Image src={how3} alt="Logo"  m={'auto'} w='15%'/>
                            <Text fontWeight={600} mb={2} mt={8} fontSize={'22px'} color={'black'} className='record-feature'>Learn Effortlessly</Text>
                            <Text fontWeight={200}mb={4} fontSize={'18px'} color={'rgba(97, 97, 99, 1)'} className='feature-text'>
                            Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.
                            </Text>
                            <Image src={how} alt="Logo" m={'auto'} />
                        </Box>
                    </Flex>
                </Box>
</Box>
)

};

export default HowItWorks;
