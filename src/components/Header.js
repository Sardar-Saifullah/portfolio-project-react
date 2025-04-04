import React, { useEffect, useRef , useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: sardarsaif789@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Sardar-Saifullah",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/sardar-saifullah-02397b253",
  },
  {
    icon: faMedium,
    url: "https://medium.com/@sardarsaif789",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/29933790/sardar-saifullah",
  },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setIsVisible(false); // Hide header when scrolling down
      } else {
        setIsVisible(true); // Show header when scrolling up
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  
  

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={isVisible ? "translateY(0)" : "translateY(-200px)"}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={8}>
              {
                socials.map(social => 
                  <a href={social.url} key={social.url} target={"_blank"}>
                    <FontAwesomeIcon icon={social.icon} size="2x" />
                  </a>
                )
              }
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="#projects" onClick={handleClick("projects")} >Projects</a>
              <a href="#contactme" onClick={handleClick("contactme")} >Contact Me</a>
              
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
