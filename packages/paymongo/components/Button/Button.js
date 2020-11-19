import classnames from 'classnames';

function Button({ size, bgColor, textColor, children }) {
  return (
    <button
      className={classnames(
        `bg-${bgColor} text-${textColor} focus:outline-none  py-2 px-8 rounded `,
        {
          'text-xs': size === 'sm',
          'text-xl': size === 'lg',
          'bg-primary': bgColor === 'primary',
          'hover:bg-primaryDark':  bgColor === 'primary',
          'text-white': bgColor === 'primary',
        }
      )}
    >
      {children}
    </button>
  );
}

export default Button;
