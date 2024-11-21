import { PAGES_DASHBOARD } from "@/utils";
import { CiHeadphones, CiCamera, CiDeliveryTruck } from "react-icons/ci";
import {
  FaFacebookSquare,
  FaHome,
  FaInstagramSquare,
  FaShippingFast,
  FaTiktok,
  FaUsers,
} from "react-icons/fa";
import { IoIosCloudDone, IoMdContact, IoMdReverseCamera } from "react-icons/io";
import { TbLogs, TbDeviceWatch, TbCreditCardPay } from "react-icons/tb";
import {
  MdPhoneIphone,
  MdOutlineVideogameAsset,
  MdPhoneAndroid,
} from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { IoCameraOutline, IoHome } from "react-icons/io5";
import { BsCpu } from "react-icons/bs";
import { GiBattery75 } from "react-icons/gi";
import { LuCpu } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";

export const headerLinks = [
  { logo: <FaHome />, title: "Home", link: PAGES_DASHBOARD.HOME },
  { logo: <FaUsers />, title: "About", link: "/" },
  { logo: <IoMdContact />, title: "Contact Us", link: "/" },
  { logo: <TbLogs />, title: "Blog", link: "/" },
];

export const categoryLinks = [
  {
    icon: <MdPhoneIphone />,
    title: "Phones",
    link: `${PAGES_DASHBOARD.CATALOG}/smartphones`,
  },
  {
    icon: <TbDeviceWatch />,
    title: "Smart Watches",
    link: `${PAGES_DASHBOARD.CATALOG}/watches`,
  },
  {
    icon: <CiCamera />,
    title: "Cameras",
    link: `${PAGES_DASHBOARD.CATALOG}/camera`,
  },
  {
    icon: <CiHeadphones />,
    title: "Headphones",
    link: `${PAGES_DASHBOARD.CATALOG}/headphones`,
  },
  { icon: <HiMiniComputerDesktop />, title: "Computers", link: `` },
  { icon: <MdOutlineVideogameAsset />, title: "Gaming", link: `` },
];

export const bigSalelogos = [
  { src: "/ipadone.png" },
  { src: "/ipadtwo.png" },
  { src: "/mac.png" },
  { src: "/i.png" },
  { src: "/watch.png" },
];

export const footerLinks = [
  {
    title: "Services",
    items: [
      { title: "Bonus program" },
      { title: "Gift cards" },
      { title: "Credit and payment" },
      { title: "Service contracts" },
      { title: "Non-cash account" },
      { title: "Payment" },
    ],
  },
  {
    title: "Assistance to the buyer",
    items: [
      { title: "Find an order" },
      { title: "Terms of delivery" },
      { title: "Exchange and return of goods" },
      { title: "Guarantee" },
      { title: "Frequently asked questions" },
      { title: "Terms of use of the site" },
    ],
  },
];

export const roadLinks = [
  { title: "Address", icon: <FaLocationDot />, link: PAGES_DASHBOARD.STEP_ONE, index: 1 },
  { title: "Shipping", icon: <FaShippingFast />, link: PAGES_DASHBOARD.STEP_TWO, index: 2 },
  { title: "Payment", icon: <TbCreditCardPay />, link: PAGES_DASHBOARD.STEP_THREE, index: 3 },
];

export const footerLogos = [
  { logo: <FaInstagramSquare /> },
  { logo: <FaFacebookSquare /> },
  { logo: <FaTiktok /> },
  { logo: <FaFacebookSquare /> },
];

export const productPageDeliveryLinks = [
  { item: <CiDeliveryTruck />, title: "Free Delivery", subTitle: "1-2 day" },
  { item: <IoHome />, title: "In-stock", subTitle: "Today" },
  { item: <IoIosCloudDone />, title: "Guaranteed", subTitle: "1 year" },
];

export const characteristicsLogos = [
  { item: <MdPhoneAndroid /> },
  { item: <BsCpu /> },
  { item: <LuCpu /> },
  { item: <IoCameraOutline /> },
  { item: <IoMdReverseCamera /> },
  { item: <GiBattery75 /> },
];

export const bannerLinks = [
  {
    logo: "/popularItems/1.png",
    title: "Popular Products",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
  },
  {
    logo: "/popularItems/2.png",
    title: "iPad Pro",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
  },
  {
    logo: "/popularItems/3.png",
    title: "Samsung Galaxy",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
  },
  {
    logo: "/popularItems/4.png",
    title: "Macbook Pro",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
  },
];

export const cartItems = [
  {
    id: "#25139526913984",
    img: "/cart/Iphone14.png",
    name: "Apple iPhone 14 Pro Max Deep Purple",
    price: 1399,
    quantity: 1,
  },
  {
    id: "#25139526913984",
    img: "/cart/Iphone14.png",
    name: "Apple iPhone 14 Pro Max Deep Purple",
    price: 1399,
    quantity: 1,
  },
  {
    id: "#25139526913984",
    img: "/cart/Iphone14.png",
    name: "Apple iPhone 14 Pro Max Deep Purple",
    price: 1399,
    quantity: 1,
  },
  {
    id: "#25139526913984",
    img: "/cart/Iphone14.png",
    name: "Apple iPhone 14 Pro Max Deep Purple",
    price: 1399,
    quantity: 1,
  },
  {
    id: "#25139526913984",
    img: "/cart/Iphone14.png",
    name: "Apple iPhone 14 Pro Max Deep Purple",
    price: 1399,
    quantity: 1,
  },
];
