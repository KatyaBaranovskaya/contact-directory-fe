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
  photo: '',
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        ...DEFAULT_DATA,
        ...props.initialData,
      },
      imageFile: null,
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

  handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (file.type.includes('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
          const data = {
            ...this.state.data,
            imageSrc: reader.result,
            photo: file.name,
          };
          this.setState({
            data,
            imageFile: file,
          });
        };
        reader.readAsDataURL(file);
      }
    }
  };

  handleSubmit = () => {
    const { data, imageFile } = this.state;
    const submittedData = {
      ...data,
      birthday: data.birthday && data.birthday.toISOString().split('T')[0],
    };

    this.props.onSubmit(submittedData, imageFile);
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
        onFileChange={this.handleFileChange}
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
    surname: PropTypes.string,
    lastname: PropTypes.string,
    gender: PropTypes.object,
    birthday: PropTypes.object,
    nationality: PropTypes.string,
    maritalStatus: PropTypes.object,
    webSite: PropTypes.string,
    email: PropTypes.string,
    company: PropTypes.string,
    country: PropTypes.string,
    city: PropTypes.string,
    street: PropTypes.string,
    house: PropTypes.string,
    flat: PropTypes.string,
    postcode: PropTypes.string,
    photo: PropTypes.string,
    imageSrc: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
