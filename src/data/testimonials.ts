export interface Testimonial {
  id: string;
  clientName: string;
  occasion: string;
  dessertOrdered: string;
  quote: string;
  date: string;
  location: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Aarohi & Neil Shah',
    occasion: '1st Wedding Anniversary',
    dessertOrdered: 'Tiered Belgian Dark Chocolate Ganache Cake with Fresh Figs',
    quote: 'KB Treats created the most heavenly anniversary cake for us. The chocolate was so intense and rich, yet not overly sweet at all. Our entire family asked where we ordered it from. Bhavisha made the entire custom design process such a joy!',
    date: 'September 2026',
    location: 'Bandra, Mumbai'
  },
  {
    id: '2',
    clientName: 'Meera Deshmukh',
    occasion: 'Sister’s Bridal Shower',
    dessertOrdered: 'Assorted Brookies Box & Vanilla Berry Cupcakes',
    quote: 'The brookies were an absolute sensation! The fudgy brownie bottom paired with the crispy brown-butter cookie top is pure magic. Arrived fresh, warm to the touch, and beautifully boxed with custom satin ribbons.',
    date: 'August 2026',
    location: 'Juhu'
  },
  {
    id: '3',
    clientName: 'Rohan Mehra',
    occasion: 'Sunday Family Reunion',
    dessertOrdered: 'San Sebastián Basque Burnt Cheesecake',
    quote: 'Hands down the best Basque cheesecake in the city. The caramelized top and creamy, almost molten center had that authentic European bakery texture. You can genuinely taste the real cultured cream and quality ingredients.',
    date: 'July 2026',
    location: 'Khar'
  }
];

export const KITCHEN_PILLARS = [
  {
    title: 'Freshly Baked to Order',
    description: 'We do not maintain pre-frozen warehouse inventory. Your cake sponges and dessert batches are mixed and baked specifically for your celebration morning.',
    iconName: 'Sparkles'
  },
  {
    title: 'Pure & Premium Ingredients',
    description: 'Real cultured dairy butter, pure Belgian couverture chocolate, natural Bourbon vanilla pods, and farm-fresh dairy with zero artificial stabilizers.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Tailored Customization',
    description: 'From bespoke design themes and personalized color palettes to dietary adjustments, we turn your unique celebration concepts into delicious art.',
    iconName: 'Palette'
  },
  {
    title: 'Handcrafted With Love',
    description: 'Every delicate piping curl, gold leaf accent, and silky ganache swirl is hand-finished with meticulous personal care in our homegrown kitchen.',
    iconName: 'Heart'
  }
];
