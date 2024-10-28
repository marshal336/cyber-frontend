import { PAGES_DASHBOARD } from "@/utils";
import { CiHeadphones, CiCamera } from "react-icons/ci";
import { FaFacebookSquare, FaHome, FaInstagramSquare, FaTiktok, FaUsers } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { TbLogs, TbDeviceWatch } from "react-icons/tb";
import { MdPhoneIphone, MdOutlineVideogameAsset } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";


export const headerLinks = [
  { logo: <FaHome />, title: 'Home', link: PAGES_DASHBOARD.HOME },
  { logo: <FaUsers />, title: 'About', link: PAGES_DASHBOARD.ABOUT },
  { logo: <IoMdContact />, title: 'Contact Us', link: PAGES_DASHBOARD.CONTACT },
  { logo: <TbLogs />, title: 'Blog', link: PAGES_DASHBOARD.BLOG },
]

export const categoryLinks = [
  { icon: <MdPhoneIphone />, title: "Phones", link: `${PAGES_DASHBOARD.CATALOG}/smartphones` },
  { icon: <TbDeviceWatch />, title: "Smart Watches", link: `${PAGES_DASHBOARD.CATALOG}/watches` },
  { icon: <CiCamera />, title: "Cameras", link: `${PAGES_DASHBOARD.CATALOG}/camera` },
  { icon: <CiHeadphones />, title: "Headphones", link: `${PAGES_DASHBOARD.CATALOG}/headphones` },
  { icon: <HiMiniComputerDesktop />, title: "Computers", link: `` },
  { icon: <MdOutlineVideogameAsset />, title: "Gaming", link: `` },
];

export const bigSalelogos = [
  { src: '/ipadone.png' },
  { src: '/ipadtwo.png' },
  { src: '/mac.png' },
  { src: '/i.png' },
  { src: '/watch.png' },
]

export const footerLinks = [
  {
    title: 'Services', items: [
      { title: 'Bonus program' },
      { title: 'Gift cards' },
      { title: 'Credit and payment' },
      { title: 'Service contracts' },
      { title: 'Non-cash account' },
      { title: 'Payment' },
    ]
  },
  {
    title: 'Assistance to the buyer', items: [
      { title: 'Find an order' },
      { title: 'Terms of delivery' },
      { title: 'Exchange and return of goods' },
      { title: 'Guarantee' },
      { title: 'Frequently asked questions' },
      { title: 'Terms of use of the site' },
    ]
  }
]

export const footerLogos = [
  { logo: <FaInstagramSquare /> },
  { logo: <FaFacebookSquare /> },
  { logo: <FaTiktok /> },
  { logo: <FaFacebookSquare /> },
]