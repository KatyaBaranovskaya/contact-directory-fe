import React from 'react';

import { Button, TextInput, DateInput, Dropdown } from '../';
import './style.css';

function ContactFormView({
  data,
  errors,
  genderOptions,
  maritalStatusOptions,
  isLoading,
  isSuccessfullySubmitted,
  onChange,
  onGenderChange,
  onBirthdayChange,
  onMaritalStatusChange,
  onFileChange,
  onSubmitClick
}) {
  const hasErrors = Object.keys(errors).length !== 0;

  return (
    <div className="contact-form">
      <div className="contact-form__photo-wrapper">
        <img className="contact-form__photo-details"
             src={data.imageSrc || 'http://certified-disaster.com/wp-content/uploads/2017/05/team-member-1.png'}
             alt="your image"/>
        <input className="contact-form__photo-input" type="file" onChange={onFileChange} />
      </div>
      <div className="contact-form__fields-wrapper">
        <TextInput
          placeholder="Name"
          name="name"
          type="text"
          value={data.name}
          error={errors.name}
          onChange={onChange}
        />
        <TextInput
          placeholder="Surname"
          name="surname"
          type="text"
          value={data.surname}
          error={errors.surname}
          onChange={onChange}
        />
        <TextInput
          placeholder="Patronymic"
          name="lastname"
          type="text"
          value={data.lastname}
          error={errors.lastname}
          onChange={onChange}
        />
        <Dropdown
          placeholder="Gender"
          value={data.gender}
          error={errors.gender}
          options={genderOptions}
          onChange={onGenderChange}
        />
        <DateInput
          placeholder="Birthday"
          value={data.birthday}
          error={errors.birthday}
          onChange={onBirthdayChange}
        />
        <TextInput
          placeholder="Nationality"
          name="nationality"
          type="text"
          value={data.nationality}
          error={errors.nationality}
          onChange={onChange}
        />
        <Dropdown
          placeholder="Marital status"
          value={data.maritalStatus}
          error={errors.maritalStatus}
          options={maritalStatusOptions}
          onChange={onMaritalStatusChange}
        />
        <TextInput
          placeholder="Web site"
          name="webSite"
          type="text"
          value={data.webSite}
          error={errors.webSite}
          onChange={onChange}
        />
        <TextInput
          placeholder="Email"
          name="email"
          type="text"
          value={data.email}
          error={errors.email}
          onChange={onChange}
        />
        <TextInput
          placeholder="Company"
          name="company"
          type="text"
          value={data.company}
          error={errors.company}
          onChange={onChange}
        />
        <TextInput
          placeholder="Country"
          name="country"
          type="text"
          value={data.country}
          error={errors.country}
          onChange={onChange}
        />
        <TextInput
          placeholder="City"
          name="city"
          type="text"
          value={data.city}
          error={errors.city}
          onChange={onChange}
        />
        <TextInput
          placeholder="Street"
          name="street"
          type="text"
          value={data.street}
          error={errors.street}
          onChange={onChange}
        />
        <TextInput
          placeholder="House"
          name="house"
          type="text"
          value={data.house}
          error={errors.house}
          onChange={onChange}
        />
        <TextInput
          placeholder="Flat"
          name="flat"
          type="text"
          value={data.flat}
          error={errors.flat}
          onChange={onChange}
        />
        <TextInput
          placeholder="Postcode"
          name="postcode"
          type="text"
          value={data.postcode}
          error={errors.postcode}
          onChange={onChange}
        />
      </div>
      <div className="contact-form__btn-wrapper">
        <Button
          disabled={hasErrors || isLoading || isSuccessfullySubmitted}
          onClick={onSubmitClick}
          text="SUBMIT"
        />
      </div>
    </div>
  );
}

export default ContactFormView;
