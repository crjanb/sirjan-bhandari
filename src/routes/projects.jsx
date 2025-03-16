import MemorizedNavBar from "./nav";
import Footer from "./footer";

export default function Projects() {
  return (
    <div className="bg-[#1D1E20] font-mono">
      <MemorizedNavBar />
      <div className="w-11/12 sm:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto mt-8">
        <p className="text-gray-300 text-md pt-3 pl-1 mt-12">
          List of projects I've built:
        </p>

        {/* Sign Language Detection */}
        <div className="mt-8">
          <h1 className="text-emerald-200 text-xl sm:text-2xl font-bold">
            Sign Language Detection
          </h1>
          <p className="text-gray-300 text-sm sm:text-md pt-3 pl-1">
            <ul>
              <li>
                &#8226; Repo:{" "}
                <a
                  href="https://github.com/crjanb/Sign-Language-Detection"
                  target="_blank"
                  className="underline hover:underline hover:text-emerald-100"
                >
                  https://github.com/crjanb/Sign-Language-Detection
                </a>
              </li>
            </ul>
          </p>
          <p className="text-gray-300 text-sm sm:text-md pt-3 pl-1">
            Built a real-time application that recognized hand gestures using 
            OpenCV, Mediapipe, ML algorithms converts them into speech.
          </p>
        </div>

        {/* Face Detection Based Attendance System */}
        <div className="mt-8">
          <h1 className="text-emerald-200 text-xl sm:text-2xl font-bold">
            Face Detection Based Attendance System
          </h1>
          <p className="text-gray-300 text-sm sm:text-md pt-3 pl-1">
            <ul>
              {/* <li>&#8226; Status: Ongoing</li> */}
              <li>
                &#8226; Repo:{" "}
                <a
                  href="https://github.com/crjanb/Face-Detection-Based-Attendance-System"
                  target="_blank"
                  className="underline hover:underline hover:text-emerald-100"
                >
                  https://github.com/crjanb/Face-Detection-Based-Attendance-System
                </a>
              </li>
            </ul>
          </p>
          <p className="text-gray-300 text-sm sm:text-md pt-3 pl-1">
            Real Time face recognition based attendance system using YOLOv8.
          </p>
        </div>

        {/* Depression Prediction Model */}
        <div className="mt-8">
          <h1 className="text-emerald-200 text-xl sm:text-2xl font-bold">
            Depression Prediction Model
          </h1>
          <p className="text-gray-300 text-sm sm:text-md pt-3 pl-1">
            <ul>
              <li>
                &#8226; Repo:{" "}
                <a
                  href="https://www.kaggle.com/code/crjanb/why-are-you-depressed"
                  target="_blank"
                  className="underline  hover:underline hover:text-emerald-100"
                >
                  https://www.kaggle.com/code/crjanb/why-are-you-depressed
                </a>
              </li>
            </ul>
          </p>
          <p className="text-gray-300 text-sm sm:text-md pt-3 pl-1">
            Developed a depression prediction model and tested Random Forest,
            Logistic Regression, SVM, and KNN. Achieved 0.94% accuracy.
          </p>
        </div>


        {/* Movie Recommendation System */}
        <div className="mt-8">
          <h1 className="text-emerald-200 text-xl sm:text-2xl font-bold">
            Movie Recommendation System
          </h1>
          <p className="text-gray-300 text-sm sm:text-md pt-3 pl-1">
            <ul>
              <li>
                &#8226; Repo:{" "}
                <a
                  href="https://github.com/srijanbakhati/movie_recommender"
                  target="_blank"
                  className="underline hover:underline hover:text-emerald-100"
                >
                  https://github.com/srijanbakhati/movie_recommender
                </a>
              </li>
            </ul>
          </p>
          <p className="text-gray-300 text-sm sm:text-md pt-3 pl-1">
            Applies machine learning techniques to recommend movies.
          </p>
        </div>

        {/* GYM Analysis */}
        <div className="mt-8">
          <h1 className="text-emerald-200 text-xl sm:text-2xl font-bold">
            GYM Analysis
          </h1>
          <p className="text-gray-300 text-sm sm:text-md pt-3 pl-1">
            <ul>
              <li>
                &#8226; Repo:{" "}
                <a
                  href="https://www.kaggle.com/code/crjanb/gym-analysis-with-description"
                  target="_blank"
                  className="underline hover:underline hover:text-emerald-100"
                >
                  https://www.kaggle.com/code/crjanb/gym-analysis-with-description
                </a>
              </li>
            </ul>
          </p>
          <p className="text-gray-300 text-sm sm:text-md pt-3 pl-1">
            Conducted data analysis on a gym dataset to identify trends and
            created visualizations.
          </p>
        </div>

        {/* Online Voting System */}
        <div className="mt-8">
          <h1 className="text-emerald-200 text-xl sm:text-2xl font-bold">
            Online Voting System
          </h1>
          <p className="text-gray-300 text-sm sm:text-md pt-3 pl-1">
            <ul>
              <li>
                &#8226; Repo:{" "}
                <a
                  href="https://github.com/crjanb/Online-Voting-System"
                  target="_blank"
                  className="underline hover:underline hover:text-amber-100"
                >
                  https://github.com/crjanb/Online-Voting-System
                </a>
              </li>
            </ul>
          </p>
          <p className="text-gray-300 text-sm sm:text-md pt-3 pl-1">
            Developed a secure e-voting system using Python and Tkinter.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
