import cssText from "data-text:~style.css"
import type { PlasmoCSConfig , PlasmoGetStyle} from "plasmo"

import { SpeechReader  } from "~features/speech_reader"

// export const config: PlasmoCSConfig = {
//   // matches: ["https://github.com/PlasmoHQ/examples/blob/main/with-tailwindcss/src/content.tsx"]
//   css:["style.css"]
// }

export const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  return (
    <div className="z-50 flex fixed top-32 left-80 p-4 rounded-lg">
      <SpeechReader/>
    </div>
  )
}

export default PlasmoOverlay
