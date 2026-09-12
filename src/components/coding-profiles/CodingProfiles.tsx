import React from "react";
import { codingProfilesData } from "./data/data";

const CodingProfiles = () => {
  return (
    <section id="coding-profiles">
      <h5>Where I Code</h5>
      <h2>Coding Profiles</h2>

      <div className="container grid grid-cols-3 gap-[2.5rem] max-xl:grid-cols-2 max-md:gap-[1.2rem] max-sm:grid-cols-1 max-sm:gap-[1rem]">
        {codingProfilesData.map((profile) => {
          const Logo = profile.logo;
          return (
            <article
              key={profile.id}
              className="portfolio__item flex flex-col items-center justify-between p-6 transition hover:bg-transparent"
            >
              <div className="flex flex-col items-center gap-4 w-full">
                <div className="text-6xl color-primary mb-2">
                  <Logo />
                </div>
                
                <h3 className="m-0 text-xl font-bold text-center">
                  {profile.name}
                </h3>
                
                <div className="color-bg rounded-full px-4 py-1 text-sm text-light w-full text-center truncate">
                  @{profile.username}
                </div>

                {profile.metadata && profile.metadata.length > 0 && (
                  <div className="flex flex-col items-center mt-2 w-full">
                    {profile.metadata.map((meta, index) => (
                      <div key={index} className="flex justify-between w-full text-sm border-b border-zinc-700/50 py-2 last:border-0">
                        <span className="text-light">{meta.label}</span>
                        <span className="font-semibold">{meta.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 w-full">
                <a href={profile.profileUrl} target="_blank" rel="noreferrer" className="w-full block">
                  <button className="btn btn-primary w-full rounded-xl transition duration-400 ease-in max-md:p-2">
                    View Profile
                  </button>
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default CodingProfiles;
