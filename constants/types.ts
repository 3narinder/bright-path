//* Button types

export type ButtonVariant = "default" | "nav" | "primary" | "white";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  title?: string;
  loading?: boolean;
  error?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

//* Achievement card types

export interface AchievementProps {
  number: string;
  title: string;
  color?: string;
  shadowColor?: string;
  borderColor?: string;
  className?: string;
}
