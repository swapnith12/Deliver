import { SpeechReader } from "~features/speech_reader"

import "~style.css"

function IndexPopup() {
  return (
    <div className="plasmo-flex plasmo-items-center plasmo-justify-center plasmo-h-16 plasmo-w-40">
      <SpeechReader />
    </div>
  )
}

export default IndexPopup
