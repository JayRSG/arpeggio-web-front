import { useEffect, useRef, useState } from "react";
import { patch } from "@/helpers/monkeypatch";

// import your icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";

const Metronome = (props) => {
  const [isPlaying, setIsPlaying] = useState(false); // Are we currently playing?

  // The start time of the entire sequence.
  const startTime = useRef(0);
  // What note is currently last scheduled?
  const currentTwelveletNote = useRef(0);
  // tempo (in beats per minute)
  const tempo = useRef(80.0);
  const meter = useRef(4);
  const masterVolume = useRef(0.5);
  const accentVolume = useRef(1);
  const quarterVolume = useRef(0.75);
  const eighthVolume = useRef(0);
  const sixteenthVolume = useRef(0);
  const tripletVolume = useRef(0);
  // How frequently to call scheduling function
  const lookahead = useRef(25.0);
  //(in milliseconds)
  // How far ahead to schedule audio (sec)
  const scheduleAheadTime = useRef(0.1);
  // This is calculated from lookahead, and overlaps
  // with next interval (in case the timer is late)
  // when the next note is due.
  const nextNoteTime = useRef(0.0);
  // length of "beep" (in seconds)
  const noteLength = useRef(0.05);
  // the notes that have been put into the web audio,
  const notesInQueue = useRef([]);
  // and may or may not have played yet. {note, time}

  const [timerWorker, setTimerWorker] = useState(null); // The Web Worker used to fire timer messages
  const [audioContext, setAudioContext] = useState(null); // The AudioContext

  //setting a worker
  useEffect(() => {
    console.log(props.activated);
    if (props.activated == "metronome") {
      // let timer = new Worker("/assets/js/worker.js");
      setTimerWorker(props.worker);
      let audioContext = new AudioContext();
      setAudioContext(audioContext);
    }
  }, []);

  //initializing the worker and patching with monkeypatch
  useEffect(() => {
    if (timerWorker) {
      patch(window);
      init();
    }
  }, [timerWorker]);

  //invoke play when changed
  useEffect(() => {
    play();
    // console.log("master volume", masterVolume.current);
  }, [isPlaying]);

  const init = () => {
    if (timerWorker) {
      timerWorker.onmessage = function (e) {
        if (e.data == "tick") {
          scheduler();
        } else {
          console.log("message: " + e.data);
        }
      };

      timerWorker.postMessage({ interval: lookahead.current });
    }
  };

  const play = () => {
    if (timerWorker) {
      if (isPlaying && props.activated == "metronome") {
        console.log("here in play");
        currentTwelveletNote.current = 0;
        nextNoteTime.current = audioContext.currentTime;
        timerWorker.postMessage("start");
      } else {
        console.log("here in stop");
        timerWorker.postMessage("stop");
      }
    }
  };

  const scheduler = () => {
    while (
      nextNoteTime.current <
      audioContext.currentTime + scheduleAheadTime.current
    ) {
      scheduleNote(currentTwelveletNote.current, nextNoteTime.current);
      nextTwelvelet();
    }
  };

  const scheduleNote = (beatNumber, time) => {
    // push the note on the queue, even if we're not playing.
    // audioInfo.notesInQueue.push({ note: beatNumber, time: time });

    notesInQueue.current.push({ note: beatNumber, time: time });
    // console.log(notesInQueue.current);

    // create oscillator & gainNode & connect them to the context destination
    var osc = audioContext.createOscillator();
    var gainNode = audioContext.createGain();

    osc.connect(gainNode);
    gainNode.connect(audioContext.destination);

    if (beatNumber % maxBeats() === 0) {
      if (accentVolume.current > 0.25) {
        osc.frequency.value = 880.0;
        gainNode.gain.value = calcVolume(accentVolume.current);
      } else {
        osc.frequency.value = 440.0;
        gainNode.gain.value = calcVolume(quarterVolume.current);
      }
    } else if (beatNumber % 12 === 0) {
      // quarter notes = medium pitch
      osc.frequency.value = 440.0;
      gainNode.gain.value = calcVolume(quarterVolume.current);
    } else if (beatNumber % 6 === 0) {
      osc.frequency.value = 440.0;
      gainNode.gain.value = calcVolume(eighthVolume.current);
    } else if (beatNumber % 4 === 0) {
      osc.frequency.value = 300.0;
      gainNode.gain.value = calcVolume(tripletVolume.current);
    } else if (beatNumber % 3 === 0) {
      // other 16th notes = low pitch
      osc.frequency.value = 220.0;
      gainNode.gain.value = calcVolume(sixteenthVolume.current);
    } else {
      gainNode.gain.value = 0; // keep the remaining twelvelet notes inaudible
    }

    osc.start(time);
    osc.stop(time + noteLength.current);
  };

  const maxBeats = () => {
    var beats = meter.current * 12;
    return beats;
  };

  const nextTwelvelet = () => {
    var secondsPerBeat = 60.0 / tempo.current;

    // Add beat length to last beat time
    nextNoteTime.current += 0.08333 * secondsPerBeat;

    // Advance the beat number, wrap to zero

    currentTwelveletNote.current = currentTwelveletNote.current + 1;

    if (currentTwelveletNote.current == maxBeats()) {
      currentTwelveletNote.current = 0;
      // currentTwelveletNote = 0;
    }
  };

  const calcVolume = (beatVolume) => {
    return beatVolume * masterVolume.current;
  };

  return (
    <div className="text-gray-500 pl-8 min-h-screen w-full font-body">
      <div className="flex flex-col ">
        <header className="flex flex-col bg-main-color h-28">
          <h2 className="text-lg p-4 pl-16">The Metronome</h2>
          <div className="">
            <button
              className=""
              id="add"
              onClick={() => {
                setIsPlaying(!isPlaying);
              }}
            >
              <FontAwesomeIcon
                icon={!isPlaying ? faPlayCircle : faPauseCircle}
                size="3x"
                className="text-red-400 relative top-7 left-4"
              />
              <span className="" hidden={true}>
                Add
              </span>
            </button>
          </div>
        </header>

        <main className="mt-8 flex min-w-full flex-wrap">
          <div className="pl-4">
            <h6 className="text-lg">Tempo</h6>
            <h2 id="bpm" className="pt-4">
              <output className="text-7xl" name="bpm" id="bpmOutput">
                {tempo.current}
              </output>
              <span className=""> bpm</span>
            </h2>

            <input
              className="w-96 h-100 laptop:w-60 3k:w-72"
              type="range"
              name="bpm"
              id="bpmInput"
              defaultValue={tempo.current}
              min="15"
              max="400"
              // onInput="tempo = event.target.value; bpmOutput.value = bpmInput.value;"
              onInput={(e) => {
                tempo.current = e.currentTarget.value;
                document.getElementById("bpmOutput").value =
                  e.currentTarget.value;
              }}
            />

            <h6 className="text-lg pt-4">Meter</h6>
            <h2 id="bpm" className="pt-4">
              <output className="text-7xl" name="count" id="countOutput">
                {meter.current}
              </output>
              <span className=""> counts</span>
            </h2>

            <input
              className="w-96 h-100 laptop:w-60 3k:w-72"
              type="range"
              name="count"
              id="countInput"
              defaultValue="4"
              min="1"
              max="12"
              // onInput="meter = event.target.value; countOutput.value = countInput.value;"
              onInput={(e) => {
                meter.current = e.currentTarget.value;
                document.getElementById("countOutput").value =
                  e.currentTarget.value;
              }}
            />
          </div>

          <div className="pl-16">
            <h6 className="text-lg">Volumes</h6>
            <p className="py-4">Master</p>
            <input
              className="w-96 h-100 laptop:w-60 3k:w-72"
              type="range"
              min="0"
              max="100"
              defaultValue="50"
              tabIndex="0"
              onInput={(e) => {
                masterVolume.current = e.currentTarget.value / 100;
              }}
            />

            <p className="py-4">Accent</p>
            <input
              className="w-96 h-100 laptop:w-60 3k:w-72"
              type="range"
              min="0"
              max="100"
              defaultValue="100"
              tabIndex="0"
              onInput={(e) => {
                accentVolume.current = e.currentTarget.value / 100;
              }}
            />

            <p className="py-4">Quarter Note</p>
            <input
              className="w-96 h-100 laptop:w-60 3k:w-72"
              type="range"
              min="0"
              max="100"
              defaultValue="75"
              tabIndex="0"
              onInput={(e) => {
                quarterVolume.current = e.currentTarget.value / 100;
              }}
            />

            <p className="py-4">Eighth Note</p>
            <input
              className="w-96 h-100 laptop:w-60 3k:w-72"
              type="range"
              min="0"
              max="100"
              defaultValue="0"
              tabIndex="0"
              onInput={(e) => {
                eighthVolume.current = e.currentTarget.value / 100;
              }}
            />

            <p className="py-4">Sixteenth Note</p>
            <input
              className="w-96 h-100 laptop:w-60 3k:w-72"
              type="range"
              min="0"
              max="100"
              defaultValue="0"
              tabIndex="0"
              onInput={(e) => {
                sixteenthVolume.current = e.currentTarget.value / 100;
              }}
            />

            <p className="py-4">Triplet</p>
            <input
              className="w-96 h-100 laptop:w-60 3k:w-72"
              type="range"
              min="0"
              max="100"
              defaultValue="0"
              tabIndex="0"
              onInput={(e) => {
                tripletVolume.current = e.currentTarget.value / 100;
              }}
            />
          </div>
        </main>
      </div>
    </div>
  );
};
export default Metronome;
