import Navigation from "./nav";
import Footer from "./footer";

export default function Experience() {
  return (
    <div className="bg-[#1D1E20] font-mono">
      <Navigation />
      <main>
        {/* Placeholder for future content */}
        <div className="w-11/12 sm:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto mt-4"></div>
        {/* Data Engineer Intern Section
        <div className="w-11/12 sm:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto mt-8">
                  <h1 className="text-emerald-200 text-2xl font-bold">Data Engineer Intern | Radiant InfoTech Nepal Pvt. Ltd.</h1>
                  <ul className="text-gray-300 text-md pt-3 pl-1 list-disc list-inside">
                    <li>Time: Present</li>
                    <li>
                      Organization:{" "}
                      <a
                        href="https://www.facebook.com/radiantnepal/"
                        target="_blank"
                        className="hover:cursor-pointer hover:underline hover:text-rose-400"
                      >
                        Radiant InfoTech Nepal Pvt. Ltd.
                      </a>
                    </li>
                  </ul>
                  <p className="text-gray-300 text-md pt-3 pl-1">
                  In my role as a Data Engineer Intern, I transform 
                  raw data into clean, structured formats and develop visual reports or dashboards to facilitate data-driven insights.
                  </p>
                </div> */}



        {/* AWS Cloud Club Section */}
        <div className="w-11/12 sm:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto mt-8">
                  <h1 className="text-emerald-200 text-2xl font-bold">CR | AWS Cloud Club TU</h1>
                  <ul className="text-gray-300 text-md pt-3 pl-1 list-disc list-inside">
                    <li>Time: Feb 2024 - Feb 2025</li>
                    <li>
                      Organization:{" "}
                      <a
                        href="https://www.linkedin.com/company/aws-cloud-club-nepal/posts/?feedView=all"
                        target="_blank"
                        className="hover:cursor-pointer hover:underline hover:text-rose-400"
                      >
                        AWS Cloud Club TU
                      </a>
                    </li>
                  </ul>
                  <p className="text-gray-300 text-md pt-3 pl-1">
                    Facilitated communication between AWS Cloud Club - TU and my college, promoting AWS initiatives and
                    increasing student engagement. I helped organize workshops and events to raise awareness of cloud computing
                    and encourage active participation within the college community.
                  </p>
                </div>

        
        {/* KBC IT Club Section */}
        <div className="w-11/12 sm:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto mt-8">
          <h1 className="text-emerald-200 text-2xl font-bold">Executive | KBC IT Club</h1>
          <ul className="text-gray-300 text-md pt-3 pl-1 list-disc list-inside">
            <li>Time: Sep 2023 - Jan 2025</li>
            <li>
              Organization:{" "}
              <a
                href="https://www.linkedin.com/company/kbc-it-club/"
                target="_blank"
                className="hover:cursor-pointer hover:underline hover:text-rose-400"
              >
                KBC IT Club
              </a>
            </li>
          </ul>
          <p className="text-gray-300 text-md pt-3 pl-1">
            Actively contributed to organizing tech events, fostering collaboration among members, and promoting IT
            awareness, while developing and improving my strong organizational and leadership abilities.
          </p>
        </div>

        

        {/* CSIT Association Section */}
        <div className="w-11/12 sm:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto mt-8">
          <h1 className="text-emerald-200 text-2xl font-bold">CR | CSIT Association of Nepal</h1>
          <ul className="text-gray-300 text-md pt-3 pl-1 list-disc list-inside">
            <li>Time: Nov 2022 - Oct 2023</li>
            <li>
              Organization:{" "}
              <a
                href="https://csitan.org.np/"
                target="_blank"
                className="hover:cursor-pointer hover:underline hover:text-rose-400"
              >
                CSIT Association of Nepal
              </a>
            </li>
          </ul>
          <p className="text-gray-300 text-md pt-3 pl-1">
            Promoted events, coordinated activities, and fostered connections between students and the IT industry,
            enhancing community engagement.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
