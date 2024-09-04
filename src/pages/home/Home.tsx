import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <section className="section">
        <div className="container mx-auto">
          <div className="flex items-center  gap-3 mx-auto">
            <figure>
              <img src="https://shopwise-demo.myshopify.com/cdn/shop/files/shop_banner_img1_1024x1024.jpg" />
            </figure>
            <figure>
              <img src="https://shopwise-demo.myshopify.com/cdn/shop/files/shop_banner_img2_1024x1024.jpg" />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
