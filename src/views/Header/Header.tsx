import { PureComponent } from 'react';
import Button from '../../components/Button/Button';
import Search from '../../components/Search/Search';
import style from './Header.module.scss';

export interface IProps {
  hasError?: boolean;
}
class Header extends PureComponent {
  constructor(props: IProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({
      hasError: true,
    });
  };

  render() {
    const { hasError } = this.state as IProps;
    if (hasError) {
      throw new Error('Error after button click');
    }
    return (
      <div className={style.wrapper}>
        <Search
          placeholder="Search..."
          value={localStorage.getItem('searchValue') ?? ''}
        />

        <Button
          onClick={this.handleSubmit}
          name="Show Error"
          className={style.errorButton}
        />
      </div>
    );
  }
}

export default Header;
