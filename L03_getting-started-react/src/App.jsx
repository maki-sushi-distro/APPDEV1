import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen w-full bg-gray-800 from-indigo-950 via-slate-900 to-slate-950 flex items-center justify-center p-6">
        <div className="w-full max-w-xl bg-slate-900/60 backdrop-blur border border-slate-700/50 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
          {/* Header */}
          <div className="px-8 pt-10 pb-8 border-b border-slate-700/50">
            <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-2">
              Student Profile
            </p>
            <h1 className="text-4xl font-bold text-white tracking-tight">
              Mac Robert Savandal
            </h1>
            <p className="text-slate-400 text-lg mt-1">
              BS in Information Technology · Year 3
            </p>
          </div>

          <div className="px-8 py-8 space-y-8">
            <div>
              <h2 className="text-teal-400 text-xs font-semibold tracking-widest uppercase mb-2">
                Fun Fact
              </h2>
              <p className="text-slate-200 leading-relaxed">
                Whenever I have time, or while doing some stuff, I listen to a
                song and dance along with it.
              </p>
            </div>

            <div className="h-px bg-slate-700/50"></div>

            <div>
              <h2 className="text-teal-400 text-xs font-semibold tracking-widest uppercase mb-2">
                Reflection
              </h2>
              <p className="text-slate-200 leading-relaxed">
                In today's class, I learned about React and its importance,
                along with its features. One of the most exciting parts was
                learning how to properly set up a React project and how to edit
                a JSX file. I'm looking forward to learning more about React and
                its other functions. Additionally, I learned how to set up the
                git in my pc and was able to execute the commands properly. I also
                learned the git commands that I will be using on my project development
                and version control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
