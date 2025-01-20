import { useState } from 'preact/hooks'

import { WidgetButton } from '../features/WidgetButton'
import { WidgetPopup } from '../features/WidgetPopup'

export const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const handleTogglePopup = () => {
    if (isOpen && !isClosing) {
      setIsClosing(true)
      setTimeout(() => {
        setIsOpen(false)
        setIsClosing(false)
      }, 500)
    } else if (!isOpen) {
      setIsOpen(true)
    }
  }

  return (
    <div className="tw-fixed tw-w-full tw-bottom-[72px] tw-right-[22px] tw-z-[10000]">
      {isOpen && (
        <WidgetPopup onClose={handleTogglePopup} isClosing={isClosing} />
      )}
      <WidgetButton onClick={handleTogglePopup} />
    </div>
  )
}
