//icon
import {AiOutlineClose} from 'react-icons/ai'
//style
import './style.css'
interface PopupProps {
    isVisible:boolean;
    onBackdropClick: () => void;
}
const Popup: React.FC <PopupProps> = ({onBackdropClick,isVisible}) => {
    if(!isVisible) {
        return(
            null
        )
    }
    return(
        <>
            <div>
                <button onClick = {onBackdropClick} className ='close-button'><AiOutlineClose/></button>
            </div>
            <div onClick = {onBackdropClick} className = 'popup-wrapper'>
                <h1>Hello</h1>       
            </div>
        </>
    )
}
export default Popup;