import React, { useState } from 'react';
import './style.css';
import {useNavigate} from 'react-router-dom';

function RegistrationForm() {
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()
    if (!/^[a-zA-Z]+$/.test(firstname)) {
      alert("Please enter a valid first name with only alphabets.");
      return;
    }
    if (!/^[a-zA-Z]+$/.test(lastname)) {
      alert("Please enter a valid last name with only alphabets.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/.test(password)) {
      alert("Please enter a valid password with at least 8 characters, including at least one alphabetical character, one numeric character, and one special character.");
      return;
    }
    if (confirmpassword !== password) {
      alert("Please confirm your password correctly.");
      return;
    }
    const userInfo = {firstname, lastname, email};
    // continue with form submission logic
    navigate('/profilepage' , {state: userInfo});
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>REGISTRATION FORM</h3>
        <div className="form-body">
          <div className="firstname">
            <label htmlFor="firstname">First Name</label>
            <input className="form__input" id="firstname" type="text" placeholder="First Name" value={firstname} onChange={e => setFirstName(e.target.value)} />
          </div>
          <div className="lastname">
            <label htmlFor="lastname">Last Name</label>
            <input className="form__input" id="lastname" type="text" placeholder="Last Name" value={lastname} onChange={e => setLastName(e.target.value)} />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input className="form__input" id="email" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input className="form__input" id="password" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="confirm password">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input className="form__input" id="confirm-password" type="password" placeholder="Confirm Password" value={confirmpassword} onChange={e => setConfirmPassword(e.target.value)} />
          </div>
          <div className="footer">
            <button type="submit" className="btn">Register</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default RegistrationForm;
