import { createContext } from "react"

type OpenContextType = {
     show: boolean,
     setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const OpenContextState = {
    show: false,
    setShow: () => {}
}

const OpenContext = createContext<OpenContextType>(OpenContextState)

export default OpenContext; 