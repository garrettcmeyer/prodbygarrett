import React, { useEffect, useState, useCallback, memo } from 'react';
import { useTheme } from "next-themes";
import IconCloud, { cloudProps } from "@/components/magicui/icon-cloud";
import { fetchSimpleIcons } from "react-icon-cloud";

const slugs = [
  "adobe",
  "protools",
  "unity",
  "cplusplus",
  "python",
  "github",
  "ableton",
];

const customIcons = {
  ableton: {
    title: 'Ableton',
    slug: 'ableton',
    hex: '#000000',
    source: '/icons/ableton.png',
    svg: '<svg></svg>',
  },
};

const skillDescriptions = {
  adobe: "Adobe Creative Suite: Proficient in various Adobe applications for digital content creation and design.",
  protools: "Pro Tools: Expert in audio recording, editing, and mixing for professional sound production.",
  unity: "Unity: Experienced in game development and interactive 3D content creation.",
  python: "Python: Skilled in writing efficient and scalable code for various applications and data analysis.",
  docker: "Docker: Proficient in containerization for consistent development and deployment environments.",
  git: "Git: Experienced in version control for efficient collaboration and code management.",
  github: "GitHub: Skilled in using GitHub for project hosting, collaboration, and CI/CD workflows.",
  visualstudiocode: "Visual Studio Code: Proficient in using this versatile code editor for various programming languages.",
  ableton: "Ableton Live: Expert in music production, sound design, and live performance using this DAW.",
};

const skillExperience = {
  adobe: "5+ years",
  protools: "7+ years",
  unity: "3+ years",
  python: "4+ years",
  docker: "2+ years",
  git: "5+ years",
  github: "5+ years",
  visualstudiocode: "4+ years",
  ableton: "8+ years",
};

const MemoizedIconCloud = memo(IconCloud);

const SkillsCloud: React.FC = () => {
  const [data, setData] = useState<{ simpleIcons: Record<string, any> } | null>(null);
  const { theme } = useTheme();
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs }).then((fetchedData) => {
      const mergedData = {
        simpleIcons: {
          ...fetchedData.simpleIcons,
          ...customIcons,
        },
      };
      setData(mergedData);
    });
  }, []);

  const handleIconClick = useCallback((slug: string) => {
    setSelectedSkill(slug);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-6xl flex">
        <div className="w-1/3 pr-8">
          <div className="bg-white shadow-lg rounded-lg p-6 transition-all duration-300 ease-in-out">
            {selectedSkill ? (
              <>
                <h3 className="text-xl font-semibold mb-2">{data?.simpleIcons[selectedSkill]?.title || selectedSkill}</h3>
                <p className="text-gray-600 mb-4">{skillDescriptions[selectedSkill as keyof typeof skillDescriptions]}</p>
                <div className="flex items-center">
                  <div className="w-24 h-1 bg-blue-500 rounded-full"></div>
                  <span className="ml-4 text-sm font-medium text-gray-500">
                    {skillExperience[selectedSkill as keyof typeof skillExperience]} experience
                  </span>
                </div>
              </>
            ) : (
              <p className="text-gray-500 text-center">Click on an icon to learn more about the skill.</p>
            )}
          </div>
        </div>
        <div className="w-2/3 flex items-center">
          <div className="w-8 h-0.5 bg-gray-300 mr-4"></div>
          <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-lg bg-gray-100">
            <MemoizedIconCloud iconSlugs={slugs} onIconClick={handleIconClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCloud;