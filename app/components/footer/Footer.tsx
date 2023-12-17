import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop Categories</h3>
            <Link href="/?category=Phone">Phones</Link>
            <Link href="/?category=Laptop">Laptops</Link>
            <Link href="/?category=Desktop">Desktops</Link>
            <Link href="/?category=Watch">Watches</Link>
            <Link href="/?category=Tv">TVs</Link>
            <Link href="/?category=Accesories">Accessories</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Returns & Exchanges</Link>
            <Link href="#">FAQs</Link>
          </FooterList>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Me</h3>
            <p className="mb-2">
              Hi, Im Monir. Im a tech enthusiast just like you. I love to create
              tech content with good video editing. On this channel, youll find
              informative & fun-to-watch tech content in the Bangla language.
            </p>
            <p>&copy; {new Date().getFullYear()} TGHP. All rights reserved</p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="https://www.facebook.com/mtghp">
                <MdFacebook size={24} />
              </Link>
              <Link href="https://www.youtube.com/@tgHodgepodge">
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link href="https://www.youtube.com/@tgHodgepodge">
                <AiFillInstagram size={24} />
              </Link>
              <Link href="https://www.youtube.com/@tgHodgepodge">
                <AiFillYoutube size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
