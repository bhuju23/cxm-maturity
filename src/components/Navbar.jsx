import resoLogo from '../images/reso-logo.svg';
import resoLogoMobile from '../images/reso-logo-mobile.svg'

export const Navbar = () => {
  return (
    <>
      <header
        className="js-header fixed top-0 left-0 right-0 z-20 bg-navy-700 py-6 text-white"
      >
        <div className="o-container">
          <div className="flex flex-wrap items-center justify-between">
            <div className="logo w-[34px] md:w-[124px]">
              <a
                href="https://www.resolutiondigital.com.au/"
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <div className="hidden md:block">
                  <img src={resoLogo} alt="reso" />
                </div>
                <div className="md:hidden">
                  <img src={resoLogoMobile} alt="reso" />
                </div>
              </a>
            </div>
            <nav className="nav flex flex-wrap items-center justify-end pl-2 text-xs font-light leading-6 md:text-xl ">
              <a
                href="#book-a-consultant"
                className="js-anchor transition-color mr-2 rounded-full border-3 border-reso-orange py-2.5 px-2 text-xs font-bold leading-6 text-reso-orange duration-300 md:mr-10 md:px-7 md:text-sm lg:hover:bg-reso-orange lg:hover:text-white"
              >
                Book a consultation
              </a>
              <a
                href="https://www.resolutiondigital.com.au/contact-us/"
                target="_blank"
                rel="noreferrer"
             className="transition-color duration-300 ease-in-out lg:hover:text-yellow-600"
              >
                Contact us
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
