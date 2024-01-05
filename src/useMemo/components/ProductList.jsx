/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */

//REACT
import { Fragment, useId, useMemo, useState } from "react";

const ProductList = ({ products }) => {
 
  const id = useId("");
  // TẠO GIÁ TRỊ MẶC ĐỊNH CỦA BIẾN SORT LÀ ASC
  const [sort, setSort] = useState("asc");
  // useMemo dùng để tính toán danh sách sortedProducts dựa trên giá trị products và sort mỗi khi hai giá trị này thay đổi
  const sortedProducts = useMemo(() => {
  // Tạo một bản sao của mảng products để tránh ảnh hưởng dến bản gốc khi sort
    const copyProducts = [...products];

    if (sort === "asc") {
      return copyProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
      return copyProducts.sort((a, b) => b.price - a.price);
    } else if (sort === "name-asc") {
      return copyProducts.sort((a, b) => a.name.localeCompare(b.name));
    } //localeCompare dùng để so sánh hai chuỗi theo thứ tự từ điển của ngôn ngữ hiện tại.
    else {
      return;
    }
  }, [products, sort]);



  const handleSort = (e) => {
    setSort(e.target.value);
  };


  return (
    <Fragment>
      <h1>Product List</h1>
      <select id={id} value={sort} onChange={handleSort}>
        <option value="asc">Price:Low to High</option>
        <option value="desc">Price:High to Low</option>
        <option value="name-asc">Name:A to Z</option>
      </select>
      <ul>
        {sortedProducts.map((items, index) => {
          return (
            <li key={index}>
              {items.name}-{items.price}
              {/** VD: product a-100 */}
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default ProductList;
