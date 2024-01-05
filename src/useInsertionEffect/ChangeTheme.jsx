//REACT
import { Fragment, useInsertionEffect, useState } from "react";

// COMPONENTS
import { GetColourTheme } from "./GetColourTheme";

const ChangeTheme = () => {
  const [theme, setTheme] = useState("dark");

  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useInsertionEffect(() => {
    console.log('=======',theme)
 // Tạo đối tượng style dựa trên giá trị của biến theme
    const styleForElements = GetColourTheme(theme);
// Thêm đối tượng style vào phần tử head của tài liệu
    document.head.appendChild(styleForElements);
// Xóa đối tượng style khỏi phần tử head khi component bị unmount
    return () => document.head.removeChild(styleForElements);
  }, [theme]);// re-render skhi giá trị của biến theme thay đổi

  return (
    <Fragment>
      <button onClick={handleChangeTheme} className="btn-theme">
        Change the whole theme
      </button>
    </Fragment>
  );
};

export default ChangeTheme;
