import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";
import { useMemo } from "react";
import { useMediaQueries } from "./useMediaQuery";

export const useHeaderLinks = () => {
  const { size400 } = useMediaQueries()
  gsap.registerPlugin(ScrollToPlugin);
  const navigateToAboutMe = () =>
    gsap.to(window, {
      duration: 2,
      autoKill: false,
      scrollTo: { y: "#aboutMeContent", offsetY: -20 },
    });
  const navigateToSkills = () =>
    gsap.to(window, {
      duration: 2,
      autoKill: false,
      scrollTo: { y: "#skillsContent", offsetY: size400 ? -320 : 25 },
    });
  const navigateToProjects = () =>
    gsap.to(window, {
      duration: 2,
      autoKill: false,
      scrollTo: {
        y: "#projectsContent",
        offsetY: size400 ? -180 : -20,
      },
    });
  const navigateToContacts = () =>
    gsap.to(window, {
      duration: 2.5,
      autoKill: false,
      scrollTo: { y: "#contactsContent", offsetY: -40 },
    });

  const dataNavigation = useMemo(() => {
    return [
      {
        name: "Header.aboutMe",
        anchor: navigateToAboutMe,
      },
      {
        name: "Header.skills",
        anchor: navigateToSkills,
      },
      {
        name: "Header.projects",
        anchor: navigateToProjects,
      },
      {
        name: "Header.contacts",
        anchor: navigateToContacts,
      },
    ];
  }, []);

  return dataNavigation;
};
