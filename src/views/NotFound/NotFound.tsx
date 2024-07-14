import { Link } from 'react-router-dom';
import image from '../../assets/404.svg';
import Button from '../../components/Button/Button';
import styles from './NotFound.module.scss';

function NotFound() {
  return (
    <div className={styles.errorWrapper}>
      <div>
        <img src={image} alt="Page not found" />
        <div className={styles.errorMessage}>
          <p>
            An error occurred, please try again later. <br />
            Click the button below to go to the home page.
          </p>
          <Link to="/">
            <Button name="Home page" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
