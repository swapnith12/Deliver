import { useState ,useRef , useEffect} from "react";
import cssText from "data-text:~style.css"


export const SpeechReader = () => {
  const [writer ,setWriter] = useState("");
  const [words , setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setWriter(formData.get("writer")?.toString());
    setCurrentIndex(0)
  };

  const start = ()=>{
    if ((writer && writer.length > 0)){
        setWords(writer.split(/[.,]/))
        if (currentIndex<words.length-1){
        intervalRef.current = setInterval(() => {
          setCurrentIndex((prevIndex) => prevIndex+1);
        }, 8000);
    }}
  }

  const stop = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      {(!writer && writer.length === 0) ? (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center overscroll-auto">
          <textarea
            name="writer"
            placeholder="Enter your speech"
            className="bg-white h-16 w-64 text-slate-900"
          />
          <button
            type="submit"
            className="border-solid border-2 border-sky-500 p-2"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="flex-1 flex flex-col justify-center items-center text-red-600 text-2xl">
          <div className="text-wrap h-16 w-screen mb-2">
          {words.slice(currentIndex)|| "click start when your ready"}
          </div>
          <div className="flex flex-row justify-between items-center text-white"><button onClick={start}>start▶️</button><button onClick={stop}>stop⏸️</button></div>
        </div>
      )}
    </div>
  );
};
