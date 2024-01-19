import clsx from 'clsx';
import { FC } from 'react';
import styles from './button.module.scss';
import { ButtonProps } from './types/button.types';
import { buttonConfigs } from './config/button.config';

export const Button: FC<ButtonProps> = ({
  type,
  size,
  variant,
  isLoading,
  iconPosition = 'left',
  customClasses,
  style,
  ariaLabel,
  ...props
}) => {
  const { classes = '', icon, ...rest } = buttonConfigs[type] || {};

  const renderButtonContent = () => {
    return (
      <>
        {isLoading && (
          <span className={styles.loader}>
            {props.loadingText || 'Loading'}
          </span>
        )}
        {iconPosition === 'left' && icon}
        {props.children}
        {iconPosition === 'right' && icon}
      </>
    );
  };

  const commonProps = {
    className: clsx(
      styles[classes],
      size && styles[`btn-${size}`],
      variant && styles[`btn-${variant}`],
      isLoading && styles['loading'],
      iconPosition === 'right' && styles['icon-right'],
      customClasses
    ),
    style,
    'aria-label': ariaLabel || 'Button',
    ...rest,
  };

  if (type === 'link') {
    const { href, target, onClick } = props;

    return (
      <a href={href} target={target} onClick={onClick} {...commonProps}>
        {renderButtonContent()}
      </a>
    );
  }

  const { onClick } = props;

  return (
    <button
      type="button"
      disabled={props.disabled || isLoading}
      onClick={onClick}
      {...commonProps}
    >
      {renderButtonContent()}
    </button>
  );
};
