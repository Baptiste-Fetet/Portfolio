import { useTranslation } from "react-i18next";

import icon_devops from "@assets/icons/devops.png";
import icon_devsecops from "@assets/icons/devsecops.png";
import icon_archi_cloud from "@assets/icons/archi_cloud.png";
import icon_terraform from "@assets/icons/terraform.png";
import icon_ansible from "@assets/icons/ansible.png";
import icon_cloudinit from "@assets/icons/cloudinit.png";
import icon_helm from "@assets/icons/helm.png";
import icon_aws from "@assets/icons/aws.png";
import icon_azure from "@assets/icons/azure.png";
import icon_gcp from "@assets/icons/gcp.png";
import icon_github from "@assets/icons/github.png";
import icon_gitlab from "@assets/icons/gitlab.png";
import icon_jenkins from "@assets/icons/jenkins.png";
import icon_argocd from "@assets/icons/argocd.png";

const iconMap: Record<string, string> = {
  devops: icon_devops,
  devsecops: icon_devsecops,
  archi_cloud: icon_archi_cloud,
  terraform: icon_terraform,
  ansible: icon_ansible,
  cloudinit: icon_cloudinit,
  helm: icon_helm,
  aws: icon_aws,
  azure: icon_azure,
  gcp: icon_gcp,
  github: icon_github,
  gitlab: icon_gitlab,
  jenkins: icon_jenkins,
  argocd: icon_argocd,
};

interface Skill {
  title: string;
  icon: string;
}

interface SkillObject {
  title: string;
  content: Skill[];
}

interface TechSkill {
  title: string;
  content: [
    {
      title: string;
      icon: string;
    }
  ];
}

interface TechSkillObject {
  title: string;
  content: TechSkill[];
}

export const Competences = () => {
  const { t } = useTranslation();
  const hardSkills = t("competences.hardSkills", {
    returnObjects: true,
  }) as SkillObject;

  const techSkills = t("competences.techSkills", {
    returnObjects: true,
  }) as TechSkillObject;

  console.log(hardSkills);

  return (
    <div className="font-bold bg-box w-2/3 rounded">
      <center className="text-3xl">{t("competences.title")}</center>
      <p className="pt-4 text-xl">{t("competences.content")}</p>
      {/* Hard Skills */}
      <div>
        <p className="text-2xl">{t("competences.hardSkills.title")}</p>
        <div className="flex items-center justify-center ">
          {hardSkills.content.map((skill, index) => (
            <div
              key={`hardskill-n-${index}`}
              className="bg-bg w-fit h-fit rounded-full p-8"
            >
              <img src={iconMap[skill.icon]} className="w-auto h-16 w-max-32" />
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Skills */}
      <div>
        <p className="text-2xl">{t("competences.techSkills.title")}</p>
        <div className="flex items-center justify-center ">
          {techSkills.content.map((skill, index) => (
            <div
              key={`techskill-n-${index}`}
              className="bg-bg w-fit h-fit rounded-full p-8"
            >
              <p className="text-xl">{skill.title}</p>
              <div>
                {skill.content.map((subSkill, subIndex) => (
                  <div key={`subskill-${subIndex}-${index}`}>
                    <img
                      src={iconMap[subSkill.icon]}
                      className="w-auto h-16 w-max-32"
                    />
                    <p>{subSkill.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
