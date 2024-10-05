import { useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from '../../../utils/hooks/useDebounce';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [MiddleName, setMiddleName] = useState('');
  const [LastName, setLastName] = useState('');
  const [ContactNo, setContactNo] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstNameRef = useRef();
  const middleNameRef = useRef();
  const lastNameRef = useRef();
  const contactNoRef = useRef();
  const userInputDebounce = useDebounce({ email, password }, 2000);
  const [debounceState, setDebounceState] = useState(false);
  const [status, setStatus] = useState('idle');

  const navigate = useNavigate();

  //const handleShowPassword = useCallback(() => {
    //setIsShowPassword((value) => !value);
  //}, [isShowPassword]);

  const handleRegister = async () => {
    const data = { email, password, FirstName, MiddleName, LastName, ContactNo };
    setStatus('loading');
    console.log(data);

    await axios({
      method: 'post',
      url: '/user/register',
      data,
      headers: { 'Access-Control-Allow-Origin': '*' },
    })
      .then((res) => {
        console.log(res);
        localStorage.setItem('accessToken', res.data.access_token);
        navigate('/main/dashboard');
        setStatus('idle');
      })
      .catch((e) => {
        console.log(e);
        setStatus('idle');
        // alert(e.response.data.message);
      });
    };

  useEffect(() => {
    setDebounceState(true);
  }, [userInputDebounce]);

  return (
    <div className='Register'>
      <div className='register-container'>
        <h3>Register</h3>
        <form>
          <div className='form-container'>
            <div>
              <div className='form-group'>
                <label>E-mail:</label>
                <input
                  type='text'
                  name='email'
                  ref={emailRef}
                  onChange={(e) => handleOnChange(e, 'email')}
                />
              </div>
              <div className='form-group'>
                <label>Password</label>
                <input
                  type='text'
                  name='password'
                  ref={passwordRef}
                  onChange={(e) => handleOnChange(e, 'password')}
                />
              </div>
              <div className='form-group'>
                <label>First Name</label>
                <input
                  type='text'
                  name='firstName'
                  ref={firstNameRefRef}
                  onChange={(e) => handleOnChange(e, 'firstName')}
                />
              </div>
              <div className='form-group'>
                <label>Middle Name</label>
                <input
                  type='text'
                  name='middleName'
                  ref={middleNameRefNameRefRef}
                  onChange={(e) => handleOnChange(e, 'middleName')}
                />
              </div>
              <div className='form-group'>
                <label>Last Name</label>
                <input
                  type='text'
                  name='lastName'
                  ref={lastNameRefRef}
                  onChange={(e) => handleOnChange(e, 'lastName')}
                />
              </div>
              {debounceState && isFieldsDirty && email == '' && (
                <span className='errors'>This field is required</span>
              )}
            </div>

            <div className='submit-container'>
              <button
                type='button'
                disabled={status === 'loading'}
                onClick={() => {
                  if (status === 'loading') {
                    return;
                  }
                }}
              >
                {status === 'idle' ? 'Login' : 'Loading'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
