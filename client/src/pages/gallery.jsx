import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImagePreview from "../components/imagePreview";

const GalleryPage = () => {
  const [preview, setPreview] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-4xl m-2 font-thin">Gallery</div>
      <ImageList
        variant="masonry"
        cols={4}
        gap={2}
        sx={{ width: "80%", height: 1000, px: 2 }}
        rowHeight={264}
      >
        {itemData.map((item) => (
          <ImageListItem key={item}>
            <img
              src={`${item}?w=248`}
              srcSet={`${item}?w=248&dpr=2 2x`}
              onClick={() => {
                setPreview(true);
                setSelectedImage(item);
              }}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <ImagePreview
        onClose={() => {
          setPreview(false);
          setSelectedImage("");
        }}
        open={preview}
        image={selectedImage}
      />
    </div>
  );
};

const itemData = [
  require("../assets/images/1.jpeg"),
  require("../assets/images/3.jpeg"),
  require("../assets/images/4.jpeg"),
  require("../assets/images/5.jpeg"),
  require("../assets/images/11.jpeg"),
  require("../assets/images/6.jpeg"),
  require("../assets/images/7.jpeg"),
  require("../assets/images/8.jpeg"),
  require("../assets/images/9.jpeg"),
  require("../assets/images/2.jpeg"),
  require("../assets/images/10.jpeg"),
  require("../assets/images/12.jpeg"),
];

export default GalleryPage;
