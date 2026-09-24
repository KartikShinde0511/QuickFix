import AC from "../Images/AC.png";
import Carpenter from "../Images/Carpenter.png";
import Electrian from "../Images/Electrian.png";
import Homecleaning from "../Images/Homecleaning.png";
import Plumber from "../Images/Plumber.png";
import Washing from "../Images/Washing.png";
const services = [
  {
    id: 1,
    name: "AC Repair",
    category: "AC Repair",
    provider: "Cool Care Services",
    price: 500,
    rating: 4.5,
    location: "Thane",
    description: "Professional AC repair and servicing.",
    image: AC
  },

  {
    id: 2,
    name: "Plumbing",
    category: "Plumbing",
    provider: "Quick Plumbing",
    price: 400,
    rating: 4.3,
    location: "Thane",
    description: "Complete plumbing repair and maintenance.",
    image: Plumber
  },

  {
    id: 3,
    name: "Electrician",
    category: "Electrical",
    provider: "PowerFix Services",
    price: 350,
    rating: 4.7,
    location: "Mulund",
    description: "Electrical installation and repair services.",
    image: Electrian
  },

  {
    id: 4,
    name: "Home Cleaning",
    category: "Cleaning",
    provider: "Clean Home",
    price: 700,
    rating: 4.6,
    location: "Mumbai",
    description: "Professional home cleaning service.",
    image: Homecleaning
  },

  {
    id: 5,
    name: "Carpenter",
    category: "Carpentry",
    provider: "WoodWorks",
    price: 600,
    rating: 4.4,
    location: "Thane",
    description: "Furniture repair and carpentry services.",
    image: Carpenter
  },

  {
    id: 6,
    name: "Washing Machine Repair",
    category: "Appliance Repair",
    provider: "Home Appliance Care",
    price: 450,
    rating: 4.2,
    location: "Mulund",
    description: "Washing machine inspection and repair.",
    image: Washing
  }
];

export default services;