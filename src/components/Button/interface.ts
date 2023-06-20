interface ButtonTypes {
  type?: 'play' | 'playRounded' | 'arrow' | 'billboard'
}

export interface ButtonProps extends ButtonTypes {
  children: React.ReactElement<HTMLParagraphElement> | React.ReactNode;
  text?: string
  styles?: string
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}