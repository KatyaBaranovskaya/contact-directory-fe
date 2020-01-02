import React from 'react';
import { NotificationManager } from 'react-notifications';

import ContactsPageView from './view';
import ApiService from "../../services/apiService";

class ContactsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
    console.log("Send email");
  };

  render() {
    const { data, pageCount } = this.state;
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
        title: 'Birthday',
        dataIndex: 'birthday',
        key: 'birthday',
      },
      {
        title: 'Country',
        dataIndex: 'country',
        key: 'country',
      }];

    return (
      <ContactsPageView
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
