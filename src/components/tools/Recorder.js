// import your icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faStopCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faPlayCircle,
  faPauseCircle,
  faDownload,
  faPlay,
  faStop,
  faPencilAlt,
  faPause,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useReactMediaRecorder } from "react-media-recorder";
import { useEffect, useRef, useState } from "react";

const Recorder = () => {
  const [tracks, setTracks] = useState([]);

  const maxTrackCount = useRef(5);
  const currentTrack = useRef(null);
  const currentTrackDetails = useRef(null);
  const currentStatus = useRef(null);
  const canvasRef = useRef(null);
  const [recorderStatus, setRecorderStatus] = useState(null);

  //limit tracks Count
  useEffect(() => {
    console.log(tracks);
  }, [tracks.length]);

  //return track duration length

  const getDuration = (audio) => {
    console.log(audio.duration);

    if (isNaN(audio.duration) || !isFinite(audio.duration)) {
      console.log("Seeting " + Number.MAX_SAFE_INTEGER);
      return Number.MAX_VALUE;
    } else {
      console.log("setting " + audio.duration);
      return audio.duration.toString();
    }

    return Number.MAX_SAFE_INTEGER;
  };

  const updateSeekBar = () => {
    if (currentTrackDetails.current.seek_bar) {
      let seek_bar = document.getElementById(
        currentTrackDetails.current.seek_bar
      );

      let seek_label = document.getElementById(
        currentTrackDetails.current.label
      );

      seek_bar.oninput = (e) => {
        currentTrack.current.currentTime = e.currentTarget.value;
      };
      seek_bar.change = (e) => {
        currentTrack.current.currentTime = e.currentTarget.value;
      };

      let time_update = (currentTrack.current.ontimeupdate = () => {
        seek_bar.value = currentTrack.current.currentTime;
        seek_bar.max = currentTrack.current.duration;

        let total_time = currentTrack.current.currentTime;

        let mins = Math.floor(total_time / 60);
        let secs = Math.floor((total_time - mins * 60) % 60);

        if (secs < 10) {
          seek_label.innerText = mins + ":0" + secs + "";
        } else {
          seek_label.innerText = mins + ":" + secs + "";
        }

        currentTrack.current.removeEventListener("ontimeupdate", time_update);
      });
    }
  };

  const stopFunction = (blobURL, blob) => {
    var newTrack = new Audio(blobURL);
    var blobObj = blob;
    currentTrack.current = newTrack;
    currentStatus.current = "idle";

    var newData = [
      {
        audio: newTrack,
        url: blobURL,
        blob: blobObj,
        name: "Untitled_" + tracks.length,
      },
    ];
    if (tracks.length > 0) {
      newData.push(...tracks);
    }
    setTracks([...newData]);
  };

  const {
    status,
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    previewAudioStream,
    error,
  } = useReactMediaRecorder({
    audio: true,
    blobPropertyBag: {
      type: "audio/wav",
      endings: "native",
    },
    onStop: stopFunction,
  });

  useEffect(() => {
    console.log("Status", status);
    console.log("Current Status", currentStatus.current);

    setRecorderStatus(status);
  }, [status, currentStatus.current]);

  const playLastRecorded = () => {
    currentStatus.current = "playing";
    console.log("Inside last record play");
    if (currentTrack.current) {
      currentTrack.current.play();
    }
  };

  const pauseCurrent = () => {
    currentStatus.current = "paused";
    console.log("inside current track pause");
    currentTrack.current.pause();
  };

  const stopCurrent = () => {
    currentStatus.current = "stopped";
    console.log("inside current track stop");
    currentTrack.current.pause();
    currentTrack.current.currentTime = 0;
  };

  const doNothing = () => {};

  const downloadTrack = (url, fileName) => {
    const a = document.createElement("a");

    a.href = url;
    a.download = fileName || "Untitled";

    a.click();
  };

  const renameTrack = (track, ind, new_name) => {
    track.forEach((element, index) => {
      if (ind == index) {
        element.name = new_name;
      }
    });
    setTracks(track);
  };

  const removeTrack = (track, ind) => {
    let arr = [];
    track.forEach((element, index) => {
      if (ind == index) {
        console.log(element);
      } else {
        arr.push(element);
      }
    });
    setTracks(arr);
  };

  return (
    <div className="min-h-screen w-full font-body">
      <div className="flex flex-col ml-4">
        <hr className="bg-black mb-4 h-100" />

        <h1 className="font-bold text-2xl pb-4">Audio Recorder</h1>

        <div className="w-full h-32 mb-4" hidden>
          {/* WaveForm */}

          <canvas ref={canvasRef} />
        </div>
        {recorderStatus == "recording" ? <p>Recording</p> : ""}

        <div className="flex justify-around w-48">
          {/* record */}
          <div
            className="cursor-pointer"
            onClick={() => {
              status == "idle" && tracks.length < maxTrackCount.current
                ? startRecording()
                : status == "paused"
                ? resumeRecording()
                : tracks.length < maxTrackCount.current
                ? startRecording()
                : (console.log("Reached maximum recording limit"),
                  alert("reached maximum recording limit"));
            }}
            title="start record"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 0 24 24"
              width="30px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
              <circle cx="12" cy="12" r="5" />
            </svg>
          </div>

          {/* play */}
          <span
            onClick={() => {
              playLastRecorded();

              console.log(status, currentStatus.current);
            }}
          >
            <FontAwesomeIcon
              icon={faPlayCircle}
              size="2x"
              className="cursor-pointer"
              title="Play"
            />
          </span>

          {/* pause */}
          <span
            onClick={() => {
              console.log(status, currentStatus.current);
              currentStatus.current == "playing"
                ? pauseCurrent()
                : status == "recording"
                ? pauseRecording()
                : pauseRecording();
            }}
          >
            <FontAwesomeIcon
              icon={faPauseCircle}
              size="2x"
              className="cursor-pointer"
              title="Pause"
            />
          </span>

          {/* stop */}
          <span
            onClick={() => {
              console.log(status, currentStatus.current);
              status == "recording"
                ? stopRecording()
                : currentStatus.current == "playing" ||
                  currentStatus.current == "paused"
                ? stopCurrent()
                : doNothing();
            }}
          >
            <FontAwesomeIcon
              icon={faStopCircle}
              size="2x"
              className="cursor-pointer"
              title="Stop"
            />
          </span>
          <span
            onClick={() => {
              let download_links = [];

              for (let i = 0; i < tracks.length; i++) {
                download_links.push(document.getElementById("download" + i));
              }
              let result = prompt(
                "Downloading Multiple Files! Do you agree? Press Ok"
              );

              if (result != null) {
                download_links.forEach((links) => {
                  links.click();
                });
              }
            }}
          >
            <FontAwesomeIcon
              icon={faDownload}
              size="2x"
              className="cursor-pointer"
              title="Download All"
            />
          </span>
        </div>

        <div>
          <h1 className="font-bold text-2xl mt-8">Tracks Recorded</h1>
          {tracks.map((val, ind, arr) => (
            <div key={ind} className="flex flex-col mt-4">
              <hr className="bg-black mb-4 h-100 mx-12" />

              <div className="flex justify-between mb-4 mx-12">
                {/* Track name */}
                <div className="text-sm w-1/2">
                  {ind + 1 + ") "} <span id={"name" + ind}>{val.name}</span>
                  <input
                    onFocus={(e) => e.target.select()}
                    id={"new_name" + ind}
                    type="text"
                    onKeyDown={(e) => {
                      if (e.key == "Enter") {
                        document.getElementById("edit_name" + ind).click();
                      }
                    }}
                    onBlur={(e) => {
                      document.getElementById("edit_name" + ind).click();
                    }}
                    hidden
                  />
                  <p className="w-2/3">
                    {/* seek bar for changing tracks seek position and visualizing it */}
                    <label>
                      <span id={"duration_label" + ind}>{"0:00"}</span>
                      <input
                        id={"duration_seek_bar" + ind}
                        className=""
                        type="range"
                        name="seek"
                        defaultValue="0"
                        min="0"
                        step="0.01"
                        max={getDuration(val.audio)}
                        onChange={(e) => {
                          val.currentTime = e.currentTarget.value;
                        }}
                        onInput={(e) => {
                          val.currentTime = e.currentTarget.value;
                        }}
                      />
                    </label>
                  </p>
                </div>
                {/* Play Track */}
                <FontAwesomeIcon
                  icon={faPlay}
                  size="1x"
                  className="cursor-pointer"
                  title="Play Track"
                  onClick={() => {
                    currentStatus.current = "playing";
                    currentTrack.current = val.audio;
                    currentTrackDetails.current = {
                      ...val,
                      index: ind,
                      seek_bar: "duration_seek_bar" + ind,
                      label: "duration_label" + ind,
                    };

                    updateSeekBar();
                    val.audio.play();
                  }}
                />
                {/* Pause Track */}
                <FontAwesomeIcon
                  icon={faPause}
                  size="1x"
                  className="cursor-pointer"
                  title="Pause Playback"
                  onClick={() => {
                    val.audio.pause();
                    currentStatus.current = "paused";
                  }}
                />
                {/* Stop Track */}
                <FontAwesomeIcon
                  icon={faStop}
                  size="1x"
                  className="cursor-pointer"
                  title="Stop Playback"
                  onClick={() => {
                    val.audio.pause();
                    val.audio.currentTime = 0;
                    currentStatus.current = "stopped";
                  }}
                />
                {/* rename track */}
                <p
                  id={"edit_name" + ind}
                  onClick={(e) => {
                    let new_name = document.getElementById("new_name" + ind);
                    let existing_name = document.getElementById("name" + ind);

                    if (new_name.hidden) {
                      if (new_name.value == "") {
                        new_name.value = existing_name.innerText;
                      }
                      new_name.hidden = false;
                      new_name.focus();
                      existing_name.hidden = true;
                    } else {
                      existing_name.innerText = new_name.value;
                      existing_name.hidden = false;
                      new_name.hidden = true;
                      renameTrack(arr, ind, existing_name.innerText);
                    }
                  }}
                >
                  <FontAwesomeIcon
                    icon={faPencilAlt}
                    size="1x"
                    className="cursor-pointer"
                    title="Rename Track"
                  />
                </p>
                {/* Delte the track */}
                <FontAwesomeIcon
                  icon={faTrash}
                  size="1x"
                  className="cursor-pointer"
                  title="Delete Track"
                  onClick={() => {
                    removeTrack(arr, ind);
                  }}
                />
                {/* Download the audio to local device */}
                <p
                  id={"download" + ind}
                  onClick={() => {
                    let name = document.getElementById("name" + ind).innerText;
                    downloadTrack(val.url, name);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faDownload}
                    size="1x"
                    className="cursor-pointer"
                    title="Download the Track"
                  />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recorder;
