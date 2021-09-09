import React, { useState } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useStateValue } from '../../context';

type TextFieldProps = {
  name: string;
  register: any;
  id?: string;
  watch?: any;
  label?: string;
  message?: string;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  defaultValue?: string;
  autoComplete?: 'on' | 'off';
  errors?: Record<string, any>;
  type?: 'number' | 'text' | 'date' | 'email' | 'password' | 'datetime-local' ;
};

const TextField = ({
  id,
  name,
  type,
  watch,
  label,
  errors,
  message,
  disabled = false,
  register,
  className = '',
  placeholder,
  defaultValue,
  autoComplete,
}: TextFieldProps) => {
  const { theme } = useStateValue();
  const [show, setShow] = useState<boolean>(false);
  const [focus, setFocus] = useState(false);

  return (
    <fieldset
      className={`text-field ${focus} ${watch !== '' ? 'watch' : ''} ${
        errors && errors[name] ? 'error' : ''
      } ${className}`}
    >
      {label && (
        <legend
          className={`field-title ${errors && errors[name] ? 'color-danger' : ''}`}
        >
          {label}
        </legend>
      )}
      <div className='field-container'>
        <input
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register}
          disabled={disabled}
          id={id || undefined}
          className='field-input'
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={placeholder || ''}
          defaultValue={defaultValue || ''}
          autoComplete={autoComplete || 'on'}
          type={type === 'password' ? (show ? 'text' : 'password') : (type || 'text')}
        />
        {type === 'password' && (
          <button
            type='button'
            onClick={() => setShow(!show)}
            className={`field-password ${theme === 'light' ? 'btn-link-secondary' : 'btn-link-soft'}`}
          >
            {show ? (<FiEye />) : (<FiEyeOff />)}
          </button>
        )}
      </div>
      {errors && (
        <ErrorMessage
          name={name}
          errors={errors}
          render={({ message }) => (
            <span className='field-error'>{message}</span>
          )}
        />
      )}

      {message && (!errors || Object.keys(errors).length === 0) && (
        <span className='field-message'>{message}</span>
      )}
    </fieldset>
  );
};

export default TextField;
