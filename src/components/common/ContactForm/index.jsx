import React from 'react';
import PropTypes from 'prop-types';

import ContactFormView from './view';

const DEFAULT_DATA = {
  name: '',
  surname: '',
  lastname: '',
  gender: null,
  birthday: null,
  nationality: '',
  maritalStatus: null,
  webSite: '',
  email: '',
  company: '',
  country: '',
  city: '',
  street: '',
  house: '',
  flat: '',
  postcode: '',
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        ...DEFAULT_DATA,
        ...props.initialData,
      },
      isLoading: false,
      isSuccessfullySubmitted: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    const data = {
      ...this.state.data,
      [name]: value,
    };
    this.setState({ data });
  };

  handleGenderChange = (gender) => {
    const data = {
      ...this.state.data,
      gender: gender.value,
    };
    this.setState({ data });
  };

  handleBirthdayChange = (birthday) => {
    const data = {
      ...this.state.data,
      birthday,
    };
    this.setState({ data });
  };

  handleMaritalStatusChange = (maritalStatus) => {
    const data = {
      ...this.state.data,
      maritalStatus: maritalStatus.value,
    };
    this.setState({ data });
  };

  handleSubmit = () => {
    const { data } = this.state;

    this.props.onSubmit(data);
  };

  render() {
    const { data, isLoading, isSuccessfullySubmitted } = this.state;
    const genderOptions = [
      { value: null, label: 'N/A' },
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
    ];
    const maritalStatusOptions = [
      { value: null, label: 'N/A' },
      { value: 'not_married', label: 'not married' },
      { value: 'divorced', label: 'divorced' },
      { value: 'married', label: 'married' },
      { value: 'civic_marriage', label: 'civic marriage' },
    ];

    return (
      <ContactFormView
        data={data}
        genderOptions={genderOptions}
        maritalStatusOptions={maritalStatusOptions}
        isLoading={isLoading}
        isSuccessfullySubmitted={isSuccessfullySubmitted}
        onChange={this.handleChange}
        onGenderChange={this.handleGenderChange}
        onBirthdayChange={this.handleBirthdayChange}
        onMaritalStatusChange={this.handleMaritalStatusChange}
        onSubmitClick={this.handleSubmit}
      />
    );
  }
}

ContactForm.defaultProps = {
  initialData: {},
};

ContactForm.propTypes = {
  initialData: PropTypes.shape({
    name: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
