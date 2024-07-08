import React, { PureComponent } from 'react';
import API from '../../services/api';
import Button from '../Button/Button';
import style from './Search.module.scss';

export interface IProps {
  placeholder: string;
  value: string;
}

class Search extends PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);

    const { value } = this.props;
    this.state = {
      value,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e: React.FormEvent) => {
    const { value } = e.target as HTMLInputElement;
    this.setState({ value });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { value } = this.state as IProps;

    if (value || value === '') {
      localStorage.setItem('searchValue', value);
    }

    API.getData(value)
      .then((res) => {
        localStorage.setItem('searchResult', JSON.stringify(res.animals));

        this.setState({ value });
        window.dispatchEvent(new Event('storage'));
      })
      .catch(() => {
        return 'Error with search response';
      });
  };

  render() {
    const { placeholder } = this.props;
    const { value } = this.state as IProps;

    return (
      <form onSubmit={this.handleSubmit} className={style.form}>
        <input
          type="text"
          className={style.input}
          placeholder={placeholder}
          onChange={this.handleChange}
          value={value}
        />
        <Button name="Submit" />
      </form>
    );
  }
}

export default Search;
