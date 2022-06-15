import { useEffect, useRef, useState } from 'react'
import guitar_chords from '@/lib/guitar.json'
import ukulele_chords from '@/lib/ukulele.json'
import instruments from '@/lib/instruments.json'
import Chord from '@tombatossals/react-chords/lib/Chord'

const Chords = () => {
    //State handles enabling key after instrument selection and suffix after key selection
    const [selectedKey, setSelectedKey] = useState(false)
    const [selectedInstrument, setSelectedInstrument] = useState(false)

    //States for styling disable and enable state of key and suffix
    const [disabledKeyClassName, setDisabledKeyClassName] = useState(
        'flex mt-8 justify-between w-1/2 pointer-events-none opacity-20',
    )
    const [disabledChordClassName, setDisabledChordClassName] = useState(
        'flex flex-col pointer-events-none opacity-20',
    )

    //Keys and Suffixes displayed for selection
    const [keys, setKeys] = useState(guitar_chords.keys)
    const [suffixes, setSuffixes] = useState(guitar_chords.suffixes)

    //select an instrument Guitar/Ukulele
    const selected_instrument = useRef(null)

    //User Selected key and suffix to display a chord with
    const select_key = useRef(null)
    const select_suffix = useRef(null)

    //The chord prop passed to <Chord /> component
    const chord = useRef(null)
    //The instrument prop passed to <Chord /> component
    const instrument = useRef(null)

    //A state that helps to re-renders page based on instrument/chord/suffix change
    const [chordAvailable, setChordAvailable] = useState(false)

    // defaults to false if omitted, a prop passed to <Chord /> component by the same name
    const lite = false

    //Effect to perform tasks on load of component
    useEffect(() => {
        guitar_chords != null
            ? setKeys(extract_keys('Guitar'))
            : ukulele_chords != null
            ? setKeys(extract_keys('Ukulele'))
            : setKeys([
                  'A',
                  'Bb',
                  'B',
                  'C',
                  'Db',
                  'D',
                  'Eb',
                  'E',
                  'F',
                  'Gb',
                  'G',
              ])
    }, [])

    useEffect(() => {
        // console.log(ukulele_chords);
        // if (chordAvailable == 2) {
        //   chord.current.map((something) =>
        //     something.map((somethingMore) => console.log(somethingMore))
        //   );
        //   console.log(instrument.current);
        //   console.log(selected_instrument.current);
        // }
    }, [chordAvailable])

    const setChord = () => {
        chord.current = []
        // console.log(selected_instrument.current);

        let chords_to_select =
            selected_instrument.current == 'Guitar'
                ? guitar_chords.chords[select_key.current]
                : selected_instrument.current == 'Ukulele'
                ? ukulele_chords.chords[select_key.current]
                : null

        // extracts all chords from the selected key and suffix [if available]
        chords_to_select?.map(chord_info =>
            chord_info.suffix == select_suffix.current
                ? chord.current.push(
                      chord_info.positions.map(chord_positions => ({
                          frets: chord_positions.frets,
                          baseFret: chord_positions.baseFret,
                          fingers: chord_positions.fingers,
                          barres: chord_positions.barres,
                          capo: chord_positions.capo ? true : false,
                      })),
                  )
                : '',
        )

        // console.log(chord.current);
        setChordAvailable(!chordAvailable)
    }

    const setInstrument = ins_name => {
        switch (ins_name) {
            case 'Guitar':
                instrument.current = {
                    strings: instruments.guitar.strings,
                    fretsOnChord: instruments.guitar.fretsOnChord,
                    name: 'Guitar',
                    tunings: {
                        standard: ['E', 'A', 'D', 'G', 'B', 'E'],
                    },
                }
                switch_sharp_chords_uke('Guitar')
                break

            case 'Ukulele':
                instrument.current = {
                    strings: instruments.ukulele.strings,
                    fretsOnChord: instruments.ukulele.fretsOnChord,
                    name: 'Ukulele',
                    tunings: {
                        standard: ['G', 'C', 'E', 'A'],
                    },
                }
                switch_sharp_chords_uke('Ukulele')
                break

            default:
                break
        }

        setKeys(extract_keys(ins_name))
        setSelectedInstrument(true)

        setChordAvailable(!chordAvailable)

        if (select_key.current != null && select_suffix.current != null) {
            setChord()
        }

        if (select_key.current) {
            setSuffixes(extract_suffix(select_key.current))
        }

        // console.log(instrument.current);
    }

    const extract_keys = ins_name => {
        let result = []
        let active_keys =
            selected_instrument.current == 'Guitar' || ins_name == 'Guitar'
                ? guitar_chords.chords
                : selected_instrument.current == 'Ukulele' ||
                  ins_name == 'Ukulele'
                ? ukulele_chords.chords
                : null

        Object.keys(active_keys).map(keys =>
            // active_keys[keys].map((chord_list) => console.log(chord_list))
            result.push(keys),
        )

        //Fixing order of ukulele keys orginally wrong in the database
        if (ins_name == 'Ukulele') {
            result = fix_uke_key_order(result)
        }

        return result
    }

    const fix_uke_key_order = result => {
        let c_ind = null
        result.forEach((pos, ind, self) => {
            if (pos == 'C') {
                c_ind = ind
            }
            if (
                typeof self[ind + 1] != 'undefined' &&
                typeof self[ind + 1][1] != 'undefined' &&
                pos == self[ind + 1][0]
            ) {
                let temp = self[ind]
                self[ind] = self[ind + 1]
                self[ind + 1] = temp
            }
        })

        let new_arr = []
        let i = 0
        let k = c_ind
        while (i != 12) {
            new_arr[i++] = result[k]
            k = (k + 1) % 12
        }

        return new_arr
    }

    const extract_suffix = chord_key => {
        let result = []
        let active_chords =
            selected_instrument.current == 'Guitar'
                ? guitar_chords.chords
                : selected_instrument.current == 'Ukulele'
                ? ukulele_chords.chords
                : guitar_chords.chords

        active_chords[chord_key].map(chord_info =>
            result.push(chord_info.suffix),
        )

        return result
    }

    const sharp_chords_fix = key => {
        key =
            key == 'Csharp' || key == 'C#'
                ? 'Db'
                : key == 'Fsharp' || key == 'F#'
                ? 'Gb'
                : key

        return key
    }

    const switch_sharp_chords_uke = ins => {
        if (ins == 'Guitar') {
            if (select_key.current == 'Gb') {
                select_key.current = 'Fsharp'
            } else if (select_key.current == 'Db') {
                select_key.current = 'Csharp'
            }
        } else if (ins == 'Ukulele') {
            if (select_key.current == 'Fsharp') {
                select_key.current = 'Gb'
            } else if (select_key.current == 'Csharp') {
                select_key.current = 'Db'
            }
        }
    }

    return (
        <>
            {/* <Chord
        chord={chord}
        instrument={instrument}
        lite={lite}
      /> */}

            {/* {The Data is in two variables keys and Suffixes, create two placeholders for these and map them the two objects to display each item with } */}
            <div className="font-body w-full">
                <hr className="bg-black mb-4 h-100" />

                <div className="flex justify-evenly 3k:justify-around">
                    {/* suffixes */}
                    <div className="flex ml-20 mt-16 3xl:ml-8 3k:ml-8 laptop:ml-0 tablet:ml-0">
                        <div
                            className={
                                selectedInstrument == false &&
                                selectedKey == false
                                    ? disabledChordClassName
                                    : 'flex flex-col'
                            }>
                            {select_key.current ? (
                                <h1 className="font-bold text-3xl mb-4 3k:text-2xl laptop:text-base tablet:text-xs">
                                    Chords
                                </h1>
                            ) : (
                                ''
                            )}
                            {select_key.current
                                ? suffixes?.map(suffix => (
                                      <p
                                          className={
                                              select_suffix.current == suffix
                                                  ? 'bg-blue-500 text-white text-3xl 3k:text-2xl laptop:text-base tablet:text-xs cursor-pointer hover:text-blue-500'
                                                  : 'text-3xl 3k:text-2xl laptop:text-base tablet:text-xs cursor-pointer hover:text-blue-500'
                                          }
                                          key={suffix}
                                          onClick={() => {
                                              select_suffix.current = suffix
                                              setChord()
                                              // console.log(chord.current);
                                          }}>
                                          {select_key.current != null
                                              ? sharp_chords_fix(
                                                    select_key.current,
                                                )
                                              : ''}
                                          {suffix}
                                      </p>
                                  ))
                                : ''}
                        </div>
                    </div>

                    <div className="flex flex-col w-1/2">
                        {/* keys */}
                        <div
                            className={
                                selectedInstrument == false
                                    ? disabledKeyClassName
                                    : 'flex mt-8 justify-between w-full'
                            }>
                            <h1 className="font-bold text-3xl pr-2 3k:text-2xl laptop:text-base tablet:text-xs">
                                Keys:
                            </h1>
                            {keys?.map(key => (
                                <p
                                    className={
                                        select_key.current == key
                                            ? 'bg-blue-500 text-white text-center w-8 h-8 font-bold text-3xl mr-4 3k:text-2xl laptop:text-base tablet:text-xs cursor-pointer hover:text-blue-500'
                                            : 'font-bold text-3xl pr-4 3k:text-2xl laptop:text-base tablet:text-xs cursor-pointer hover:text-blue-500'
                                    }
                                    key={key}
                                    onClick={() => {
                                        select_key.current = key
                                        setSuffixes(
                                            extract_suffix(select_key.current),
                                        )
                                        setChordAvailable(!chordAvailable)
                                        setSelectedKey(true)
                                        select_key.current &&
                                        select_suffix.current
                                            ? setChord()
                                            : ''
                                    }}>
                                    {sharp_chords_fix(key)}
                                </p>
                            ))}
                        </div>

                        {/* chords */}
                        <div className="flex w-full mt-8 flex-wrap">
                            {chordAvailable == true ||
                            (chord.current != null &&
                                instrument.current != null)
                                ? chord.current?.map(chord_shapes =>
                                      chord_shapes?.map((positions, index) => (
                                          <Chord
                                              key={index}
                                              chord={positions}
                                              instrument={instrument.current}
                                              lite={lite}
                                          />
                                      )),
                                  )
                                : ''}
                        </div>
                    </div>

                    {/* instruments */}
                    <div className="flex flex-col mt-8 ml-16">
                        <a
                            className="btn rounded-lg bg-btn-color text-3xl px-8 font-bold py-1 text-center 3k:text-2xl 3k:px-6 laptop:text-base tablet:text-xs tablet:px-4 cursor-pointer"
                            onClick={() => {
                                selected_instrument.current = 'Guitar'
                                setInstrument('Guitar')
                            }}>
                            Guitar
                        </a>

                        <a
                            className="btn rounded-lg bg-btn-color text-3xl px-8 mt-8 font-bold py-1 3k:text-2xl 3k:px-6 laptop:text-base tablet:text-xs tablet:px-4 cursor-pointer"
                            onClick={() => {
                                selected_instrument.current = 'Ukulele'
                                setInstrument('Ukulele')
                            }}>
                            Ukulele
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chords
