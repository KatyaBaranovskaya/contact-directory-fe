import React from 'react';

import ContactsPageView from './view';
import ApiService from "../../services/apiService";
import {APP_LIFE_CYCLE_EVENTS, AppLifecycle} from "../../services/events/appLifecycle";
import {navigate} from "@reach/router";

const columns = [{
  title: 'Name', dataIndex: 'name', key:'name', width: 100,
}, {
  title: 'Age', dataIndex: 'age', key:'age', width: 100,
}, {
  title: 'Address', dataIndex: 'address', key:'address', width: 200,
}, {
  title: 'Operations', dataIndex: '', key:'operations', render: () => <a href="#">Delete</a>,
}];

const data = [
  { name: 'Jack', age: 28, address: 'some where', key:'1' },
  { name: 'Rose', age: 36, address: 'some where', key:'2' },
];

class ContactsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
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
        console.log(response);
        // this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
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
