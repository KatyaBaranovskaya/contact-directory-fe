import React from 'react';
import { NotificationManager } from 'react-notifications';
import { navigate } from '@reach/router';

import ContactsPageView from './view';
import ApiService from '../../services/apiService';

class ContactsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      surname: '',
      lastname: '',
      gender: null,
      birthday: null,
      country: '',
      isLoading: false,
      isSuccessfullySubmitted: false,
      data: [],
      pageCount: 0,
      currentPage: 0,
      checkedList: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const { currentPage } = this.state;

    ApiService.call({
      method: 'get',
      url: `/contacts?page=${currentPage}&size=2`,
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

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleGenderChange = (gender) => {
    this.setState({ gender });
  };

  handleBirthdayChange = (birthday) => {
    this.setState({ birthday });
  };

  handleSearch = () => {
    console.log("search");
  };

  handleClear = () => {
    console.log("clear");
  };

  handlePageClick = (data) => {
    this.setState({
      currentPage: data.selected,
    }, this.fetchData);
  };

  handleCheckboxChange = (data) => {
    const checkedList = [...this.state.checkedList];

    const index = checkedList.indexOf(data.id);
    if (index !== -1) {
      checkedList.splice(index, 1);
    } else {
      checkedList.push(data.id);
    }

    this.setState({ checkedList });
  };

  handleCreate = () => {
    console.log("Create");
  };

  handleDelete = () => {
    const { checkedList } = this.state;

    ApiService.call({
      method: 'delete',
      url: `/contacts?id=${checkedList}`,
    })
      .then(() => {
        NotificationManager.success('Contacts were deleted successfully', 'Successfully');
        this.setState({ checkedList: [] });
        this.fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleSendEmail = () => {
    const { checkedList } = this.state;

    const url = checkedList.length > 0 ?
      `/email?ids=${checkedList}` :
      '/email';

    navigate(url);
  };

  render() {
    const { name, surname, lastname, gender, birthday, country, isLoading, isSuccessfullySubmitted, data, pageCount } = this.state;
    const columns = [
      {
        title: '',
        dataIndex: 'checkbox',
        key: 'checkbox',
        render: (value, record) => (
          <input type="checkbox" onChange={() => this.handleCheckboxChange(record)} />
        )
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Surname',
        dataIndex: 'surname',
        key: 'surname',
      },
      {
        title: 'Patronymic',
        dataIndex: 'lastname',
        key: 'lastname',
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
      },
      {
        title: 'Birthday',
        dataIndex: 'birthday',
        key: 'birthday',
      },
      {
        title: 'Country',
        dataIndex: 'country',
        key: 'country',
      }];
    const options = [
      { value: null, label: 'N/A' },
      { value: 'male', label: 'male' },
      { value: 'female', label: 'female' },
    ];

    return (
      <ContactsPageView
        name={name}
        surname={surname}
        lastname={lastname}
        gender={gender}
        birthday={birthday}
        country={country}
        options={options}
        isLoading={isLoading}
        isSuccessfullySubmitted={isSuccessfullySubmitted}
        onChange={this.handleChange}
        onGenderChange={this.handleGenderChange}
        onBirthdayChange={this.handleBirthdayChange}
        onSearchClick={this.handleSearch}
        onClearClick={this.handleClear}
        onCreateClick={this.handleCreate}
        onDeleteClick={this.handleDelete}
        onSendClick={this.handleSendEmail}
        columns={columns}
        data={data}
        pageCount={pageCount}
        onPageChange={this.handlePageClick}
      />
    );
  }
}

export default ContactsPage;
