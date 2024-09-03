import Navigation from "./Navigation";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <header>
      {/* Top header */}
      <TopHeader />
      <div className="border-t-2"></div>
      {/* bottom header */}
      <div className="shadow-md bottom-header">
        <div className="container mx-auto py-3">
          <div className="flex items-center justify-between">
            <figure className="flex justify-center ">
              <img
                src="https://shopwise-demo.myshopify.com/cdn/shop/files/logo_dark_185x.png"
                alt="Shopwise logo"
              />
            </figure>
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
