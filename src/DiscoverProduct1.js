import {
    ChakraProvider, Badge,
    Box, Image,
    Text,
    Link,
    VStack, HStack,
    Code,
    Grid,
    GridItem,
    theme,
    Button,
    Spacer,
  } from '@chakra-ui/react';
  import { StarIcon } from "@chakra-ui/icons";

import image1  from './ImgProduct1.webp';
import image2  from './ImgProduct1b.webp';
import image3  from './ImgProduct1c.webp';
import { useNavigate } from "react-router-dom";
function App() {
    
    const navigate = useNavigate();
    const property = {
      brand: 'LANEIGE',
      title: 'Waterbank Blue Discovery Duo Kit',
      formattedPrice: '$30.00',
      reviewCount: 34,
      rating: 4,
    }
    return (      
        <Box textAlign="center" fontSize="xl">
        <Grid
          templateAreas={`"left right"
                            `}
          gridTemplateColumns={"1fr 1fr"}
          h="100vh"
          fontWeight="bold"
        >
            <GridItem pl="2" bg="pink.200" area={"left"}>
                <VStack spacing={8} align='center' verticalAlign={'center'}>
                <Spacer/>
                <Box maxW='xl' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                  <Image src={image1} />
                </Box>
                <HStack>
                <Box maxW='2xs' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                  <Image src={image2} />
                </Box>
                <Box maxW='2xs' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                  <Image src={image3} />
                </Box>
                </HStack>
                <Spacer/>
                </VStack>
            </GridItem>
            <GridItem pl="2" bg="pink.100" area={"right"} borderWidth='thick' borderColor={'pink.100'}>
                <VStack spacing={8} align='stretch'>
                <Spacer/>
                <Text fontSize='5xl'>{property.brand}</Text>
                <Box display='flex' alignItems='baseline'>
                <Box
                    color='gray.500'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='lg'
                    textTransform='uppercase'
                    ml='2'
                >
                    Popular
                </Box>
                </Box>

                <Box
                mt='1'
                fontSize={'4xl'}
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
                textAlign = 'center'
                >
                {property.title}
                </Box>

                <Box>
                {property.formattedPrice}
                </Box>

                <Box display='flex' mt='2' alignItems='center'>
                {Array(5)
                    .fill('')
                    .map((_, i) => (
                    <StarIcon
                        key={i}
                        color={i < property.rating ? 'pink.500' : 'gray.300'}
                    />
                    ))}
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                    {property.reviewCount} reviews
                </Box>
                </Box>
                <Button colorScheme='pink'>Add to cart</Button>
                <Box
                mt='1'
                fontSize={'xl'}
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                textAlign = 'left'
                borderWidth={'thick'}
                >
                DESCRIPTION
                <p/>
                Skin Type: Combination, Dry, Normal, Oily, Sensitive
                <p/>
                Skin Concerns: Dryness, Dullness, Firmness & Elasticity, Uneven Skin Tone
                <p/>
                Formulation: Cream, Liquid
                <p/>
                Skincare By Age: 20s, 30s, 40s, 50+, Under 20
                <p/>
                What it is:A nourishing and hydrating duo that replenishes the skin with moisture and boosts firmness to reveal a lively look.
                <p/>
                What it does:This cream and serum duo provides repair and moisturising effects from deep within with Blue Hyaluronic Acid - a micro low molecular weight hyaluronic acid that is 2,000 times smaller compared to regular hyaluronic acid. This duo is suitable for all skin types, even sensitive skin.
                <p/>
                What it includes:
                <p/>
                Water Bank Blue Hyaluronic Cream Moisturizer 20ml
                <p/>
                Water Bank Blue HA Serum 10ml
                </Box>
                                
                <Box
                mt='1'
                fontSize={'xl'}
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                textAlign = 'left'
                >
                HOW TO<p/>
Apply the serum evenly to the face morning and evening cleansing and toning.<p/>
Next, apply the moisturiser evenly to the face.
                </Box>

                <Box
                mt='1'
                fontSize={'md'}
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                textAlign = 'left'
                >
                INGREDIENTS<p/>
Product Claims: Anti-oxidants, Hyaluronic Acid, Oil-free, Paraben-free, Sulphate-free, Vitamins
<p/>
Water Bank Blue Hyaluronic Cream Moisturizer: Water / Aqua / Eau, Butylene Glycol, Glycerin, Squalanesucrose Polystearate, Pentaerythrityl Tetraethylhexanoate, Methyl Trimethicone, Dibutyl Adipate, 1, 2-Hexanediol, Glyceryl Stearate, Polyglyceryl-3 Methylglucose Distearate, Bis-Hydroxyethoxypropyl Dimethicone,
 Stearyl Dimethicone, Caprylic/Capric/Myristic/Stearic Triglyceride, Stearic Acid, Palmitic Acid, Hydrogenated Polyisobutene, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Cetyl Alcohol, Propanediol, Octadecene, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Fragrance / Parfum, Xanthan Gum, Glyceryl Caprylate, Dextrin, Tromethamine, Ethylhexylglycerin, Disodium Edta, Sorbitan Isostearate, Allantoin, Hydrolyzed Hyaluronic Acid, Beta-Glucan, Ceramide Np, Myristic Acid, Arachidic Acid, Lactobacillus Ferment Lysate, Tocopherol, Undaria Pinnatifida Extract
 <p/>
Water Bank Blue Hyaluronic Serum: Water / Aqua / Eau, Butylene Glycol, Dipropylene Glycol, Glycerin, Squalane, 1, 2-Hexanediol, Ammonium Acryloyldimethyltaurate/Vp Copolymer, Propanediol, Carbomer, Cetearyl Alcohol, Tromethamine, Polyglyceryl-3 Methylglucose Distearate, Dextrin, Hydrogenated Lecithin, Ethylhexylglycerin, Fragrance / Parfum, Glyceryl Stearate Citrate, Disodium Edta, Betaine, Hydrolyzed Hyaluronic Acid, Beta-Glucan, Xylitylglucoside, Anhydroxylitol, Xylitol, Lactobacillus Ferment Lysate, Glucose, Tocopherol, Magnesium Chloride
, Tetradecyl Aminobutyroylvalylaminobutyric Urea Trifluoroacetate, Undaria Pinnatifida Extract
                </Box>

                </VStack>
            </GridItem>
        </Grid>
      </Box>
    );}
    
    
    
    export default App;