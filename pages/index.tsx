import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>Hey Hey Thriend!!! Glad to see you here we have a some rewards for you.</h1>
      <div>
      <button className="tw-connect-wallet css-hfyyri" style={{ position: 'absolute', left: '200px', top: '15px'}}
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='https://thriends.io';
      }}
> Home</button></div>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("https://mint.thriends.io")}
        >
          {/* Mint a new NFT */}
          <Image src="/icons/LoyaltyCardMint.png" alt="drop" width={100} height={64} />
          <h2 className={styles.selectBoxTitle}>Mint Thriends</h2>
          <p className={styles.selectBoxDescription}>
            Mint your self a Thriend and join the Threaded community!
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/stake")}
        >
          {/* Staking an NFT */}
          <Image src="/icons/LoyaltyCardStake.png" alt="token" width={100} height={64} />
          <h2 className={styles.selectBoxTitle}>Stake Thriends</h2>
          <p className={styles.selectBoxDescription}>
            Stake your Thriend to claim Thriend Meme Token!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
