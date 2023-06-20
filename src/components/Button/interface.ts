interface ButtonTypes {
  type?: 'play' | 'playRounded' | 'arrow' | 'billboard' | 'favorite' | 'modal'
}

export interface ButtonProps extends ButtonTypes {
  children: React.ReactElement<HTMLParagraphElement> | React.ReactNode;
  text?: string
  styles?: string
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}