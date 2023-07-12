import { FooterProps } from "./types";

export const Footer = ({ text, onSave }: FooterProps) => (
  <div>
    <h1>{text}</h1>
    <button>Yes</button>
  </div>
);
