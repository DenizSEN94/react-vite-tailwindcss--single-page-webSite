import { apple, bill, google } from "../../assets";
import styles, { layout } from "../../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        className="w-[100%] h-[100%] relative z-[5]"
        src={bill}
        alt="Billing"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Lorem Ipsun Lorem <br className="sm:block hidden" />
        Ipsun & Lorem...
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here, content here, making it look
        like readable English.
      </p>
      <div className="flex flex-row flex-wrap mt-6 sm:mt-10">
        <img
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          src={apple}
          alt="Apple"
        />
        <img
          className="w-[128px] h-[42px] object-contain cursor-pointer"
          src={google}
          alt="Google"
        />
      </div>
    </div>
  </section>
);
export default Billing;
