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

import image1  from './ImgProduct2.webp';
import image2  from './ImgProduct2b.webp';
import image3  from './ImgProduct2c.webp';
import { useNavigate } from "react-router-dom";
function App() {
    
    const navigate = useNavigate();
    const property = {
      brand: 'GLOW RECIPE',
      title: 'Fruit Babies Bestsellers Kit',
      formattedPrice: '$41.00',
      reviewCount: 84,
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
                    color='pink.500'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='lg'
                    textTransform='uppercase'
                    ml='2'
                >
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
                Function: Moisturise, Treatment
                <p/>
Skin Type: Combination, Dry, Normal, Oily
<p/>
Skin Concerns: Dryness, Dullness, Pigmentation & Dark Spots, Uneven Skin Texture, Visible Pores
<p/>
Formulation: Cream, Liquid
<p/>
Skincare By Age: 20s, 30s, 40s, 50+, Under 20
<p/>
What it is:A fruit-forward, clinically-effective routine for glowing skin with five game changing bestsellers.
<p/>
What it does:This midi-size set of bestsellers, including the cult favourite Watermelon Niacinamide Dew Drops, harnesses the power of watermelon and clinically effective actives - PHA, BHA, retinol, and hyaluronic acid - to visibly brighten, tighten pores, gently exfoliate, and hydrate. Discover real results and glowing skin.
<p/>
What else you need to know:
<p/>
PHA and BHA: PHA gently exfoliates, while BHA cleanses pores for smoother, clearer-looking skin.
<p/>
Niacinamide: Vitamin B3 and antioxidants visibly reduce the look of hyperpigmentation, correct the look of dullness, and minimize the appearance of pores.
<p/>
Hyaluronic Acid: A humectant that anchors moisture within the skin, keeping it hydrated and bouncy by retaining 1000 times its weight in water.
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
                On cleansed skin, pat in Watermelon Glow PHA+BHA Pore Tight Toner to use as your first leave on treatment step.
                <p/>
Pat in a pea-sized amount of Avocado Melt Retinol Eye Sleeping Mask around the orbital eye area.
<p/>
To hydrate and plump skin, apply Plum Plump Hyaluronic Serum in gentle patting motions until fully absorbed.
<p/>
Apply a dime-sized amount of Watermelon Glow Pink Juice oil-free Moisturizer to brighten and hydrate.
<p/>
Before moisturizer, dispense 1–2 pumps of Watermelon Glow Niacinamide Dew Drops as your daily serum to visibly reduce the look of hyperpigmentation and brighten skin, and gently pat onto face and neck until fully absorbed.
<p/>
Apply daily, a.m. and p.m.
<p/>
As a priming step, apply 1–2 pumps as the last step in your skin-care routine before makeup.
<p/>
Can also be mixed with foundation for a dewy finish, or applied as the last step of your skin-care routine on the high points of the face as a skin-care highlighter.
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
                Product Claims: AHAs, Anti-oxidants, BHAs/Salicylic Acid, Clean + Planet Positive, Clean at Sephora, Hyaluronic Acid, Paraben-free, Peptides, Retinoid, Sulphate-free, Vitamins
                <p/><p/>
                Avocado Retinol Eye Sleeping Mask:
                <p/>
                Aqua/Water/Eau, Glycerin, Propanediol, Cetearyl Alcohol, Glyceryl Stearate, Persea Gratissima (Avocado) Oil, C9-12 Alkane, Stearic Acid, Butyrospermum Parkii (Shea) Butter, Kaolin, Sodium Lauroyl Glutamate, Persea Gratissima (Avocado) Fruit Extract, Squalane, Niacinamide, Ethylhexylglycerin, Hexylresorcinol, Oryza Sativa (Rice) Extract, Tocopheryl Acetate, Aloe Barbadensis Leaf Juice, Coffea Arabica (Coffee) Fruit Extract, Hyaluronic Acid, Ethylhexyl Palmitate, Sodium Hyaluronate, Retinol, PEI-10, Hydrated Silica, Sodium Chloride, Fructan, Maltodextrin, Spirulina Maxima Extract, CI 75300*, Potassium Chloride, Potassium Phosphate, Butylene Glycol, Sodium Phosphate, Hydrogenated Starch Hydrolysate, Maltooligosyl Glucoside, Arginine, Silica Dimethyl Silylate, Sodium Dilauramidoglutamide Lysine, Sodium Hydroxide, Citric Acid, Caprylyl Glycol, Carthamus Tinctorius (Safflower) Seed Extract, Lavandula Angustifolia (Lavender) Flower/Leaf/Stem Extract, Malachite Extract, Rosmarinus Officinalis (Rosemary) Leaf Extract, PPG-3 Benzyl Ether Myristate, Polyisobutene, PVP, C13-15 Alkane, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Sodium Hydroxypropylsulfonate Laurylglucoside Crosspolymer, Fragrance/Parfum**, Hexylene Glycol, Potassium Sorbate, Sodium Benzoate, Phenoxyethanol. *Plant-based color **Natural Fragrance
                <p/><p/>
                Watermelon Glow PHA+BHA Pore-Tight Toner:
                <p/>
                Opuntia Ficus-Indica (Cactus) Extract, Citrullus Lanatus (Watermelon) Fruit Extract, Glycerin, Hyaluronic Acid, Aqua, Gluconolactone, Sodium Polyglutamate, Betaine Salicylate, Salix Alba (Willow) Bark Extract, Melaleuca Alternifolia (Tea Tree) Extract, Hibiscus Sabdariffa Flower Water, Watermelon, Lactobacillus, Cucumis Sativus (Cucumber) Fruit Extract, Saccharum Officinarum (Sugarcane) Extract, Glycyrrhiza Glabra (Licorice) Root Extract, Scutellaria Baicalensis Root Extract, Paeonia Suffruticosa Root Extract, Brassica Oleracea Capitata (Cabbage) Leaf Extract, Ipomoea Batatas Root Extract, Sorbitan Oleate, Levulinic Acid, Sodium Levulinate, Molasses, Benzyl Benzoate, Limonene, Parfum.
                <p/><p/>
                Plum Plump Hyaluronic Serum:
                <p/>
                Aqua/Water/Eau, Glycerin, Propanediol, Pentylene Glycol, Pleiogynium Timorense Fruit Extract, Podocarpus Elatus Fruit Extract, Terminalia Ferdinandiana Fruit Extract, Sodium Acetylated Hyaluronate, Sodium Hyaluronate, Tremella Fuciformis Polysaccharide, Acacia Seyal Gum Extract, sr-Spider Polypeptide-1**, Pantothenic Acid, Phospholipids, Sodium Hydroxide, Spirulina Platensis Extract, Raphanus Sativus Root Extract, Caprylyl Glycol, Chlorphenesin, Tetrasodium Glutamate Diacetate, Polyglyceryl-6 Caprylate, Polyglyceryl-4 Caprate, Potassium Sorbate, Propylene Glycol, Leuconostoc/Radish Root Ferment Filtrate, 1,2-Hexanediol, Citric Acid, Ethylhexylglycerin, Hydroxyacetophenone, Carrageenan, Xanthan Gum, Sodium Glycolate, Sodium Formate, Phenoxyethanol, Fragrance/Parfum*. *Natural Fragrance **Vegan Silk Protein Watermelon Glow Pink Juice Moisturizer: Citrullus Lanatus Fruit Extract, Aqua, Cetyl Alcohol, Scutellaria Baicalensis Root Extract, Paeonia Suffruticosa Root Extract, Glycerin, Glycyrrhiza Glabra Root Extract, Cetearyl Olivate, Glutamic Acid, Sorbitan Olivate, Hydrolyzed Wheat Protein, Hydrolyzed Soy Protein, Hydrolyzed Corn Protein, Sodium Hyaluronate, Cyamopsis Tetragonoloba Gum, Xanthan Gum, Apricot Kernel Amino Acids, Alkanna Tinctoria Root Extract, Beta-Glucan, Jasminum Sambac Flower Wax, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Brassica Oleracea Capitata Leaf Extract, Ipomoea Batatas Root Extract, Helianthus Annuus Seed Oil, Tocopherol, Butylene Glycol, 1,2-Hexanediol, Benzyl Benzoate, Limonene, Parfum.
                <p/><p/>
                Watermelon Glow Niacinamide Dew Drops:
                <p/>
                Aqua/Water/Eau, Propanediol, Glycereth-26, Glycerin, Niacinamide, 2,3-Butanediol, 1,2-Hexanediol, Cetyl Ethylhexanoate, Citrullus Lanatus Fruit Extract, Sodium Hyaluronate, Eclipta Prostrata Extract, Melia Azadirachta Leaf Extract, Polyglyceryl-3 Methylglucose Distearate, Tromethamine, Glyceryl Stearate, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Ethylhexylglycerin, Xanthan Gum, Polyquaternium-51, Moringa Oleifera Seed Oil, Fragrance/Parfum, Benzyl Benzoate.
                </Box>

                </VStack>
            </GridItem>
        </Grid>
      </Box>
    );}
    
    
    
    export default App;