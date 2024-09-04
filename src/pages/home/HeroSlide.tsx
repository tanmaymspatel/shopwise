const HeroSlide = () => {
  return (
    <div className="bg-[url('https://shopwise-demo.myshopify.com/cdn/shop/files/banner2.jpg')] hero-slider-image">
      <div className="container mx-auto h-[100%]">
        <div className="flex flex-col justify-center items-start h-full gap-4">
          <p>50% off in all products</p>
          <h2 className="text-6xl font-bold">Men Fashion</h2>
          <button
            className="relative text-white px-10 py-4 bg-red-600 text-xl border-4 border-red-600
             before:bg-red-600 before:w-[51%] before:absolute before:left-0 before:top-0 before:bottom-0 before:transition-all before:-z-10 before:duration-500 
             after:bg-red-600 after:w-[51%] after:absolute after:right-0 after:top-0 after:bottom-0 after:transition-all after:-z-10 after:duration-500 
                hover:bg-transparent hover:z-0 hover:text-red-600 hover:before:w-0 hover:after:w-0 hover:before:z-10 hover:after:z-10 "
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
