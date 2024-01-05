const GetColourTheme = (theme) => {
  // Tạo một đối tượng style mới
  const colour = document.createElement("style");
//CSS cho đối tượng style colour
  colour.innerHTML = `
  .btn-theme {
      color:${theme === "dark" ? "red" : "yellow"};
      background-color:${theme === "dark" ? "white" : "dark"};
      padding:1rem;
      border: 1px solid ${theme === "dark" ? "white" : "dark"};
      border-radius: 0.25rem;
     cursor: pointer;
    }`;
  return colour;// Trả về đối tượng style đã được cấu hình
};
export { GetColourTheme };
