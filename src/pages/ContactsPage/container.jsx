import React from 'react';

import ContactsPageView from './view';
import ApiService from "../../services/apiService";

const columns = [{
  title: 'Name', dataIndex: 'name', key:'name', className: 'asd', render: (value) => {
    console.log(value);
    return value;
  }
},{
  title: 'Surname', dataIndex: 'surname', key:'surname',
}, {
  title: 'Birthday', dataIndex: 'birthday', key:'birthday',
}, {
  title: 'Country', dataIndex: 'country', key:'country',
}];

class ContactsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.init();
  }

  init = () => {
    ApiService.call({
      method: 'get',
      url: '/contacts',
    })
      .then((response) => {
        this.setState({ data: response.data.content });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { data } = this.state;
    return (
      <ContactsPageView
        columns={columns}
        data={data}
        onChange={this.handleChange}
        onClick={this.handleSubmit}
      />
    );
  }
}

export default ContactsPage;
