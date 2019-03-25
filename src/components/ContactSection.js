import React, { useReducer } from "react"
import styled from "styled-components"
import Heading from "./Heading"
import Title from "./Title"
import Button from "./Button"
import Section from "./Section"

const Form = styled.form`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: auto;
  max-width: 300px;
`

const Input = styled.input`
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px;
  background: #fdfdfd;

  :focus {
    outline-color: #333;
  }
`

const FormButton = styled(Button)`
  -ms-flex-item-align: start;
  align-self: flex-start;
`

const initialState = {
  name: "",
  email: "",
  message: "",
}

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload }
    case "email":
      return { ...state, email: action.payload }
    case "message":
      return { ...state, message: action.payload }
    default:
      return state
  }
}

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const handleChange = e => {
    if (e.target.name === "_replyto") {
      dispatch({ type: "email", payload: e.target.value })
    } else {
      dispatch({ type: e.target.name, payload: e.target.value })
    }
  }

  return (
    <Section dark={true} id="contact">
      <Heading>
        <Title>Contact</Title>
      </Heading>

      <Form action="https://Fspree.io/glynlewington@gmail.com" method="POST">
        <Input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={state.name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="_replyto"
          placeholder="Email"
          required
          value={state.email}
          onChange={handleChange}
        />
        <Input
          as="textarea"
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
          required
          value={state.message}
          onChange={handleChange}
        />
        <FormButton as="input" type="submit" value="Send" />
        <input type="hidden" name="_next" value="/" /> {/* redirect to home */}
      </Form>
    </Section>
  )
}
