/* Image URLS */
const rootUrl = `https://helixsleep-code-challenge.s3.amazonaws.com/`;

export const Logo = `${rootUrl}logo.svg`;

export const Icons = {
  Padlock: `${rootUrl}padlock.png`,
  product_icons: {
    "Free Shipping": `${rootUrl}free-shipping.svg`,
    "365 Day Trial": `${rootUrl}trial.svg`,
    "Made In America": `${rootUrl}made-in-america.svg`,
    "10 Year Warranty": `${rootUrl}warranty.svg`,
    "Super Easy Assembly": `${rootUrl}assembly.svg`,
    "High Quality Materials": `${rootUrl}materials.svg`,
  },
};

/* Strings + Product Info */

export const NavbarItems = [
  "The Sofa",
  "Reviews",
  "About Us",
  "Showroom",
  "Swatches",
];

export const ProductInfo = {
  name: "The Sofa",
  desc:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac dui interdum, tincidunt velit sit amet.",
  price: 1450,
  promotion: { price: 1250, discount: 200 },
  payment_plan: { plan_name: "Klarna", rate: 25 },
  shipping: "Ships in 5-7 Business Days",
  fabric_options: {
    Amber: `${rootUrl}sofa-amber.jpg`,
    Charcoal: `${rootUrl}sofa-charcoal.jpg`,
    Red: `${rootUrl}sofa-red.jpg`,
  },
};
