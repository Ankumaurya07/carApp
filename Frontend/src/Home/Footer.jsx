import git from "../images/icons8-github-50 (1).png"
import linkdin from "../images/icons8-linkedin-50.png"
import insta from "../images/icons8-instagram-50.png"



const Footer = () => {
  return (
    <footer
      id="contact"
      className=" bg-cover mt-5 bg-black bg-center bg-no-repeat text-white pt-24 pb-6"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Logo + About */}
          <div className="lg:w-5/12">
            <h3 className="text-3xl font-bold text-purple-600 mb-4">carwale</h3>
            <p className="text-sm font-semibold leading-relaxed text-justify">
              At CarWale, we're dedicated to making your car buying experience as smooth as the road
              ahead. With a wide range of brands, expert guidance, secure transactions, and innovative
              features, we're your trusted partner on your journey to finding the perfect ride. Drive
              your dreams with CarWale, where your satisfaction is our ultimate destination.
            </p>
          </div>

          {/* Contact */}
          <div className="lg:w-4/12">
            <h3 className="uppercase text-xl font-bold text-purple-600 mb-4">Contact</h3>
            <p className="text-sm font-semibold mb-2">dodiyameet041@gmail.com</p>
            <p className="text-sm font-semibold leading-relaxed">
              K.T Marg, Vidyavardhini's College of Engineering and Technology,
              <br /> Vasai, Maharashtra, India
            </p>
          </div>

          {/* Social Media */}
          <div className="lg:w-3/12">
            <h3 className="uppercase text-xl font-bold text-purple-600 mb-4">Social Media</h3>
            <div className=" flex space-x-6">
             <a href="https://github.com/Ankumaurya07" target="_blank">
                <img src={git} sizes="30" className=" bg-white rounded-4xl" />
             </a>
             <a href="https://www.linkedin.com/in/mauryaankit9537/" target="_blank">
                <img src={linkdin} sizes="30" className=" bg-white rounded-4xl" />
             </a>
             
          </div>
          <div className=" mt-2.5">
             <a href="https://www.instagram.com/mr.ankitt953?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                <img src={insta} sizes="30" className=" bg-white rounded-2xl" />
             </a>
             </div>
        </div>
        </div>

        {/* Footer Credits */}
        <div className="text-center text-sm border-t border-white pt-6 mt-10 font-semibold">
          © Made BY Ankit Maurya
        </div>
      </div>
    </footer>
  );
};

export default Footer;
