import './button.css';

type Props = {
  children: React.ReactNode,
  color?: 'default' | 'primary' | 'danger',
  // color?: string;
  size?: 'base' | 'sm' | 'lg',
  // size?: string;
};

function Button({ children, color = 'default', size = 'base' }: Props) {
  return <button className={`${color} ${size}`}>{children}</button>;
}

export default Button;