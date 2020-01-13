import React from 'react';
import { NotificationManager } from 'react-notifications';
import { navigate } from '@reach/router';
import queryString from 'query-string';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from '@reach/router';

import ContactsPageView from './view';
import ApiService from '../../services/apiService';
import { filterSearchParams } from '../../helpers/search';

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
      url: `/contacts?${queryParams}`,
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
    this.setState({ gender: gender.value });
  };

  handleBirthdayChange = (birthday) => {
    this.setState({ birthday });
  };

  handleSearch = () => {
    const { name, surname, lastname, gender, birthday, country } = this.state;
    const searchParams = {
      name,
      surname,
      lastname,
      gender,
      birthday: birthday && birthday.toISOString().split('T')[0],
      country,
    };

    this.setState({
      searchParams: filterSearchParams(searchParams),
      currentPage: 0,
    }, this.fetchData);
  };

  handleClear = () => {
    this.setState({
      name: '',
      surname: '',
      lastname: '',
      gender: null,
      birthday: null,
      country: '',
      searchParams: {},
      currentPage: 0,
    }, this.fetchData);
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
    navigate('/contacts/create');
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
        title: '',
        dataIndex: 'icon',
        key: 'icon',
        render: (value, record) => (
          <Link to={`/contacts/${record.id}`}><FontAwesomeIcon icon={faUserEdit} /></Link>
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
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
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
