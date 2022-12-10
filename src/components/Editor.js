import EditBox from "./editors-comps/EditBox"
import EditHeader from "./editors-comps/EditHeader"


export default function Editor(){
    return(
        <div className="editor-main">
            <EditHeader/>
            <EditBox/>
        </div>
    )
}