import styles from "../../style";
import Button from "../button";

const CTA = () => (
  <section
    className={`${styles.flexStart} ${styles.marginY} ${styles.padding} flex-col sm:flex-row bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Lets try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here, content here, making it look
        like readable English.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button styles="md:mt-20" />
    </div>
  </section>
);

export default CTA;
