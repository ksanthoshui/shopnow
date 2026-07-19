
import img_2 from '../assets/frontend_assets/p_img2.png'
import img_3 from '../assets/frontend_assets/p_img3.png'
import img_4 from '../assets/frontend_assets/p_img4.png'
import img_5 from '../assets/frontend_assets/p_img5.png'
import img_6 from '../assets/frontend_assets/p_img6.png'
import img_7 from '../assets/frontend_assets/p_img7.png'
import img_8 from '../assets/frontend_assets/p_img8.png'
import img_9 from '../assets/frontend_assets/p_img9.png'
import img_10 from '../assets/frontend_assets/p_img10.png'
import img_11 from '../assets/frontend_assets/p_img11.png'
import img_12 from '../assets/frontend_assets/p_img12.png'
import img_13 from '../assets/frontend_assets/p_img13.png'
import img_14 from '../assets/frontend_assets/p_img14.png'
import img_15 from '../assets/frontend_assets/p_img15.png'
import img_16 from '../assets/frontend_assets/p_img16.png'
import img_17 from '../assets/frontend_assets/p_img17.png'
import img_18 from '../assets/frontend_assets/p_img18.png'
import img_19 from '../assets/frontend_assets/p_img19.png'
import img_20 from '../assets/frontend_assets/p_img20.png'
import img_21 from '../assets/frontend_assets/p_img21.png'
import img_22 from '../assets/frontend_assets/p_img22.png'
import img_23 from '../assets/frontend_assets/p_img23.png'
import img_24 from '../assets/frontend_assets/p_img24.png'
import img_25 from '../assets/frontend_assets/p_img25.png'
import img_26 from '../assets/frontend_assets/p_img26.png'
import img_27 from '../assets/frontend_assets/p_img27.png'
import img_28 from '../assets/frontend_assets/p_img28.png'
import img_29 from '../assets/frontend_assets/p_img29.png'
import img_30 from '../assets/frontend_assets/p_img30.png'

const products = [
  {
    name: "Classic Black T-Shirt",
    description: "Soft premium cotton t-shirt for everyday wear.",
    price: 799,
    image: [img_1, img_2, img_3, img_4],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestseller: true,
    date: Date.now()
  },
  {
    name: "White Oversized T-Shirt",
    description: "Comfortable oversized cotton t-shirt.",
    price: 899,
    image: [img_2, img_2, img_2, img_2],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    bestseller: false,
    date: Date.now()
  },
  {
    name: "Blue Denim Jacket",
    description: "Stylish slim-fit denim jacket.",
    price: 2499,
    image: [img_3, img_3, img_3, img_3],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["M", "L", "XL"],
    bestseller: true,
    date: Date.now()
  },
  {
    name: "Grey Hoodie",
    description: "Warm fleece hoodie with front pocket.",
    price: 1999,
    image: [img_4, img_4, img_4, img_4],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    bestseller: false,
    date: Date.now()
  },
  {
    name: "Black Cargo Pants",
    description: "Modern cargo pants with multiple pockets.",
    price: 1799,
    image: [img_5, img_5, img_5, img_5],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["30", "32", "34", "36"],
    bestseller: true,
    date: Date.now()
  },
  {
    name: "Slim Fit Jeans",
    description: "Stretchable slim-fit blue jeans.",
    price: 1899,
    image: [img_6, img_6, img_6, img_6],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["30", "32", "34", "36"],
    bestseller: false,
    date: Date.now()
  },
  {
    name: "Formal White Shirt",
    description: "Elegant office wear formal shirt.",
    price: 1499,
    image: [img_7, img_7, img_7, img_7],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    bestseller: true,
    date: Date.now()
  },
  {
    name: "Navy Polo Shirt",
    description: "Premium polo shirt with breathable fabric.",
    price: 1299,
    image: [img_8, img_8, img_8, img_8],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    bestseller: false,
    date: Date.now()
  },
  {
    name: "Women's Floral Dress",
    description: "Elegant floral summer dress.",
    price: 2199,
    image: [img_9, img_9, img_9, img_9],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    bestseller: true,
    date: Date.now()
  },
  {
    name: "Women's Pink Hoodie",
    description: "Soft fleece hoodie for winter.",
    price: 1999,
    image: [img_10, img_10, img_10, img_10],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L"],
    bestseller: false,
    date: Date.now()
  },
  {
    name: "Women's Crop Top",
    description: "Trendy casual crop top.",
    price: 999,
    image: [img_11, img_11, img_11, img_11],
    category:"Women",
    subCategory:"Topwear",
    sizes:["S","M","L"],
    bestseller:true,
    date:Date.now()
  },
  {
    name:"Women's Blue Jeans",
    description:"High waist stretch jeans.",
    price:1899,
    image:[img_12, img_12, img_12, img_12],
    category:"Women",
    subCategory:"Bottomwear",
    sizes:["28","30","32","34"],
    bestseller:false,
    date:Date.now()
  },
  {
    name:"Women's Black Skirt",
    description:"Elegant midi skirt.",
    price:1499,
    image:[img_13, img_13, img_13, img_13],
    category:"Women",
    subCategory:"Bottomwear",
    sizes:["S","M","L"],
    bestseller:false,
    date:Date.now()
  },
  {
    name:"Women's Wool Coat",
    description:"Premium long winter coat.",
    price:3999,
    image:[img_14, img_14, img_14, img_14],
    category:"Women",
    subCategory:"Winterwear",
    sizes:["M","L","XL"],
    bestseller:true,
    date:Date.now()
  },
  {
    name:"Women's Knit Sweater",
    description:"Warm knitted sweater.",
    price:1799,
    image:[img_15, img_15, img_15, img_15],
    category:"Women",
    subCategory:"Winterwear",
    sizes:["S","M","L"],
    bestseller:true,
    date:Date.now()
  },
  {
    name:"Kids Cartoon T-Shirt",
    description:"Soft cotton printed t-shirt.",
    price:699,
    image:[img_16, img_16, img_16, img_16],
    category:"Kids",
    subCategory:"Topwear",
    sizes:["XS","S","M"],
    bestseller:true,
    date:Date.now()
  },
  {
    name:"Kids Hoodie",
    description:"Warm hoodie for kids.",
    price:1299,
    image:[img_17, img_17, img_17, img_17],
    category:"Kids",
    subCategory:"Winterwear",
    sizes:["XS","S","M"],
    bestseller:false,
    date:Date.now()
  },
  {
    name:"Kids Denim Jeans",
    description:"Comfortable denim jeans.",
    price:1199,
    image:[img_18, img_18, img_18, img_18],
    category:"Kids",
    subCategory:"Bottomwear",
    sizes:["XS","S","M"],
    bestseller:false,
    date:Date.now()
  },
  {
    name:"Kids Jacket",
    description:"Stylish winter jacket.",
    price:2299,
    image:[img_19, img_19, img_19, img_19],
    category:"Kids",
    subCategory:"Winterwear",
    sizes:["XS","S","M"],
    bestseller:true,
    date:Date.now()
  },
  {
    name:"Kids Shorts",
    description:"Comfortable cotton shorts.",
    price:699,
    image:[img_20, img_20, img_20, img_20],
    category:"Kids",
    subCategory:"Bottomwear",
    sizes:["XS","S","M"],
    bestseller:false,
    date:Date.now()
  },
  {
    name:"Olive Bomber Jacket",
    description:"Classic bomber jacket.",
    price:2799,
    image:[img_21, img_21, img_21, img_21],
    category:"Men",
    subCategory:"Winterwear",
    sizes:["M","L","XL"],
    bestseller:true,
    date:Date.now()
  },
  {
    name:"Beige Chinos",
    description:"Slim fit chinos.",
    price:1699,
    image:[img_22, img_22, img_22, img_22],
    category:"Men",
    subCategory:"Bottomwear",
    sizes:["30","32","34","36"],
    bestseller:false,
    date:Date.now()
  },
  {
    name:"Red Check Shirt",
    description:"Casual check shirt.",
    price:1499,
    image:[img_23, img_23, img_23, img_23],
    category:"Men",
    subCategory:"Topwear",
    sizes:["M","L","XL"],
    bestseller:true,
    date:Date.now()
  },
  {
    name:"Women's White Blouse",
    description:"Elegant office blouse.",
    price:1399,
    image:[img_24, img_24, img_24, img_24],
    category:"Women",
    subCategory:"Topwear",
    sizes:["S","M","L"],
    bestseller:false,
    date:Date.now()
  },
  {
    name:"Women's Leggings",
    description:"Stretchable cotton leggings.",
    price:999,
    image:[img_25, img_25, img_25, img_25],
    category:"Women",
    subCategory:"Bottomwear",
    sizes:["S","M","L","XL"],
    bestseller:true,
    date:Date.now()
  },
  {
    name:"Women's Puffer Jacket",
    description:"Lightweight puffer jacket.",
    price:3499,
    image:[img_26, img_26, img_26, img_26],
    category:"Women",
    subCategory:"Winterwear",
    sizes:["M","L","XL"],
    bestseller:true,
    date:Date.now()
  },
  {
    name:"Kids Sweatshirt",
    description:"Warm fleece sweatshirt.",
    price:999,
    image:[img_27, img_27, img_27, img_27],
    category:"Kids",
    subCategory:"Winterwear",
    sizes:["XS","S","M"],
    bestseller:false,
    date:Date.now()
  },
  {
    name:"Kids Printed Dress",
    description:"Cute printed frock.",
    price:1499,
    image:[img_28, img_28, img_28, img_28],
    category:"Kids",
    subCategory:"Topwear",
    sizes:["XS","S","M"],
    bestseller:true,
    date:Date.now()
  },
  {
    name:"Kids Joggers",
    description:"Comfortable jogger pants.",
    price:899,
    image:[img_29, img_29, img_29, img_29],
    category:"Kids",
    subCategory:"Bottomwear",
    sizes:["XS","S","M"],
    bestseller:false,
    date:Date.now()
  },
  {
    name:"Black Leather Jacket",
    description:"Premium faux leather biker jacket.",
    price:4999,
    image:[img_30, img_30, img_30, img_30],
    category:"Men",
    subCategory:"Winterwear",
    sizes:["M","L","XL","XXL"],
    bestseller:true,
    date:Date.now()
  }
];

export default products;