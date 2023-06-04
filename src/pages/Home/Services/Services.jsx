
import logo2 from "../../../assets/cardLogo.jpg"


const Services = () => {
  return (
    <div className="my-12 container mx-auto">
      <h1 className="text-4xl font-bold text-center ">
        Our Awesome <span className="text-secondary">Services</span>
      </h1>
      <div className="grid md:grid-cols-3 my-8">
        <div className="card mb-4 mx-4  hover:shadow-2xl shadow md:w-96 sm:w-72 text-center p-5 ">
          <img
            className="h-12 w-12 rounded mx-auto mb-4  "
            src={logo2}
            alt=""
          />
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Anti Age Face Treatment</h2>
            <h4 className="text-secondary">$199</h4>
            <p>
              We craft stunning and amazing
              <br /> web UI, using a well drrafted UX
              <br /> to fit your product.
            </p>
          </div>
        </div>
        <div className="card mb-4 mx-4  hover:shadow-2xl shadow md:w-96 sm:w-72 text-center p-5 ">
          <img className="h-12 w-12 rounded mx-auto mb-4" src={logo2} alt="" />
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Hair Color & Styleing</h2>
            <h4 className="text-secondary">$99</h4>
            <p>
              Amazing flyers, social media <br /> posts and brand
              representations
              <br /> that would make your brand
              <br /> stand out.
            </p>
          </div>
        </div>
        <div className="card mb-4 mx-4  hover:shadow-2xl shadow md:w-96 sm:w-72 text-center p-5  ">
          <img className="h-12 w-12 rounded mx-auto mb-4" src={logo2} alt="" />
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Skin Care Treatment</h2>
            <h4 className="text-secondary">$199</h4>
            <p>
              With well written codes, we
              <br /> build amazing apps for all
              <br /> platforms, mobile and web
              <br /> apps in general.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="btn  btn-secondary ">Explore more</button>
      </div>
    </div>
  );
};

export default Services;