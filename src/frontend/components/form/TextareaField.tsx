import React, { useState } from 'react';
import { ErrorMessage } from '@hookform/error-message';

type TextareaFieldProps = {
  id?: string;
  watch?: any;
  errors?: {};
  rows?: number;
  name?: string;
  label?: string;
  register?: any;
  message?: string;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  defaultValue?: string;
  autoComplete?: 'on' | 'off';
};

const TextareaField = ({
  id,
  name,
  rows,
  label,
  watch,
  errors,
  message,
  disabled,
  register,
  className,
  placeholder,
  defaultValue,
  autoComplete,
}: TextareaFieldProps) => {
  const [focus, setFocus] = useState(false);

  return (
    <fieldset
      className={`textarea-field ${focus} ${watch !== '' ? 'watch' : ''} ${
        errors && errors[name] ? 'error' : ''
      } ${className}`}
    >
      <legend
        className={`field-title ${errors && errors[name] ? 'color-danger' : ''}`}
      >
        {label}
      </legend>
      <textarea
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register}
        id={id || ''}
        rows={rows || 4}
        disabled={disabled}
        className='field-textarea'
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={placeholder || ''}
        defaultValue={defaultValue || ''}
        autoComplete={autoComplete || 'on'}
      />
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

export default TextareaField;
