import styles from "../../style";
import { logo } from "../../assets";
import { footerLinks, socialMedia } from "../../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex flex-1 flex-col justify-start mr-10">
        <img
          className="w-[266px] h-[72px] object-contain"
          src={logo}
          alt="Logo"
        />
        <p className={`${styles.paddingY} mt-4 max-w-[310px] text-dimWhite`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((item) => (
          <div
            className="flex- flex-col ss:my-0 my-4 min-w-[150px]"
            key={item.key}
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white mb-2">
              {item.title}
            </h4>
            <ul className="list-none mt-4">
              {item.links.map((link) => (
                <li
                  className="font-poppins font-normal text-[16px] leading-[24px] mb-3 text-dimWhite hover:text-secondary"
                  key={link.key}
                >
                  <a href={`#${link.link}`}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div
      style={{ borderTop: "1px solid #3f3r45" }}
      className="w-full flex justify-between items-center md:flex-row flex-col pt-6"
    >
      <p className="font-poppins text-center font-normal text-[18px] leading-[27px] text-dimWhite">
        &copy; 2024 &copy;
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((item, index) => (
          <img
            className={`w-[21px] h-[21px] object-contain cursor-pointer mr-6`}
            key={index}
            src={item.icon}
            alt="Icon"
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
