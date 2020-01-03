import React from 'react';

import UsersPageView from './view';
import ApiService from '../../services/apiService';

class UsersPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      pageCount: 0,
      currentPage: 0,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const {currentPage} = this.state;

    ApiService.call({
      method: 'get',
      url: `/users?page=${currentPage}&size=10`,
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
      });
  };

  handlePageClick = (data) => {
    this.setState({
      currentPage: data.selected,
    }, this.fetchData);
  };

  render() {
    const {data, pageCount} = this.state;
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
      }];

    return (
      <UsersPageView
        columns={columns}
        data={data}
        pageCount={pageCount}
        onPageChange={this.handlePageClick}
      />
    );
  }
}

export default UsersPage;
