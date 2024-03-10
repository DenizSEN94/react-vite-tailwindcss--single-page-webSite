import styles from "../../style";
import { clients } from "../../constants";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((item) => (
        <div
          className={`flex-1 ${styles.flexCenter} min-w-[120px] sm:min-w-[192px]`}
          key={item.id}
        >
          <img
            className="w-[100px] sm:w-[192px] object-contain"
            src={item.logo}
            alt="Logo"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
