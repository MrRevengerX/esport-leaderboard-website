import { FaFacebookMessenger } from "react-icons/fa";

export default function Sponsors() {
  return (
    <div className=" flex flex-col items-center gap-6 px-5 py-20 text-white">
      <div className="max-w-xs text-center text-3xl font-semibold lg:flex lg:max-w-none lg:gap-3 lg:text-4xl">
        <h1 className="">
          Be a <span className="text-primary600">Sponsor</span>
        </h1>
        <span className="hidden lg:block"> - </span>
        <h1>Join Us Today!</h1>
      </div>

      <p className="text-center md:max-w-lg lg:max-w-4xl lg:font-light">
        Are you interested in sponsoring our tournament? Now is the perfect time
        to join forces with us and support this exciting event. Your sponsorship
        is immensely valuable to us, and we greatly appreciate your assistance.
      </p>
      <a
        href="https://www.facebook.com/MrRevengerX"
        className="duration flex items-center justify-center gap-3 rounded-lg bg-primary600 px-6 py-3 transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-primary600"
        target="_blank"
      >
        <FaFacebookMessenger /> Message Us
      </a>
    </div>
  );
}
