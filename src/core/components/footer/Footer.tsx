import {
  IconBrandFacebook,
  IconBrandGoogle,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <>
      <div className=" bg-red-600 py-16">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <h4 className="text-white text-3xl">Subscribe Our Newsletter</h4>
            <div className="flex items-center h-5">
              <input
                className="focus:outline-none px-8 py-3 capitalize"
                type="text"
                placeholder="Enter email address"
              />
              <button className="bg-slate-900 border-0 px-8 py-3 text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-slate-900 text-white py-4 ">
        <div className="container mx-auto py-8">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-6 ">
              <figure>
                <img
                  src="https://shopwise-demo.myshopify.com/cdn/shop/files/logo_light_393783f2-8356-4605-8bea-4f335efde538.png"
                  alt="Shopwise white logo"
                />
              </figure>
              <p className="text-sm">
                If you are going to use of Lorem Ipsum need to be sure there
                isn't hidden of text
              </p>
              <div className="flex items-center gap-2">
                <IconBrandFacebook />
                <IconBrandTwitter />
                <IconBrandGoogle />
                <IconBrandYoutube />
                <IconBrandInstagram />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-xl">Useful links</h4>
              <ul className="flex flex-col gap-1">
                <li className="text-sm">About Us</li>
                <li className="text-sm">FAQ</li>
                <li className="text-sm">Location</li>
                <li className="text-sm">Affiliates</li>
                <li className="text-sm">Contact</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-xl">Useful links</h4>
              <ul className="flex flex-col gap-1">
                <li className="text-sm">About Us</li>
                <li className="text-sm">FAQ</li>
                <li className="text-sm">Location</li>
                <li className="text-sm">Affiliates</li>
                <li className="text-sm">Contact</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-xl">Useful links</h4>
              <ul className="flex flex-col gap-1">
                <li className="text-sm">About Us</li>
                <li className="text-sm">FAQ</li>
                <li className="text-sm">Location</li>
                <li className="text-sm">Affiliates</li>
                <li className="text-sm">Contact</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-xl">Useful links</h4>
              <ul className="flex flex-col gap-1">
                <li className="text-sm">About Us</li>
                <li className="text-sm">FAQ</li>
                <li className="text-sm">Location</li>
                <li className="text-sm">Affiliates</li>
                <li className="text-sm">Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-b-2 py-4 border-gray-700"></div>
        <div className="container mx-auto py-8">
          <div className="flex items-center justify-between">
            <p className="text-sm">
              © 2023 All Rights Reserved by Bestwebcreator
            </p>
            <figure>
              <img
                src="https://shopwise-demo.myshopify.com/cdn/shop/files/footer-3.png"
                alt="payment gateway"
              />
            </figure>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
