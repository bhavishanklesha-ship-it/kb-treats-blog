export interface DessertItem {
  id: string;
  name: string;
  category: 'Cakes' | 'Brownies' | 'Brookies' | 'Cheesecakes' | 'Cookies' | 'Cupcakes';
  tagline: string;
  description: string;
  flavours: string[];
  customizationOptions: string[];
  idealOccasion: string;
  image: string;
  imageAlt?: string;
  servingSuggestion: string;
  features: string[];
}

export const DESSERT_ITEMS: DessertItem[] = [
  {
    id: 'two-in-one-cookie-tin',
    name: '2-in-1 Gooey Cookie Tin',
    category: 'Cookies',
    tagline: 'Signature royal burgundy gift tin packed with fresh dark chocolate & golden cookies',
    description: 'Our iconic signature creation: an elegant reusable burgundy tin lined with parchment paper, filled with generous portions of thick golden chocolate chip cookies and molten dark chocolate chunk cookies. Sealed with our official KB Treats seal.',
    flavours: ['Double Dark Chocolate Gooey', 'Classic Golden Choc-Chip', 'Sea Salt Brown-Butter', 'Nutella-Stuffed Center'],
    customizationOptions: ['Curated celebration tin with custom ribbon', 'Personalized greeting message card inside', 'Choice of cookie flavor split (50/50 or custom)', 'Bulk corporate & festive gift tins'],
    idealOccasion: 'Festive hampers, Diwali & holiday gifting, birthday surprises, thoughtful gestures',
    image: '/images/cookie_tin_two_in_one_og_1791350553246.jpg',
    imageAlt: 'Signature burgundy 2-in-1 cookie tin filled with double dark chocolate and golden chocolate chip cookies',
    servingSuggestion: 'Warm gently for 10-12 seconds for an ultra-gooey, molten center with a cup of hot espresso or tea.',
    features: ['Signature royal burgundy tin', 'Aged brown-butter dough', 'Pure Belgian chocolate chunks']
  },
  {
    id: 'fudgy-belgian-brownies',
    name: 'Gooey Chocolate Brownie Tin',
    category: 'Brownies',
    tagline: 'Warm, spoonable walnut brownie tub with shiny crackly top and molten chocolate center',
    description: 'Baked in our round dessert tins lined with parchment paper, this dense chocolate creation is loaded with roasted walnuts and molten Belgian dark chocolate. Designed to be scooped straight with a spoon while warm.',
    flavours: ['Fudgy Roasted Walnut & Dark Choc', 'Signature Triple Chocolate', 'Fleur de Sel Salted Caramel Ribbon', 'Nutella Swirl Brownie'],
    customizationOptions: ['Round sharing tin or individual squares', 'Custom greeting message piped in white chocolate', 'Gift ribbon packaging & personalized note cards', 'Extra walnut or hazelnut toppings'],
    idealOccasion: 'Comfort dessert cravings, family movie nights, housewarming tokens, festive hampers',
    image: '/images/brownie_tub_tin_scoop_1791348925707.jpg',
    imageAlt: 'Warm spoonable gooey chocolate brownie tin with shiny crackly crust and roasted walnuts',
    servingSuggestion: 'Scoop warm directly from the tin and pair with a scoop of Madagascar vanilla bean ice cream.',
    features: ['Melted couverture chocolate base', 'Crackle top achieved by hand aeration', 'No artificial cocoa powders or oils']
  },
  {
    id: 'mini-cookie-trays',
    name: 'Mini Choc-Chip Cookie Bakes',
    category: 'Cookies',
    tagline: 'Individual freshly baked golden cookie trays studded with glossy chocolate chips',
    description: 'Baked directly in individual dessert tins for maximum moisture and chewiness. Golden edges with thick, tender centers packed with semi-sweet chocolate chips and browned butter warmth.',
    flavours: ['Classic Brown-Butter Choc Chip', 'Triple Dark Chocolate Chip', 'Sea Salt & Caramelized Pecan', 'Red Velvet White Choc'],
    customizationOptions: ['Set of 6, 12, or 24 individual mini bake tins', 'Party return gift packaging with custom tags', 'Warm-and-eat celebration packs'],
    idealOccasion: 'Kids parties, dessert grazing tables, office celebrations, high-tea platters',
    image: '/images/mini_cookie_trays_baked_1791348938467.jpg',
    imageAlt: 'Individual freshly baked mini chocolate chip cookie bake trays with golden chewy edges',
    servingSuggestion: 'Enjoy straight from the tin at room temperature or warm for 8 seconds for a melty bite.',
    features: ['Freshly baked in individual tins', 'Slow-browned European butter', 'Real chocolate chips']
  },
  {
    id: 'custom-celebration-cakes',
    name: 'Bespoke Celebration Cakes',
    category: 'Cakes',
    tagline: 'Artisanal centrepieces crafted for your most memorable milestones',
    description: 'Every customized cake at KB Treats starts with a clean slate and your dream vision. Hand-layered with light-as-air sponge, whipped silky ganache or Swiss meringue buttercream, and decorated with seasonal florals, fresh fruits, or bespoke themes.',
    flavours: ['Belgian Dark Chocolate Ganache', 'Tahitian Vanilla & Raspberry Coulis', 'Salted Butter Caramel Crunch', 'Lotus Biscoff Dream', 'Rich Red Velvet with Cream Cheese'],
    customizationOptions: ['Tiered architecture & heights', 'Textured Lambeth or modern minimalist frosting', 'Fresh edible florals & berries', 'Hand-piped personalized messages & toppers', 'Thematic color palettes to match event decor'],
    idealOccasion: 'Birthdays, Anniversaries, Weddings, Engagements, Milestone Gatherings',
    image: '/images/white_pearl_floral_cake_1791370974897.jpg',
    imageAlt: 'Bespoke white celebration cake decorated with handcrafted sugar pearls and fresh edible flowers',
    servingSuggestion: 'Best enjoyed at room temperature for the creamiest frosting mouthfeel. Slice with a warmed chef knife.',
    features: ['100% freshly baked to order', 'Never frozen sponge layers', 'Real European butter & natural vanillas']
  },
  {
    id: 'silky-cheesecakes',
    name: 'Artisanal Gourmet Cheesecakes',
    category: 'Cheesecakes',
    tagline: 'From caramelized Basque burnt wonders to velvety cold-set creations',
    description: 'We believe cheesecake should be silky, never rubbery or gelatinous. Our signature San Sebastián Basque cheesecake boasts a deeply caramelized exterior with an oozing custard center, while our classic baked cakes rest on a buttery graham crust.',
    flavours: ['San Sebastián Basque Burnt', 'Wild Berry Compote New York', 'Lotus Biscoff Crunch Cheesecake', 'Dark Chocolate Truffle Cheesecake', 'Tangy Mango Passionfruit (Seasonal)'],
    customizationOptions: ['6-inch and 8-inch round formats', 'Custom berry crowns or toasted nuts', 'Seasonal fruit compotes on the side', 'Personalized celebration plaques'],
    idealOccasion: 'Intimate dinner parties, celebratory family dinners, Sunday brunches',
    image: '/images/dark_chocolate_gold_cake_1791370917497.jpg',
    imageAlt: 'Artisanal dark chocolate celebration cheesecake accented with gold leaf and handcrafted truffles',
    servingSuggestion: 'Refrigerate until 20 minutes before serving so the custard core reaches peak creaminess.',
    features: ['Premium cream cheese & heavy cream', 'Slow water-bath or high-heat caramelized bake', 'Handmade fruit reductions']
  },
  {
    id: 'artisan-brookies',
    name: 'The Signature Brookies',
    category: 'Brookies',
    tagline: 'The best of both worlds: fudgy brownie layered with brown-butter cookie',
    description: 'Can’t decide between a chewy chocolate chip cookie and a decadent brownie? KB Treats brookies marry the two in an uncompromised harmonious bake: a rich brownie base fused with a golden, chewy chocolate chip dough on top.',
    flavours: ['Classic Chocolate Chip & Fudge', 'Double Dark & Sea Salt Brookie', 'White Choc Raspberry Brookie', 'Caramel Drizzle Brookie'],
    customizationOptions: ['Celebration slab brookies with custom messages', 'Party finger bites for dessert tables', 'Mini gift boxes for party return favours'],
    idealOccasion: 'Weekend gatherings, movie nights, game days, dessert platters',
    image: '/images/spoonable_brownie_tin_scoop_1791370898954.jpg',
    imageAlt: 'Freshly baked signature brookie dessert combining fudgy Belgian brownie base and chewy cookie top',
    servingSuggestion: 'Serve slightly warm with a glass of cold milk or freshly brewed flat white.',
    features: ['Slow-browned butter cookie dough', 'Dense chocolate base', 'Crisp edges with gooey centers']
  }
];
