import React from 'react'
import {experience} from "@/data"

const Experience = () => {
  return (
    <section className="w-full xl:px-[15rem] lg:px-[5rem] md:px-20 px-8 pb-24 lg:pt-[3.3rem] overflow-y-hidden">
      {/* h1 tag - title */}
      <h1 className="capitalize mt-[1.5rem] mb-4 md:mt-0 md:text-right text-left font-extrabold lg:text-[7.5rem] md:text-7xl text-[2.5rem]  tracking-wide text-color-blue-100/30 overflow-y-hidden">
        &#60;experience/&#62;
      </h1>
      <div className="w-full  grid lg:grid-cols-[200px,1fr] grid-cols-1 lg:gap-6 gap-0">
        {experience.map(
          ({ date, company, jobTitle, role1, role2, role3, role4 }) => (
            <article key={date}>
              {/* years of experience */}
              <h3 className="uppercase tracking-wide lg:text-lg text-xl opacity-60">
                {date}
              </h3>
              {/* content - company name, job title and roles */}
              <div>
                <div className="flex md:items-center flex-col md:flex-row  gap-1  capitalize mb-3">
                  <span className="font-medium lg:text-lg md:text-xl text-base">
                    {jobTitle}
                  </span>
                  <h4 className=" lg:text-xl md:text-2xl text-xl font-bold tracking-wide">
                    {company}
                  </h4>
                </div>
                <p className="mb-2 lg:text-lg md:text-xl text-base opacity-80">
                  ◻️ {role1}
                </p>
                {/* <br /> */}
                <p className="lg:text-lg md:text-xl text-base opacity-80 mb-5 lg:mb-0">
                  ◻️ {role2}
                </p>
                {/* <br /> */}
                <p className="lg:text-lg md:text-xl text-base opacity-80 mb-5 lg:mb-0">
                  ◻️ {role3}
                </p>
                {/* <br /> */}
                <p className="lg:text-lg md:text-xl text-base opacity-80 mb-5 lg:mb-0">
                  ◻️ {role4}
                </p>
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
}

export default Experience