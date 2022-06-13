import React, { useState, useEffect, useRef } from "react";
import ImageViewer from "react-simple-image-viewer";

const ImageViewerComponent = (image_information) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [current_index, setCurrentIndex] = useState(
    image_information.current_index
  );

  useEffect(() => {
    let srcs = [];
    image_information.all_images.map((elems) => {
      srcs.push(elems.src);
    });

    setImages(srcs);

    // current_index.current = image_information.current_index;
    setCurrentIndex(image_information.current_index);
    // console.log(
    //   "current index viewer " + image_information.current_index,
    //   "item clicked viewer " + image_information.item_clicked
    // );

    if (image_information.item_clicked) {
      //   console.log("opening viewer");
      setIsViewerOpen(true);
      image_information.viewerState(true);
    }

    // console.log("Current Index in Viewer " + current_index.current);
  }, [image_information]);

  const closeImageViewer = () => {
    setCurrentIndex(false);
    setIsViewerOpen(false);
    image_information.viewerState(false);
  };

  return (
    <>
      <div>
        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={current_index}
            onClose={closeImageViewer}
            disableScroll={false}
            backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.9)",
            }}
            closeOnClickOutside={true}
          />
        )}
      </div>
    </>
  );
};

export default ImageViewerComponent;
