import {
    Box, Image, Badge, Grid, GridItem

  } from '@chakra-ui/react';
import { StarIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function AirbnbCard() {
    const navigate = useNavigate();
    const property = {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'Rear view of modern home with pool',
      brand: 'Laneige',
      title: 'Waterbank Blue Discovery Duo Kit',
      formattedPrice: '$30.00',
      reviewCount: 34,
      rating: 4,
    }
  
    return (
        
    <Grid  gap={100}>
        <GridItem>
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' 
            onClick={() => {
                  navigate(`/101`);
                }}>
            
            <Image src={property.imageUrl} alt={property.imageAlt} />

            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='red'>
                    New
                </Badge>
                <Box
                    color='gray.500'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='xs'
                    textTransform='uppercase'
                    ml='2'
                >
                    {property.brand}
                </Box>
                </Box>

                <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
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
            </GridItem>
      </Grid>
    )
  }
  export default AirbnbCard;