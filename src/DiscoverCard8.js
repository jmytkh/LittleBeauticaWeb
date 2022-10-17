import {
    Box, Image, Badge, Grid, GridItem

  } from '@chakra-ui/react';
import { StarIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import image  from './ImgProduct8.webp';

function AirbnbCard() {
    const navigate = useNavigate();
    const property = {
      imageUrl: image,
      imageAlt: 'Image here',
      brand: 'SHISEIDO',
      title: 'Ultimune Essential Defense Trio',
      formattedPrice: '$45.00',
      reviewCount: 34,
      rating: 5,
    }
  
    return (

            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' 
            onClick={() => {navigate(`/101`); }}>
            
            <Image src={property.imageUrl} alt={property.imageAlt} />

            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='8' colorScheme='blue' fontSize={'md'}>
                    {property.brand}
                </Badge>
                <Box
                    color='pink.500'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='lg'
                    textTransform='uppercase'
                    ml='2'
                >
                    Premium
                </Box>
                </Box>

                <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
                textAlign = 'left'
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
            </Box>
            </Box>

    )
  }
  export default AirbnbCard;