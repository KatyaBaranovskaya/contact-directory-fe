import React from 'react';
import queryString from 'query-string';
import { navigate } from '@reach/router';

import UsersPageView from './view';
import ApiService from '../../services/apiService';
import { filterSearchParams } from '../../helpers/search';
import { Toggle } from '../../components/common';

class UsersPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      surname: '',
      lastname: '',
      active: null,
      isLoading: false,
      isSuccessfullySubmitted: false,
      data: [],
      pageCount: 0,
      currentPage: 0,
      searchParams: {},
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const { currentPage, searchParams } = this.state;
    const queryParams = queryString.stringify({
      ...searchParams,
      page: currentPage,
      size: 10,
    });

    ApiService.call({
      method: 'get',
      url: `/users?${queryParams}`,
    })
      .then((response) => {
        this.setState({
          data: response.data.content,
          pageCount: response.data.totalPages,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          data: [],
          pageCount: 0,
        });
        navigate(`/error?error=${error.response.data}`);
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleActiveChange = (active) => {
    this.setState({ active: active.value });
  };

  handleSearch = () => {
    const { surname, lastname, active } = this.state;
    const searchParams = {
      surname,
      lastname,
      active,
    };

    this.setState({
      searchParams: filterSearchParams(searchParams),
      currentPage: 0,
    }, this.fetchData);
  };

  handleClear = () => {
    this.setState({
      surname: '',
      lastname: '',
      active: null,
      searchParams: {},
      currentPage: 0,
    }, this.fetchData);
  };

  handleToggle = (data) => {
    const { id, active } = data;

    ApiService.call({
      method: 'put',
      url: `/users/${id}/status`,
      data: { active: !active },
    })
      .then(() => {
        this.fetchData();
      })
      .catch((error) => {
        console.log(error);
        navigate(`/error?error=${error.response.data}`);
      });
  };

  handlePageClick = (data) => {
    this.setState({
      currentPage: data.selected,
    }, this.fetchData);
  };

  render() {
    const { surname, lastname, active, isLoading, isSuccessfullySubmitted, data, pageCount } = this.state;
    const columns = [
      {
        title: 'Surname',
        dataIndex: 'surname',
        key: 'surname',
      },
      {
        title: 'Lastname',
        dataIndex: 'lastname',
        key: 'lastname',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Active/Inactive',
        dataIndex: 'toogle',
        key: 'toogle',
        render: (value, record) => (
          <Toggle
            checked={record.active}
            onChange={() => this.handleToggle(record)}
          />
        )
      }];
    const options = [
      { value: null, label: 'All' },
      { value: 'true', label: 'Active' },
      { value: 'false', label: 'Inactive' },
    ];

    return (
      <UsersPageView
        surname={surname}
        lastname={lastname}
        active={active}
        options={options}
        isLoading={isLoading}
        isSuccessfullySubmitted={isSuccessfullySubmitted}
        onChange={this.handleChange}
        onActiveChange={this.handleActiveChange}
        onSearchClick={this.handleSearch}
        onClearClick={this.handleClear}
        columns={columns}
        data={data}
        pageCount={pageCount}
        onPageChange={this.handlePageClick}
      />
    );
  }
}

export default UsersPage;
