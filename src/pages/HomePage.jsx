import Navbar from '../components/navbar';
import HeroSection from '../components/hero.section';
import Feature from '../components/feature';
import HowItWorks from '../components/how.it.works';
import Footer from '../components/footer';
import BorderBg from '../components/borderBg';
import BorderBg2 from '../components/borderBg2.jsx';
import {Box, Text,Link} from '@chakra-ui/react';
import '../styles/hero.css'
const HomePage = () => {
return(
    <Box >
    <Box bgColor={'white'} className='container'   >
<Navbar/>
<BorderBg/>
<HeroSection/>
<BorderBg2/>

<Feature/>

<BorderBg2/>
<HowItWorks/>
</Box>
<Footer/>
</Box>
)

};

export default HomePage;