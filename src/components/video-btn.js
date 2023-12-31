import { Button } from "theme-ui";
import React from "react";
import { FaPlay } from "react-icons/fa";

const VideoBtn = () => {
  return (
    <Button className="videoBtn" aria-label="play Video" sx={styles.videoBtn}>
      <FaPlay />
    </Button>
  );
};

export default VideoBtn;

const styles = {
  videoBtn: {
    width: "92px",
    borderRadius: "50%",
    height: "92px",
    backgroundColor: "rgba(255,255,255, .5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    textAlign: "center",
    color: "#fff",
    cursor: "pointer",
    transition: "500ms",
    svg: {
      position: "relative",
      left: "5px",
      fontSize: "35px",
    },
    "&:hover": {
      backgroundColor: "primary",
      color: "#fff",
    },
  },
};
