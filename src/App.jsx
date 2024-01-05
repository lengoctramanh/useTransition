//CSS
import "./App.css";

// REDUX
import { useDispatch, useSelector } from "react-redux";

//REACT
import { Fragment, useEffect, useId, useMemo, useRef, useState } from "react";

// DUMMY DATA
import StudentListData from "./mocks/StudenListData.json";

// IMPORT
import ChangeTheme from "./useInsertionEffect/ChangeTheme";
import { setFilterText } from "./Redux/Action";
import ProductsIndex from "./useMemo/ProductsIndex";
import StudentList from "./StudentList";
import DemoHook from "../useImperativeHandle/DemoHook";
import Test1 from "../useLayoutEffect/Test1";
import Test2 from "../useLayoutEffect/Test2";


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
  // PENDING
  const [isPending, setIsPending] = useState(false);

  //HANDLEINPUT
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
    setIsPending(() => {
      dispatch(setFilterText(e.target.value));
    });
  };

  //CLEAR
  const handleClear = () => {
    setInputValue("");
    setIsPending(false);
    dispatch(setFilterText(""));
  };

  //FILTER DATA
  const data = useMemo(() => {
    return StudentListData.map((student) => {
      // const checkInputValue = student.indexOf(filterText);
      const checkInputValue = student
        .toLowerCase()
        .indexOf(filterText.toLowerCase());

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
      <Test2/>
      <Test1/>
      <DemoHook />
      <ChangeTheme />
      <label htmlFor={inputId}>List </label>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputValue}
        id={inputId}
        ref={inputRef}
      />
      <hr />
      <button id={inputId} onClick={handleClear}>
        Clear
      </button>
      {isPending ? (
        "Loading..."
      ) : (
        <div>
          {" "}
          <StudentList data={data} />
        </div>
      )}
      <ProductsIndex />
    </Fragment>
  );
};

export default App;
