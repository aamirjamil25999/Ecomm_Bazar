const categories = [
  {
    _id: "62c827b5a427b63741da9175",
    status: "show",
    name: {
      en: "Home",
    },
    id: "Root",
    parentName: "Home",
    description: {
      en: "This is Home Category",
    },
  },
  {
    _id: "62cc0791d511b304aecdfbf2",
    status: "show",
    name: {
      en: "Baby Food",
      de: "Babynahrung",
    },
    parentId: "62cc0637d511b304aecdfba8",
    parentName: "Baby Care",
    description: {
      en: "This is baby food category",
    },
    icon: "",
  },
  {
    _id: "62cc07b8d511b304aecdfbfa",
    status: "show",
    name: {
      en: "Baby Accessories",
      de: "Baby Accessoires",
    },
    parentId: "62cc0637d511b304aecdfba8",
    parentName: "Baby Care",
    description: {
      en: "This is baby accessories",
    },
    icon: "",
  },
  {
    _id: "62cfab28484d89068aa7a7f5",
    status: "show",
    name: {
      en: "Chocolate",
    },
    parentId: "62cfab19484d89068aa7a7ef",
    parentName: "Snacks & Instant",
    description: {
      en: "This is Chocolate category",
    },
    icon: "",
  },
  {
    _id: "62cfab39484d89068aa7a7fb",
    status: "show",
    name: {
      en: "Chips & Nuts",
    },
    parentId: "62cfab19484d89068aa7a7ef",
    parentName: "Snacks & Instant",
    description: {
      en: "This is Chips & Nuts category",
    },
    icon: "",
  },
  {
    _id: "62cfab4b484d89068aa7a7ff",
    status: "show",
    name: {
      en: "Canned Food",
    },
    parentId: "62cfab19484d89068aa7a7ef",
    parentName: "Snacks & Instant",
    description: {
      en: "This is Canned Food category",
    },
    icon: "",
  },
  {
    _id: "62cfad3d484d89068aa7a819",
    status: "show",
    name: {
      en: "Sauces",
    },
    parentId: "62cfad20484d89068aa7a812",
    parentName: "Sauces & Pickles",
    description: {
      en: "This is Sauces category",
    },
    icon: "",
  },
  {
    _id: "62cfad52484d89068aa7a81f",
    status: "show",
    name: {
      en: "Pickles & Condiments",
    },
    parentId: "62cfad20484d89068aa7a812",
    parentName: "Sauces & Pickles",
    description: {
      en: "This is Pickles & Condiments category",
    },
    icon: "",
  },
  {
    _id: "62d02efd2d28e904b20e22bf",
    status: "show",
    name: {
      en: "Tuna",
    },
    description: {
      en: "This is tuna fish category",
    },
    parentId: "62c851ae00bc1e3f08bb8191",
    parentName: "Fish",
    icon: "",
  },
  {
    _id: "62d03a312d28e904b20e233c",
    status: "show",
    name: {
      en: "Tuna",
      de: "Thunfisch",
    },
    description: {
      en: "This is tuna category",
      de: "Dies ist die Thunfisch-Kategorie",
    },
    parentId: "62d03a112d28e904b20e2336",
    parentName: "Fish",
    icon: "",
  },
  {
    _id: "62d03a542d28e904b20e2342",
    status: "show",
    name: {
      en: "Rui",
      de: "Rui",
    },
    description: {
      en: "This is Rui category",
      de: "Dies ist die Rui-Kategorie",
    },
    parentId: "62d03a112d28e904b20e2336",
    parentName: "Fish",
    icon: "",
  },
  {
    _id: "62d2bbd22e63b40520194f1b",
    status: "show",
    name: {
      en: "Apple",
    },
    parentId: "62cf9f32484d89068aa7a75f",
    parentName: "Fresh Fruits",
    description: {
      en: "This is the apple category",
    },
    icon: "",
  },
  {
    _id: "62d2bbe62e63b40520194f21",
    status: "show",
    name: {
      en: "Orange",
    },
    description: {
      en: "This is orange category",
    },
    parentId: "62cf9f32484d89068aa7a75f",
    parentName: "Fresh Fruits",
    icon: "",
  },
  {
    _id: "62e4ebb90ea79023fc11d847",
    status: "show",
    name: {
      en: "Beef",
      de: "Rindfleisch",
    },
    description: {
      en: "This is Beef Category",
      de: "Dies ist die Kategorie Rindfleisch",
    },
    parentId: "62c851be00bc1e3f08bb8197",
    parentName: "Meat",
    icon: "",
  },
  {
    _id: "632aae414d87ff2494210945",
    status: "show",
    name: {
      en: "Breakfast",
    },
    description: {
      en: "Breakfast",
    },
    parentId: "62c827b5a427b63741da9175",
    parentName: "Home",
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1658340705/category%20icon/bagel_mt3fod.png",
  },
  {
    _id: "632aae624d87ff2494210951",
    status: "show",
    name: {
      en: "Cereal",
    },
    description: {
      en: "Cereal",
    },
    parentId: "632aae414d87ff2494210945",
    parentName: "Breakfasts",
    icon: "",
  },
  {
    _id: "632aae7b4d87ff2494210967",
    status: "show",
    name: {
      en: "Bread",
    },
    description: {
      en: "Bread",
    },
    parentId: "632aae414d87ff2494210945",
    parentName: "Breakfasts",
    icon: "",
  },
  {
    _id: "632ab0334d87ff24942109c1",
    status: "show",
    name: {
      en: "Drinks",
    },
    description: {
      en: "Drinks",
    },
    parentId: "62c827b5a427b63741da9175",
    parentName: "Home",
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1658340705/category%20icon/juice_p5gv5k.png",
  },
  {
    _id: "632ab0454d87ff24942109cc",
    status: "show",
    name: {
      en: "Energy Drinks",
    },
    description: {
      en: "Energy Drinks",
    },
    parentId: "632ab0334d87ff24942109c1",
    parentName: "Drink",
    icon: "",
  },
  {
    _id: "632ab0504d87ff24942109d7",
    status: "show",
    name: {
      en: "Coffee",
    },
    description: {
      en: "Coffee",
    },
    parentId: "632ab0334d87ff24942109c1",
    parentName: "Drink",
    icon: "",
  },
  {
    _id: "632ab0564d87ff24942109df",
    status: "show",
    name: {
      en: "Juice",
    },
    description: {
      en: "Juice",
    },
    parentId: "632ab0334d87ff24942109c1",
    parentName: "Drink",
    icon: "",
  },
  {
    _id: "632ab0604d87ff24942109e7",
    status: "show",
    name: {
      en: "Water",
    },
    description: {
      en: "Water",
    },
    parentId: "632ab0334d87ff24942109c1",
    parentName: "Drink",
    icon: "",
  },
  {
    _id: "632ab0664d87ff24942109ef",
    status: "show",
    name: {
      en: "Tea",
    },
    description: {
      en: "Tea",
    },
    parentId: "632ab0334d87ff24942109c1",
    parentName: "Drink",
    icon: "",
  },
  {
    _id: "632ab14a4d87ff2494210a29",
    status: "show",
    name: {
      en: "Milk & Dairy",
    },
    description: {
      en: "Milk & Dairy",
    },
    parentId: "62c827b5a427b63741da9175",
    parentName: "Home",
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1658340706/category%20icon/milk_dcl0dr.png",
  },
  {
    _id: "632ab1584d87ff2494210a31",
    status: "show",
    name: {
      en: "Dairy",
    },
    description: {
      en: "Dairy",
    },
    parentId: "632ab14a4d87ff2494210a29",
    parentName: "Milk & Dairys",
    icon: "",
  },
  {
    _id: "632ab1644d87ff2494210a3c",
    status: "show",
    name: {
      en: "Ice Cream",
    },
    description: {
      en: "Ice Cream",
    },
    parentId: "632ab14a4d87ff2494210a29",
    parentName: "Milk & Dairys",
    icon: "",
  },
  {
    _id: "632ab16c4d87ff2494210a44",
    status: "show",
    name: {
      en: "Butter & Ghee",
    },
    description: {
      en: "Butter & Ghee",
    },
    parentId: "632ab14a4d87ff2494210a29",
    parentName: "Milk & Dairys",
    icon: "",
  },
  {
    _id: "632ab1e04d87ff2494210a6a",
    status: "show",
    name: {
      en: "Jam & Jelly",
    },
    description: {
      en: "Jam & Jelly",
    },
    parentId: "62c827b5a427b63741da9175",
    parentName: "Home",
    icon: "https://i.postimg.cc/rmLvfsMC/strawberry-jam-1.png",
  },
  {
    _id: "632ab2864d87ff2494210a8a",
    status: "show",
    name: {
      en: "Beauty & Healths",
    },
    description: {
      en: "Beauty & Healths",
    },
    parentId: "62c827b5a427b63741da9175",
    parentName: "Home",
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1658340706/category%20icon/beauty_vfbmzc.png",
  },
  {
    _id: "632ab2b64d87ff2494210aa7",
    status: "show",
    name: {
      en: "Men",
    },
    description: {
      en: "Men",
    },
    parentId: "632ab2864d87ff2494210a8a",
    parentName: "Beauty & Healths",
    icon: "",
  },
  {
    _id: "632ab2c34d87ff2494210ab2",
    status: "show",
    name: {
      en: "Women",
    },
    description: {
      en: "Women",
    },
    parentId: "632ab2864d87ff2494210a8a",
    parentName: "Beauty & Healths",
    icon: "",
  },
  {
    _id: "632ab2d54d87ff2494210ac0",
    status: "show",
    name: {
      en: "Shaving Needs",
    },
    description: {
      en: "Shaving Needs",
    },
    parentId: "632ab2b64d87ff2494210aa7",
    parentName: "Men",
    icon: "",
  },
  {
    _id: "632ab2df4d87ff2494210ac8",
    status: "show",
    name: {
      en: "Body Care",
    },
    description: {
      en: "Body Care",
    },
    parentId: "632ab2b64d87ff2494210aa7",
    parentName: "Men",
    icon: "",
  },
  {
    _id: "632ab2f04d87ff2494210ad0",
    status: "show",
    name: {
      en: "Skin Care",
    },
    description: {
      en: "Skin Care",
    },
    parentId: "632ab2c34d87ff2494210ab2",
    parentName: "Women",
    icon: "",
  },
  {
    _id: "632ab2f84d87ff2494210ad8",
    status: "show",
    name: {
      en: "Oral Care",
    },
    description: {
      en: "Oral Care",
    },
    parentId: "632ab2c34d87ff2494210ab2",
    parentName: "Women",
    icon: "",
  },
  {
    _id: "632ab2fd4d87ff2494210ae0",
    status: "show",
    name: {
      en: "Cosmetics",
    },
    description: {
      en: "Cosmetics",
    },
    parentId: "632ab2c34d87ff2494210ab2",
    parentName: "Women",
    icon: "",
  },
  {
    _id: "632ab3044d87ff2494210ae8",
    status: "show",
    name: {
      en: "Bath",
    },
    description: {
      en: "Bath",
    },
    parentId: "632ab2c34d87ff2494210ab2",
    parentName: "Women",
    icon: "",
  },
  {
    _id: "632ab4434d87ff2494210b0e",
    status: "show",
    name: {
      en: "Pet Care",
    },
    description: {
      en: "Pet Care",
    },
    parentId: "62c827b5a427b63741da9175",
    parentName: "Home",
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1658340707/category%20icon/cat_tznwmq.png",
  },
  {
    _id: "632ab4524d87ff2494210b19",
    status: "show",
    name: {
      en: "Cat Care",
    },
    description: {
      en: "Cat Care",
    },
    parentId: "632ab4434d87ff2494210b0e",
    parentName: "Pet Cares",
    icon: "",
  },
  {
    _id: "632ab45b4d87ff2494210b21",
    status: "show",
    name: {
      en: "Dog Care",
    },
    description: {
      en: "Dog Care",
    },
    parentId: "632ab4434d87ff2494210b0e",
    parentName: "Pet Cares",
    icon: "",
  },
  {
    _id: "632ac9864d87ff2494210b49",
    status: "show",
    name: {
      en: "Household Tools",
    },
    description: {
      en: "Household Tools",
    },
    parentId: "62c827b5a427b63741da9175",
    parentName: "Home",
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1658340706/category%20icon/spray_pebsjt.png",
  },
  {
    _id: "632ac9934d87ff2494210b54",
    status: "show",
    name: {
      en: "Cleaner",
    },
    description: {
      en: "Cleaner",
    },
    parentId: "632ac9864d87ff2494210b49",
    parentName: "Household Tool",
    icon: "",
  },
  {
    _id: "632ac9984d87ff2494210b5c",
    status: "show",
    name: {
      en: "Luandry",
    },
    description: {
      en: "Luandry",
    },
    parentId: "632ac9864d87ff2494210b49",
    parentName: "Household Tool",
    icon: "",
  },
  {
    _id: "632ac99d4d87ff2494210b64",
    status: "show",
    name: {
      en: "Air Freshener",
    },
    description: {
      en: "Air Freshener",
    },
    parentId: "632ac9864d87ff2494210b49",
    parentName: "Household Tool",
    icon: "",
  },
  {
    _id: "632ac9b24d87ff2494210b74",
    status: "show",
    name: {
      en: "Pest Control",
    },
    description: {
      en: "Pest Control",
    },
    parentId: "632ac9864d87ff2494210b49",
    parentName: "Household Tool",
    icon: "",
  },
  {
    _id: "632ac9ba4d87ff2494210b7c",
    status: "show",
    name: {
      en: "Cleaning Tools",
    },
    description: {
      en: "Cleaning Tools",
    },
    parentId: "632ac9864d87ff2494210b49",
    parentName: "Household Tool",
    icon: "",
  },
  {
    _id: "632ac9c24d87ff2494210b84",
    status: "show",
    name: {
      en: "Water Filter",
    },
    description: {
      en: "Water Filter",
    },
    parentId: "632ac9864d87ff2494210b49",
    parentName: "Household Tool",
    icon: "",
  },
  {
    _id: "632ac9e94d87ff2494210ba0",
    status: "show",
    name: {
      en: "Biscuits & Cakes",
    },
    description: {
      en: "Biscuits & Cakes",
    },
    parentId: "62c827b5a427b63741da9175",
    parentName: "Home",
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1658340705/category%20icon/cookie_1_ugipqa.png",
  },
  {
    _id: "632ac9ef4d87ff2494210ba8",
    status: "show",
    name: {
      en: "Cakes",
    },
    description: {
      en: "Cakes",
    },
    parentId: "632ac9e94d87ff2494210ba0",
    parentName: "Biscuits & Cake",
    icon: "",
  },
  {
    _id: "632ac9f64d87ff2494210bb0",
    status: "show",
    name: {
      en: "Biscuits",
    },
    description: {
      en: "Biscuits",
    },
    parentId: "632ac9e94d87ff2494210ba0",
    parentName: "Biscuits & Cake",
    icon: "",
  },
  {
    _id: "632aca0b4d87ff2494210bc4",
    status: "show",
    name: {
      en: "Cooking Essentials",
    },
    description: {
      en: "Cooking Essentials",
    },
    parentId: "62c827b5a427b63741da9175",
    parentName: "Home",
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1658340704/category%20icon/frying-pan_vglm5c.png",
  },
  {
    _id: "632aca144d87ff2494210bcc",
    status: "show",
    name: {
      en: "Oil",
    },
    description: {
      en: "Oil",
    },
    parentId: "632aca0b4d87ff2494210bc4",
    parentName: "Cooking Essential",
    icon: "",
  },
  {
    _id: "632aca184d87ff2494210bd4",
    status: "show",
    name: {
      en: "Flour",
    },
    description: {
      en: "Flour",
    },
    parentId: "632aca0b4d87ff2494210bc4",
    parentName: "Cooking Essential",
    icon: "",
  },
  {
    _id: "632aca2b4d87ff2494210be8",
    status: "show",
    name: {
      en: "Fruits & Vegetable",
    },
    description: {
      en: "Fruits & Vegetable",
    },
    parentId: "62c827b5a427b63741da9175",
    parentName: "Home",
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1658340704/category%20icon/cabbage_n59uv3.png",
  },
  {
    _id: "632aca374d87ff2494210bf0",
    status: "show",
    name: {
      en: "Fresh Vegetable",
    },
    description: {
      en: "Fresh Vegetable",
    },
    parentId: "632aca2b4d87ff2494210be8",
    parentName: "Fruits & Vegetables",
    icon: "",
  },
  {
    _id: "632aca3d4d87ff2494210bf8",
    status: "show",
    name: {
      en: "Dry Fruits",
    },
    description: {
      en: "Dry Fruits",
    },
    parentId: "632aca2b4d87ff2494210be8",
    parentName: "Fruits & Vegetables",
    icon: "",
  },
  {
    _id: "632aca454d87ff2494210c00",
    status: "show",
    name: {
      en: "Fresh Fruits",
    },
    description: {
      en: "Fresh Fruits",
    },
    parentId: "632aca2b4d87ff2494210be8",
    parentName: "Fruits & Vegetables",
    icon: "",
  },
  {
    _id: "632aca524d87ff2494210c08",
    status: "show",
    name: {
      en: "Apple",
    },
    description: {
      en: "Apple",
    },
    parentId: "632aca454d87ff2494210c00",
    parentName: "Fresh Fruits",
    icon: "",
  },
  {
    _id: "632aca594d87ff2494210c10",
    status: "show",
    name: {
      en: "Orange",
    },
    description: {
      en: "Orange",
    },
    parentId: "632aca454d87ff2494210c00",
    parentName: "Fresh Fruits",
    icon: "",
  },
  {
    _id: "632aca6d4d87ff2494210c24",
    status: "show",
    name: {
      en: "Fish & Meat",
    },
    description: {
      en: "Fish & Meat",
    },
    parentId: "62c827b5a427b63741da9175",
    parentName: "Home",
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1658340705/category%20icon/carp-fish_paxzrt.png",
  },
  {
    _id: "632aca754d87ff2494210c2c",
    status: "show",
    name: {
      en: "Meat",
    },
    description: {
      en: "Meat",
    },
    parentId: "632aca6d4d87ff2494210c24",
    parentName: "Fish & Meats",
    icon: "",
  },
  {
    _id: "632aca7e4d87ff2494210c34",
    status: "show",
    name: {
      en: "Fish",
    },
    description: {
      en: "Fish",
    },
    parentId: "632aca6d4d87ff2494210c24",
    parentName: "Fish & Meats",
    icon: "",
  },
  {
    _id: "632aca864d87ff2494210c3c",
    status: "show",
    name: {
      en: "Beef",
    },
    description: {
      en: "Beef",
    },
    parentId: "632aca754d87ff2494210c2c",
    parentName: "Meat",
    icon: "",
  },
  {
    _id: "632aca944d87ff2494210c47",
    status: "show",
    name: {
      en: "Tuna",
    },
    description: {
      en: "Tuna",
    },
    parentId: "632aca7e4d87ff2494210c34",
    parentName: "Fish",
    icon: "",
  },
  {
    _id: "632aca9b4d87ff2494210c4f",
    status: "show",
    name: {
      en: "Rui",
    },
    description: {
      en: "Rui",
    },
    parentId: "632aca7e4d87ff2494210c34",
    parentName: "Fish",
    icon: "",
  },

  {
    _id: "63f12afdcc480f0454f475dd",
    status: "show",
    name: {
      en: "Baby Food",
    },
    description: {
      en: "Baby Food",
    },
    parentId: "632aca2b4d87ff2494210be8",
    parentName: "Fruits & Vegetable",
    icon: "",
  },
];

module.exports = categories;
