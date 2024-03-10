import { stats } from "../../constants";
import styles from "../../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((item) => (
      <div
        key={item.id}
        className={`flex-1 flex justify-start items-center flex-row m-3`}
      >
        <h4 className="font-poppins font-semibold text-white text-[30px] leading-[43px] xs:text-[40px] xs:leading-[53px]">
          {item.value}
        </h4>
        <p className="font-poppins font-normal text-gradient text-[15px] leading-[21px] xs:text-[20px] xs:leading-[26px] ml-3 uppercase">
          {item.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
