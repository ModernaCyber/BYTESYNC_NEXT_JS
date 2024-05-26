import React from "react";
import Image from "next/image";

const TechnologyCard = ({ imageName, technologyName }:{imageName:string,technologyName:string}) => {
    return (
      <div className="w-full rounded overflow-hidden shadow-lg flex flex-col items-center mx-auto my-4">
        <Image
          className="h-24 w-auto  object-cover"
          src={imageName}
          alt={technologyName}
          height={96}
          width={96}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-sm mb-2">{technologyName}</div>
        </div>
      </div>
    );
  };
  const technologyStack = [
    { imageName: "assets/java.png", technologyName: "Java" },
    { imageName: "assets/python.png", technologyName: "Python" },
    { imageName: "assets/javascript.png", technologyName: "JavaScript" },
    { imageName: "assets/php.png", technologyName: "PHP" },
    { imageName: "assets/react.png", technologyName: "React" },
    { imageName: "assets/reactNative.png", technologyName: "React Native" },
    { imageName: "assets/node.png", technologyName: "Node.js" },
    { imageName: "assets/springboot.png", technologyName: "Spring Boot" },
    { imageName: "assets/postgres.png", technologyName: "PostgreSQL" },
    { imageName: "assets/sql.png", technologyName: "SQL" },
    { imageName: "assets/mssql.png", technologyName: "MS SQL" },
    { imageName: "assets/mongodb.png", technologyName: "MongoDB" },
    { imageName: "assets/laravel.png", technologyName: "Laravel" },
    { imageName: "assets/tailwind-css.png", technologyName: "Tailwind CSS" },
  ];
  export const OurStack = () => {
    return (
      <div className="mt-8 container w-full h-auto mx-auto p-4 md:p-8">
        <h3 className="text-2xl font-bold mb-4">Our Technology Stack</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-8 gap-x-2">
          {technologyStack.map((tech, index) => (
            <TechnologyCard
              key={index}
              imageName={tech.imageName}
              technologyName={tech.technologyName}
            />
          ))}
        </div>
      </div>
    );
  };