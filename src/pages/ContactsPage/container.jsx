import React from 'react';

import ContactsPageView from './view';
import ApiService from "../../services/apiService";

const columns = [{
  title: 'Name', dataIndex: 'name', key:'name', width: 100,
},{
  title: 'Surname', dataIndex: 'surname', key:'surname', width: 100,
}, {
  title: 'Birthday', dataIndex: 'birthday', key:'birthday', width: 100,
}, {
  title: 'Country', dataIndex: 'country', key:'country', width: 100,
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
