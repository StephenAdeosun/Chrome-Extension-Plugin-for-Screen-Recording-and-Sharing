import { Box, Text, Divider, Image, FormControl, FormLabel, Input, Button, Flex } from '@chakra-ui/react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Google from '../assets/Google svg.svg';
import Facebook from '../assets/Facebook svg.svg';
import or from '../assets/or_divider.svg';
import logo from '../assets/Logo.svg';
import '../styles/hero.css'
const Login = () => {
  return (
    <Box bgColor={'white'}>
    <Box color={'black'} pt={{base:'0' , md:'6'}}  px={{base:'0' , md:'12'}}>
      <Link to="/"> 
      <Image src={logo}/>
      </Link>
    <Box w="100%"  maxW="400px" mx="auto" my={4} px={{base:'4' , md:'0'}}>

      <Text fontSize="3xl" className='hero-text' color={'black'} fontWeight={900} mb={4} textAlign={'center'} >
        Log in or Sign up
      </Text>
      <Text textAlign={'center'} fontWeight={200} color={'rgba(67, 67, 67, 1)'}
      >Join millions of others in sharing successful moves on <Text fontWeight={600} display={'inline'} className='span-text'>HelpMeOut.</Text></Text>
      <Flex justifyContent="space-between" my={8} flexDir={'column'}>
        <Button mb={4} border={'1px solid rgba(20, 20, 20, 1)'} w='100%' color={'black'}>
          <Image src={Google} mr={4} alt="Google" />
          Continue with Google
        </Button>
        <Button w='100%' border={'1px solid rgba(20, 20, 20, 1)'}  color={'black'}>
          <Image src={Facebook} mr={4} alt="Facebook" />

          Continue with Facebook
        </Button>
      </Flex>
     <Image src={or} alt="or" w='100%' mb={8} />
      <form >
        <FormControl id="email" mb={4}>
          <FormLabel fontWeight={600} color={'rgba(20, 20, 20, 1)'}>Email </FormLabel>
          <Input type="email"
          placeholder='Enter your email address'
          fontWeight={600}

          _placeholder={{color:'rgba(98, 98, 98, 1)'}}
          _focus={{border:'1px solid rgba(182, 179, 198, 1)',boxShadow:'none',outline:'none'}}
          _hover={{border:'1px solid rgba(182, 179, 198, 1)'}} 
          border={'1px solid rgba(182, 179, 198, 1)'}/>
        </FormControl>
        <FormControl id="password"  mb={4}>
          <FormLabel fontWeight={600} color={'rgba(20, 20, 20, 1)'}>Password</FormLabel>
          <Input type="password"
          placeholder='Enter your password'
          fontWeight={600}
          _placeholder={{color:'rgba(98, 98, 98, 1)'}}
          _focus={{border:'1px solid rgba(182, 179, 198, 1)',boxShadow:'none',outline:'none'}}
          _hover={{border:'1px solid rgba(182, 179, 198, 1)'}} 
          border={'1px solid rgba(182, 179, 198, 1)'}/>
        </FormControl>
        <Button type="submit" mt='4' _active={'none'} _hover={"none"} bgColor={'rgba(18, 11, 72, 1)'} w='100%' mb={4}>
          Sign Up
        </Button>
      </form>
   
    </Box>
    </Box>
    </Box>
  );
};

export default Login;