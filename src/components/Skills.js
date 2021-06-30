// src/components/Skills.js

import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import javascript from "../Images/javascript.png";
import bootstrap from "../Images/bootstrap.png";
import cpp from "../Images/cpp.png";
import laravel from "../Images/laravel.png";
import postgresql from "../Images/postgresql.png";
import java from "../Images/java.png";
import php from "../Images/php.png";
import mysql from "../Images/mysql.png";
import react from "../Images/react.png";
import html from "../Images/html.png";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <img
                src={laravel}
                className="text-green-400 w-50 h-20 flex-shrink-0 mr-4"
              />
              <span className="title-font font-light text-white">
                Practicing Laravel since April '21. Build 2 projects in it.
              </span>
            </div>
          </div>

          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <img
                src={react}
                className="text-green-400 w-50 h-20 flex-shrink-0 mr-4"
              />
              <span className="title-font font-light text-white">
                Still a beginner. Build this portfolio using react.
              </span>
            </div>
          </div>

          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <img
                src={javascript}
                className="text-green-400 w-50 h-20 flex-shrink-0 mr-4"
              />
              <span className="title-font font-light text-white">
                Practing javascript since 2019.
              </span>
            </div>
          </div>

          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <img
                src={php}
                className="text-green-400 w-50 h-20 flex-shrink-0 mr-4"
              />
              <span className="title-font font-light text-white">
                Practicing since 2020. Build my final year project in PHP.
              </span>
            </div>
          </div>

          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <img
                src={java}
                className="text-green-400 w-50 h-20 flex-shrink-0 mr-4"
              />
              <span className="title-font font-light text-white">
                Practicing Java since 2020. Build few projects in it. Will be
                starting android development soon.
              </span>
            </div>
          </div>

          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <img
                src={cpp}
                className="text-green-400 w-50 h-20 flex-shrink-0 mr-4"
              />
              <span className="title-font font-light text-white">
                Practicing C++ since 2018. Implemented a lot algorithms and data
                structures in C++. Available on github.
              </span>
            </div>
          </div>

          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <img
                src={bootstrap}
                className="text-green-400 w-50 h-20 flex-shrink-0 mr-4"
              />
              <span className="title-font font-light text-white">
                Practicing Bootstrap since 2019. Build a photography portfolio
                site in bootstrap4.
              </span>
            </div>
          </div>

          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <img
                src={html}
                className="text-green-400 w-50 h-20 flex-shrink-0 mr-4"
              />
              <span className="title-font font-light text-white">
                Practicing HTMl/CSS since 2018.
              </span>
            </div>
          </div>

          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <img
                src={postgresql}
                className="text-green-400 w-50 h-20 flex-shrink-0 mr-4"
              />
              <span className="title-font font-light text-white">
                Practicing pgsql since 2019. Build my second year project in
                pgsql.
              </span>
            </div>
          </div>

          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <img
                src={mysql}
                className="text-green-400 w-50 h-20 flex-shrink-0 mr-4"
              />
              <span className="title-font font-light text-white">
                Practicing MySQL since 2020. Used MySQL in several projects.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
