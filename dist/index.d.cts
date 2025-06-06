import * as react_jsx_runtime from 'react/jsx-runtime';

interface ButtonProps {
    /** Is this the principal call to action on the page? */
    primary?: boolean;
    /** What background color to use */
    backgroundColor?: string;
    /** How large should the button be? */
    size?: 'small' | 'medium' | 'large';
    /** Button contents */
    label: string;
    /** Optional click handler */
    onClick?: () => void;
}
/** Primary UI component for user interaction */
declare const Button: ({ primary, size, backgroundColor, label, ...props }: ButtonProps) => react_jsx_runtime.JSX.Element;

export { Button, type ButtonProps };
