import { Fragment, useLayoutEffect, useState } from "react";

const Test1 = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  useLayoutEffect(()=> {
if(count >3) {
    setCount(0)
}
return
  },[count])
  return (
    <Fragment>
      <h1>Auto Count:{count} </h1>
      <button onClick={handleCount}>Add</button>
    </Fragment>
  );
};

export default Test1;
// useLayoutEffect giống như useEffect nhưng thường dành cho những logic khó
// useLayoutEffect được gọi ngay sau khi DOM đã được cập nhật, 
// useEffect được gọi sau khi DOM đã được cập nhật và người dùng đã nhìn thấy các thay đổi.