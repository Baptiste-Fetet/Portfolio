import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="font-bold bg-box w-1/2 rounded">
      <center className="text-3xl">{t("resume.title")}</center>
      <p className="pt-4 text-xl">{t("resume.content")}</p>
    </div>
  );
};
