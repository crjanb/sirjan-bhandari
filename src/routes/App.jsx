import MemorizedNavBar from './nav';
import Footer from './footer';
import '../App.css';

function App() {
  return (
    <div className="bg-[#1D1E20] font-mono">
      <MemorizedNavBar />
      <main>
        {/* Intro Section */}
        <div className="w-11/12 sm:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto mt-8">
          <h1 className="text-emerald-200 text-2xl font-bold mt-8">Intro</h1>
          <p className="text-gray-300 text-md pt-3 pl-1">
            Data science and machine learning student who is enthusiastic and detail-oriented, with a strong foundation in statistical analysis, programming, and data-driven problem-solving. Strong foundations in Python and SQL; assured of delivering actionable insights from data and developing efficient ML solutions to solve real-world problems.
          </p>
        </div>

        {/* Interests Section */}
        <div className="w-11/12 sm:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto mt-10">
          <h1 className="text-emerald-200 text-2xl font-bold">Interests</h1>
          <p className="text-gray-300 text-md pt-3 pl-1">
            LLMs, NLP, Predictive Modeling, Deep Learning
          </p>
        </div>

        {/* Key Skills Section */}
        <div className="w-11/12 sm:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto mt-10">
          <h1 className="text-emerald-200 text-2xl font-bold">Key Skills</h1>
          <ul className="text-gray-300 text-md pt-3 pl-1 list-disc list-inside">
          <p>🏷 Data Analysis & Visualization:</p>
            <li class="ml-5">Pandas, NumPy, Matplotlib, Seaborn</li>
            <li class="ml-5">Data Cleaning, Feature Engineering, and Preprocessing</li>
            <br></br>
          <p>🏷 Machine Learning:</p>
            <li class="ml-5">Scikit-learn, PyTorch, TensorFlow, Langchain</li>
            <li class="ml-5">Model Training, Evaluation, and Optimization</li>
            <br></br>
          <p>🏷 MySQL & Database Management</p>
          <br></br>
          <p>🏷 Git, Jupyter Notebooks</p>
          </ul>
        </div>

        {/* Current Section */}
        <div className="w-11/12 sm:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto mt-10">
          <h1 className="text-emerald-200 text-2xl font-bold">Current</h1>
          <ul className="text-gray-300 text-md pt-3 pl-1 list-disc list-inside">
            <li>Designing Transformer Architecture</li>
            <li>Exploring LLM model development</li>
            
          </ul>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
