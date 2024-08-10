import Image from 'next/image';
import Link from 'next/link';
import image from '../../../public/assets/404.svg';
import Button from '../../components/Button/Button';
import styles from './NotFound.module.scss';

function NotFound() {
  return (
    <div className={styles.errorWrapper}>
      <div>
        <Image
          width={500}
          height={500}
          src={image as string}
          alt="Page not found"
          priority
        />
        <div className={styles.errorMessage}>
          <div>
            An error occurred, please try again later. <br />
            Click the button below to go to the home page.
          </div>
          <Link href="/">
            <Button name="Home page" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
