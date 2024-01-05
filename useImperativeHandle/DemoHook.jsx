//REACT
import { Fragment, useEffect, useRef } from "react";

// VIDEO
import Video from "./Video";

const DemoHook = () => {
  //B1 TAO RA MOT REF MAC DINH
  const videoRef = useRef("");

  useEffect(() => {
    console.log(videoRef.current); // FORWARDREF NHAN REF
  });

  //PLAY
  const handlePlay = () => {
    videoRef.current.play();
  };

  //PAUSE
  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <Fragment>
      <h1>VIDEO</h1>
      {/** B2 DAY REF NAY QUA REF CUA VIDEO NHUNG THUC CHAT LA CUA FORWARDREF
       * NEN FORWARDREF NHAN CAI REF LA VIDEOREF NAY
       * XONG NO XU LY
       */}
      <Video ref={videoRef} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </Fragment>
  );
};

export default DemoHook;
// THẰNG CHA TRUYỀN CHO CON CÁI REF

// useImperativeHandle chỉ hạn chế những method nên đc áp dụng thôi tránh những method khác xâm nhập đến
// chỉ cho dùng hai method này thôi ngoài ra ko cho dùng method nào hết cả
