const { Products } = require('../models');

const productsdata = [
    //Flowrs
    {
        name: 'Designer choice Hand-Tied Bouquet',
        description: 'Selection of stunning blooms, accents, and foliage.',
        filename: 'DesignerChoiceHand-Tied.png',
        
        price: '100.00',
        category_id: 1,
    },

    {
        name: 'Dazzle Arrangement',
        description: 'A gorgeous textural assortment of blooms, accents and greenery in fresh tones of peach and champagne.',
        filename: 'DazzleArrangement.png',
        
        price: '150.00',
        category_id: 1,
    },

    {
        name: 'Designer choice Vase Arrangement',
        description: 'Arrangement is designed in a simple glass vase with a stunning combination of blooms, accents, and foliage.',
        filename: 'DesignerChoiceVaseArrangement.png',
        
        price: '125.00',
        category_id: 1,
    },

    {
        name: 'Cloud White Hand-Tied Bouguet',
        description: 'The Cloud White hand-tied bouquet features a stunning selection of blooms, accents, and foliage in hues of dreamy white and cream.',
        filename: 'CloudWhiteHand-TiedBouquet.png',
        
        price: '100.00',
        category_id: 1,
    },

    {
        name: 'Symbol Berry Hand-Tied Bouquet',
        description: 'The  Symbol Berry hand-tied bouquet features a stunning selection of blooms, accents, and foliage in jewel-toned hues.',
        filename: 'SymbolBerryHand-TiedBouquet.png',
        
        price: '100.00',
        category_id: 1,
    },

    {
        name: 'Champagne Hand-Tied Bouquet',
        description: 'The  Champagne hand-tied bouquet features a stunning selection of blooms, accents, and foliage in hues of peach, champagne, and cream.',
        filename: 'ChampagneHand-TiedBouquet.png',
        
        price: '100.00',
        category_id: 1,
    },

    {
        name: 'Cloud White Vase Arrangement',
        description: 'Selection of blooms, accents, and foliage in light and drifty hues of white and cream.',
        filename: 'CloudWhiteVaseArrangement.png',
        
        price: '125.00',
        category_id: 1,
    },

    {
        name: 'Symbol Berry Vase Arrangement',
        description: 'The Symbol Berry Vase arrangement features a stunning selection of blooms, accents, and foliage in beautiful jewel-toned hues.',
        filename: 'SymbotBerryVaseArrangement.png',
        
        price: '125.00',
        category_id: 1,
    },

    {
        name: 'Champagne Vase Arrangement',
        description: 'The Champagne Vase Arrangement features a stunning selection of blooms, accents, and foliage in hues of white, champagne, bubbly peach, and cream.',
        filename: 'ChampagneVaseArrangment.png',
        
        price: '125.00',
        category_id: 1,
    },

    //Plants
    {
        name: 'Anthurium',
        description: 'Pretty heart-shaped blooms combined with its easy care requirements make for effortless ownership',
        filename: 'Anthurium.png',
        
        price: '55.00',
        category_id: 2,
    },

    {
        name: 'Potted Orchids',
        description: 'Potted in a simple ceramic container, each double or triple spike phaleonopsis orchid is accented with natural mosses and will stay in bloom for months of enjoyment.',
        filename: 'PottedOrchids.png',
        
        price: '85.00',
        category_id: 2,
    },

    {
        name: 'Jasmine Plant',
        description: 'This ever-popular plant is known for its delicate sweet fragrance and darling blooms, making it a great addition to any home or office.',
        filename: 'JasminePlant.png',
        
        price: '75.00',
        category_id: 2,
    },

    {
        name: 'ZZ Plant',
        description: 'The ZZ plant is potted in a simple earthy container.',
        filename: 'ZZPlant.png',
        
        price: '75.00',
        category_id: 2,
    },

    {
        name: 'Succulent Garden',
        description: 'A selection of succulent plants is potted in a simple earthy container.',
        filename: 'SucculentGarden.png',
        
        price: '75.00',
        category_id: 2,
    },

    {
        name: 'Ficus Melany',
        description: 'Striking appearance combined with its easy care requirements makes for effortless ownership.',
        filename: 'FicusMelany.png',
        
        price: '105.00',
        category_id: 2,
    },

    {
        name: 'Burro Tail',
        description: 'Also referred to as donkey tail, this hanging basket sedum native to Mexico is sure to liven any space. ',
        filename: 'BurroTail.png',
        
        price: '45.00',
        category_id: 2,
    },

    {
        name: 'Syngonium Strawberry Cream',
        description: 'Strawberry and cream-colored leaves combined with its easy care requirements make for effortless ownership.',
        filename: 'SyngoniumStrawberryCream.png',
        
        price: '45.00',
        category_id: 2,
    },

    {
        name: '4" Burro Tail',
        description: 'Also referred to as donkey tail, this hanging basket sedum native to Mexico is sure to liven any space.',
        filename: '4BurroTail.png',
        
        price: '32.00',
        category_id: 2,
    },

    //Planters
    {
        name: 'Linden Green Matte Basel Pot',
        description: 'Classic and timeless, perfectly suited to compliment any decor. ',
        filename: 'LindenGreenMatteBaselPot.png',
        
        price: '12.00',
        category_id: 3,
    },

    {
        name: 'Moss Green Matte Basel Pot',
        description: 'Classic and timeless, perfectly suited to compliment any decor.',
        filename: 'MossGreenMatteBaselPot.png',
        
        price: '12.00',
        category_id: 3,
    },

    {
        name: 'Dark Grey Basel Stone Pot',
        description: ' Classic and timeless, perfectly suited to compliment any decor. ',
        filename: 'DarkGreyBaselStonePot.png',
        price: '12.00',
        category_id: 3,
    },

    {
        name: 'White Tusca Matte Pot',
        description: 'Classic and timeless, perfectly suited to compliment any decor.',
        filename: 'WhiteTuscaMattePot.png',
        
        price: '12.00',
        category_id: 3,
    },

    {
        name: 'Midnight Blue Tusca Matte Pot',
        description: 'Classic and timeless, perfectly suited to compliment any decor.',
        filename: 'MidnightBlueTuscaMattePot.png',
        
        price: '12.00',
        category_id: 3,
    },

    {
        name: 'Black Tusca Matte Pot',
        description: 'Classic and timeless, perfectly suited to compliment any decor.',
        filename: 'BlackTuscaMattePot.png',
        
        price: '12.00',
        category_id: 3,
    },

    {
        name: 'Ivory Tusca Shiny Pot',
        description: 'Classic and timeless, perfectly suited to compliment any decor.',
        filename: 'IvoryTuscaShinyPot.png',
        
        price: '18.00',
        category_id: 3,
    },

    {
        name: 'Burgundy Marlow Shiny Pot',
        description: 'Classic and timeless, perfectly suited to compliment any decor.',
        filename: 'BurgundyMarlowShinyPot.png',
        
        price: '12.00',
        category_id: 3,
    },

    {
        name: 'Dark Lilac Matte Basel Pot',
        description: 'Classic and timeless, perfectly suited to compliment any decor.',
        filename: 'DarkLilacMatteBaselPot.png',
        
        price: '18.00',
        category_id: 3,
    },

    //Home Decore
    {
        name: 'Lemnos Cucu Clock',
        description: 'Shaped like a simple birdhouse, CUCU can be used as either a wall or table clock.',
        filename: 'LemnosCucuClock.png',
        
        price: '300.00',
        category_id: 4,
    },

    {
        name: 'Lemnos Dent Cuckoo Clock',
        description: 'A cuckoo clock with a dent which looks as if the traditional clock has been carved out of the block. The cuckoo bird peeks out sideways from a small hole on the side of the clock.',
        filename: 'LemnosDentCuckooClock.png',
        
        price: '350.00',
        category_id: 4,
    },

    {
        name: 'Lemnos Birdhouse Clock',
        description: 'The form of a simple birdhouse with a triangular roof was made by assembling basswood plywood. ',
        filename: 'LemnosBirdhouseClock.png',
        
        price: '250.00',
        category_id: 4,
    },

    {
        name: 'Boho Ceramic Vase',
        description: 'A simple ceramic vase that is pleasing to the eye',
        filename: 'BohoCeramicVase.png',
        
        price: '20.00',
        category_id: 4,
    },

    {
        name: 'Brown Star Rattan Tray',
        description: 'A versitile item that can be used for decoration or centerpiece',
        filename: 'BrownStarRattanTray.png',
        
        price: '50.00',
        category_id: 4,
    },

    {
        name: 'Rattan Canister with Lid',
        description: 'Intricately woven in by the Indonesian artisans, baskets are both beautiful and functional.',
        filename: 'RattanCanisterwithLid.png',
        
        price: '70.00',
        category_id: 4,
    },

    {
        name: 'Brown Jute and Cotton Rug With Tassels',
        description: 'Textured, multi-coloured rug with alternating jute and cotton pattern and big tassels on narrow sides',
        filename: 'BrownJuteCottonRug.png',
        
        price: '55.00',
        category_id: 4,
    },

    {
        name: 'Mali Scalloped Tray Batik',
        description: 'these trays is an ideal centerpiece in any room at home on the table or display shelf.',
        filename: 'MaliScallopedTrayBatik.png',
        
        price: '45.00',
        category_id: 4,
    },

    {
        name: 'Mali Latched Container',
        description: 'A natural look to store your cotton pads and/or cotton swabs. ',
        filename: 'MaliLatchedContainer.png',
        
        price: '32.00',
        category_id: 4,
    },
];

const seedProducts = () => Products.bulkCreate(productsdata);

module.exports = seedProducts;