import React from 'react';

import ContactsPageView from './view';
import ApiService from "../../services/apiService";

const columns = [{
  title: '', dataIndex: 'checkbox', key: 'checkbox', render: (value) => {
    return (
      <input
        type="checkbox"
        // onChange={onChange}
      />
    );
  }
}, {
  title: 'Name', dataIndex: 'name', key: 'name',
}, {
  title: 'Surname', dataIndex: 'surname', key: 'surname',
}, {
  title: 'Birthday', dataIndex: 'birthday', key: 'birthday',
}, {
  title: 'Country', dataIndex: 'country', key: 'country',
}];

class ContactsPage extends React.Component {
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

  handleCreate = () => {
    console.log("Create");
  };

  handleDelete = () => {
    console.log("Delete");
  };

  handleSendEmail = () => {
    console.log("Send email");
  };

  render() {
    const { data, pageCount } = this.state;
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
