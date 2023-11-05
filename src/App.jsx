import "./App.css";
import { setFilterText } from "./Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import {
  Fragment,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,

 
} from "react";
import StudentList from "./StudentList";
import StudentListData from "./mocks/StudenListData.json";
const App = () => {
  // ==USE TRANSITION ĐỂ LÀM CHUYỂN ĐỘNG LOADING MƯỢT MÀ KO BỊ GIẬT LAG===///

  const [inputValue, setInputValue] = useState("");
  
  const inputId = useId();
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  
  const dispatch = useDispatch();
  const filterText = useSelector((state) => state.filterText);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
    
    dispatch(setFilterText(e.target.value));
    
  };
  const [isPending,setIsPending]=useState()

  const data = useMemo(() => {
    return StudentListData.map((student) => {
      // const checkInputValue = student.indexOf(filterText);
      const checkInputValue = student.toLowerCase().indexOf(filterText.toLowerCase());
      
      return checkInputValue === -1 ? null : (
        <p>
          {student.slice(0, checkInputValue)}
          <span style={{ backgroundColor: "yellow", color: "black" }}>
            {student.slice(
              checkInputValue,
              checkInputValue + filterText.length
            )}
          </span>
          
          {student.slice(checkInputValue + filterText.length)}
        </p>
      );
    });
  }, [filterText]);

  

  return (
    <Fragment>
      <label htmlFor={inputId}>List </label>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputValue}
        id={inputId}
        ref={inputRef}
      />
      <hr />
      
      <div> <StudentList data={data} /></div>
    </Fragment>
  );
};

export default App;
