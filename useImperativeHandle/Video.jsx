/* eslint-disable react-refresh/only-export-components */
import video from "../src/Video/video.mp4";
import { Fragment, forwardRef, useImperativeHandle, useRef } from "react";

const Video = (props, ref) => {
  const videoRef = useRef("");
  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
        videoRef.current.pause()
    }
  }));
  return (
    <Fragment>
      <video
        // B3 FORWARDREF NHAN REF THUC CHAT LA NHAN VIDEOREF TU BEN KIA VA TRA VE DOI SO THU HAI
        ref={videoRef}
        src={video}
        width={500}
      />
    </Fragment>
  );
};

export default forwardRef(Video);
// THẰNG CON NHÂN CÁI REF TỪ THỪNG CHA THÔNG QUA CÁI REF TRUYỀN BẰNG PHƯƠNG THỨC FORWARDREF
// props là một tham số được truyền TỪ CHA vào thành phần con Video. Thông qua props, bạn có thể truyền các
//giá trị và thuộc tính từ thành phần cha vào thành phần con.

// đối số thứ nhất nhận ref từ cái ref mà thằng cha truyền
// đối số thứ hai nhận callback, trong callback nhận một object nhận hai method mặc định
//hai method đó sẽ đc truyền vào ref của thằng cha
