export const trips = [
  {
    id: "melbourne",
    name: "Melbourne ",
    image: "/img/melbourne.png",
    text: "An amazing journey",
    price: "700",
  },

  {
    id: "paris",
    name: "Paris ",
    image: "/img/paris.png",
    text: "A Paris Adventure",
    price: "600",
  },

  {
    id: "london",
    name: "London ",
    image: "/img/london.png",
    text: "London eye adventure",
    price: "350",
  },
  {
    id: "columbia",
    name: "Columbia ",
    image: "/img/columbia.png",
    text: "Amazing streets",
    price: "700",
  },
];

export const cities = [
  {
    id: "london",
    city: "London",
    code: "LHR",
  },
  {
    id: "dubai",
    city: "Dubai",
    code: "DXB",
  },
  {
    id: "paris",
    city: "Paris",
    code: "CDG",
  },
  {
    id: "bali",
    city: "Bali",
    code: "DPS",
  },
  {
    id: "antalya",
    city: "Antalya",
    code: "AYT",
  },
  {
    id: "new-york",
    city: "New-York",
    code: "JFK",
  },
  {
    id: "moscow",
    city: "Moscow",
    code: "MCW",
  },
];

export const nationalities = [
  { value: "", text: "Choose an option--", disabled: true },
  {
    value: "korean",
    text: "Korean",
  },
  {
    value: "kyrgyz",
    text: "Kyrgyz",
  },
  {
    value: "malay",
    text: "Malay",
  },
  {
    value: "arab",
    text: "Arab",
  },
  {
    value: "french",
    text: "French",
  },
  {
    value: "russian",
    text: "Rusian",
  },
  {
    value: "german",
    text: "German",
  },
];

export const flights = [
  {
    id: "lhr-cdg",
    cityFrom: "London(LHR)",
    cityTo: "Moscow(MCW)",
    code: "LHR-MCW",
    price: "804",
    airline: "Emirates",
    logo: "/img/emirates.png",
    departure: "02:00 am",
    arrival: "08:45 am",
  },
  {
    id: "dxb-bhr",
    cityFrom: "Dubai(DXB)",
    cityTo: "Bahrain(BHR)",
    code: "DXB-BHR",
    price: "300",
    airline: "Qatar",
    logo: "/img/qatar.png",
    departure: "09:00 am",
    arrival: "13:15 pm",
  },
  {
    id: "lhr-dxb",
    cityFrom: "Dubai(DXB)",
    cityTo: "Bahrain(BHR)",
    code: "DXB-BHR",
    price: "699",
    airline: "Etihad",
    logo: "/img/etihad.png",
    departure: "06:20 am",
    arrival: "11:30 am",
  },
  {
    id: "cdg-jfk",
    cityFrom: "Dubai",
    cityTo: "Bahrain",
    code: "DXB-BHR",
    price: "1200",
    airline: "flydubai",
    logo: "/img/flydubai.png",
    departure: "05:00 pm",
    arrival: "00:45 am",
  },
];
