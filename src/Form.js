import React from 'react';

export default function Form(props) {
  const { disabled, change, submit, errors, form } = props;
  return (
    <>
      <div>
        <h1>Build your own Pizza! 👾</h1>
      </div>
      {/* <div style={{ color: 'red' }}>
        <div>{errors.name}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
        <div>{errors.agree}</div>
      </div> */}
      <form id="pizza-form">
        <label>
          Name
          <input id="name-input" name="name" type="text" />
        </label>
        {/* <label>
          Email
          <input
            onChange={change}
            value={form.email}
            name="email"
            type="email"
          />
        </label>
        <label>
          Password
          <input
            onChange={change}
            value={form.password}
            name="password"
            type="password"
          />
        </label>
        <label>
          Terms Of Service<span> </span>
          <input
            onChange={change}
            checked={form.agree}
            name="agree"
            type="checkbox"
          />
        </label>
        <button disabled={disabled}>Submit!</button> */}
      </form>
    </>
  );
}
