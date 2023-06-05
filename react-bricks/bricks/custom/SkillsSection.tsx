import React from "react";

const skills = [
  "Java",
  "Spring Boot",
  "SQL",
  "MongoDB",
  "Node.js",
  "Express.js",
  "React",
];

const SkillsSection: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-2 py-1 bg-gray-300 rounded-full text-gray-800"
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

export default SkillsSection;
