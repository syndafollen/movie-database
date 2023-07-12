import { LanguageButtonProps } from "./types";

export const LanguageButton = ({
  languageName,
  language,
  onLanguageChange,
}: LanguageButtonProps) => (
  <div>
    <button
      onClick={() => onLanguageChange(languageName)}
      disabled={language.includes(languageName)}
    >
      <h1>{languageName}</h1>
    </button>
  </div>
);
