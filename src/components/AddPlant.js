/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import axios from "axios";

import Alert from "./Alert";
import StyledAddPlantForm from "../styles/styled-add-plant";

import {
  StyledLabel,
  StyledInput,
  StyledSelect,
  StyledSmallSelect,
  StyledButton,
} from "../styles/styled-form-components";

const AddPlant = () => {
  const initialState = {
    fields: {
      title: "",
      img: "",
      name: "Test Plant",
      type: "",
      description: "Test Plant - green leafy perenial, 20cm tall",
      category: "? swap/for sale/free or seed/cutting/plant etc.",
      user: "",
      price: 1,
    },
    alert: {
      message: "",
      success: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddPlant = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);

    const postData = async () => {
      setAlert(initialState.alert);

      await axios
        .post(
          "https://stormy-depths-48903.herokuapp.com/api/v2/PropertyListing",
          data
        )

        .then((res) => {
          if (res.status === 201) {
            setAlert({
              message: "Successfully added new plant!",
              success: true,
            });
          }
        })
        .catch((error) => {
          setAlert({
            message: error.message,
            success: false,
          });
        });
    };

    const validate = () => {
      let isTitleValid;
      let isEmailValid;

      const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      };

      // eslint-disable-next-line no-unused-expressions
      fields.title === null || fields.title.trim() === ""
        ? (isTitleValid = false)
        : (isTitleValid = true);
      // eslint-disable-next-line no-unused-expressions
      !validateEmail(fields.email)
        ? (isEmailValid = false)
        : (isEmailValid = true);

      // eslint-disable-next-line no-unused-expressions
      isTitleValid && isEmailValid
        ? postData()
        : !isTitleValid && !isEmailValid
          ? setAlert({ message: "Please add a valid title and email address!" })
          : !isEmailValid
            ? setAlert({ message: "Please add a valid email address!" })
            : setAlert({ message: "Please add a valid title!" });

      return alert;
    };

    validate();

    setFields(initialState.fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div
      className="AddPlant"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <StyledAddPlantForm>
        <form onSubmit={handleAddPlant}>
          <input type="file" name="img" accept="image/*" />
          <StyledLabel htmlFor="title">
            Title
            <br />
            <StyledInput
              id="title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </StyledLabel>
          <StyledLabel htmlFor="type">
            Type
            <StyledSelect
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
              style={{ width: "200px", marginLeft: "10px" }}
            >
              <option value="Seeds">Seeds</option>
              <option value="Cutting">Cutting</option>
              <option value="Bulbs">Bulbs</option>
              <option value="Plant - divided from existing">Plant divided from existing</option>
              <option value="Plant - no longer wanted">Plant no longer wanted</option>
              <option value="Plant - grown from cutting">Plant grown from cutting</option>
            </StyledSelect>
          </StyledLabel>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <StyledLabel htmlFor="bedrooms">
              Bedrooms
              <br />
              <StyledSmallSelect
                id="bedrooms"
                name="bedrooms"
                value={fields.bedrooms}
                onChange={handleFieldChange}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5+</option>
              </StyledSmallSelect>
            </StyledLabel>
            <StyledLabel htmlFor="bathrooms">
              Bathrooms
              <br />
              <StyledSmallSelect
                id="bathrooms"
                name="bathrooms"
                value={fields.bathrooms}
                onChange={handleFieldChange}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3+</option>
              </StyledSmallSelect>
            </StyledLabel>
            <StyledLabel htmlFor="price">
              Price
              <br />
              <StyledSelect
                id="price"
                name="price"
                value={fields.price}
                onChange={handleFieldChange}
              >
                <option value={0.00}>£0 </option>
                <option value={0.25}>£0.25</option>
                <option value={0.50}>£0.50</option>
                <option value={1.00}>£1.00</option>
                <option value={2.00}>£2.00</option>
                <option value={3.00}>£3.00</option>
                <option value={5.00}>£5.00</option>
                <option value={10.00}>£10.00</option>
                <option value={15.00}>£15.00</option>
                <option value={20.00}>£20.00</option>
              </StyledSelect>
            </StyledLabel>

            <StyledLabel htmlFor="city">
              City
              <br />
              <StyledSelect
                id="city"
                name="city"
                value={fields.city}
                onChange={handleFieldChange}
              >
                <option value="Manchester">Manchester</option>
                <option value="Leeds">Leeds</option>
                <option value="Sheffield">Sheffield</option>
                <option value="Liverpool">Liverpool</option>
              </StyledSelect>
            </StyledLabel>
          </div>

          <StyledLabel htmlFor="email">
            Email:
            <StyledInput
              id="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
              placeholder="john.smith@email.com"
            />
          </StyledLabel>

          <StyledButton type="submit" onSubmit={handleAddPlant}>
            Add
          </StyledButton>
        </form>
      </StyledAddPlantForm>
      {alert.message && <Alert {...alert} />}
    </div>
  );
};

export default AddPlant;
