import { FC } from 'react';
import Image from 'next/image';
import styles from './SpiderManHeroSection.module.scss'
const SpiderManHeroSection:FC = () => {
  return (
    <section>
    <Image className={styles.spider} priority src='/images/SpiderHero.jpg' width={1440} height={810} alt="spider man"/>
    </section>
  )
}
export default SpiderManHeroSection