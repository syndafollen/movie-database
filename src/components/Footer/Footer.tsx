import { FooterProps } from "./types";
import './Footer.scss'

export const Footer = ({ text, onSave }: FooterProps) => (
  <div className="container">
    <div className="footer">
      <h1>{text}</h1>
      <button onClick={onSave}>Yes</button>
    </div>
  </div>
);
