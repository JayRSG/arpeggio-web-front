import { ProGallery } from "pro-gallery";
import "pro-gallery/dist/statics/main.css";
import image_items from "../lib/images_link.json";
import { useEffect, useRef, useState } from "react";
import ImageViewerComponent from "./Image_Viewer_Component";
import {
  getCurrentBreakPoint,
  getCurrentWindowHeight,
  getCurrentWindowWidth,
  useHeight,
  useWidth,
} from "../helpers/screensRes";

const Gallery = () => {
  const deviceWidth = useWidth();
  const currentBreakPoint = useRef(getCurrentBreakPoint());

  const [currentImages, setCurrentImages] = useState([]);
  const [imageCount, setImageCount] = useState(0);
  const loadBtn = useRef(false);

  const [selectedImgSrc, setSelectedImgSrc] = useState(0);
  const [currentInd, setCurrentInd] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const galleryScroll = useRef(null);
  const galleryDim = {
    width: getCurrentWindowWidth(),
    height: getCurrentWindowHeight(),
  };

  // The options of the gallery (from the playground current state)
  const options = {
    galleryLayout:
      getCurrentBreakPoint() == "mobile" || getCurrentBreakPoint() == "large"
        ? 2
        : 2,
    isVertical: true,
    // gridStyle: 1,
    hoveringBehaviour: "NEVER_SHOW",
    scrollAnimation: "SLIDE_UP",
    imageHoverAnimation: "ZOOM_IN",
    loadMoreAmount: "partial",
    gallerySize:
      getCurrentBreakPoint() == "mobile" || getCurrentBreakPoint() == "large"
        ? 5
        : 25,
    scatter: 7,
    placeGroupsLtr: true,
    imagePlacementAnimation: "SLIDE",
    gallerySizeType: "ratio",
  };

  useEffect(() => {
    initLoadImage();
  }, []);

  useEffect(() => {
    // console.log("auto print");
    // console.log("image count ", imageCount);
    // console.log("current Images ", currentImages);

    if (currentImages.length == image_items.length) {
      loadBtn.current.hidden = true;
    } else {
      loadBtn.current.hidden = false;
    }
  }, [currentImages, imageCount]);

  useEffect(() => {
    // console.log(galleryDim);
    // console.log(getCurrentBreakPoint());
  });

  function initLoadImage() {
    setCurrentImages(image_items.slice(0, 5));
    setImageCount(5);
  }

  function loadMoreImage() {
    if (currentImages.length == image_items.length) {
      console.log("No more images");
      loadBtn.current.hidden = true;
    }

    if (currentImages.length < image_items.length - 5) {
      setCurrentImages([
        ...currentImages,
        ...image_items.slice(imageCount, imageCount + 5),
      ]);
      setImageCount((imageCount) => imageCount + 5);
    } else {
      setCurrentImages([...currentImages, ...image_items.slice(imageCount)]);
      setImageCount(image_items.length);
    }
  }

  const toggleViewer = (val) => {
    setIsClicked(val);
  };

  // The eventsListener will notify you anytime something has happened in the gallery.
  const eventsListener = (eventName, eventData) => {
    console.log(eventName, currentInd);

    if (eventName == "ITEM_CLICKED") {
      setSelectedImgSrc(eventData.url);
      setCurrentInd(eventData.idx);
      setIsClicked(true);
    } else if (eventName == "HOVER_SET") {
    } else if (eventName == "NEED_MORE_ITEMS") {
      loadBtn.current.click();
    } else {
    }
  };

  return (
    <>
      <title>Gallery</title>

      <div ref={galleryScroll} className="flex flex-col font-body min-h-screen">
        <div className="">
          <ImageViewerComponent
            all_images={currentImages}
            src={selectedImgSrc}
            current_index={currentInd}
            item_clicked={isClicked}
            viewerState={toggleViewer}
          />

          <ProGallery
            items={currentImages}
            options={options}
            container={galleryDim}
            eventsListener={eventsListener}
          />
        </div>

        <div className="self-center mt-5 mb-3">
          <button
            ref={loadBtn}
            className="bg-btn-color text-white rounded-lg opacity-80 py-2 px-5 self-center hover:opacity-100 transform hover:scale-110 transition-all duration-500"
            onClick={loadMoreImage}
          >
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default Gallery;
