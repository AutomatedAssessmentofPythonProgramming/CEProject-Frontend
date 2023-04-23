import ReactModal from "react-modal";
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { darcula } from '@uiw/codemirror-themes-all';

ReactModal.setAppElement('#root');

export default function ViewCode({ isModalOpen, closeModal, code}){

    // const { isOpen, onRequestClose, children, style } = props;
    return(
        <ReactModal 
            isOpen={isModalOpen} 
            onRequestClose={()=>closeModal()}
            style={{
                overlay: {
                  backgroundColor: 'rgba(0, 0, 0, 0.75)'
                },
                content: {
                  top: '50%',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                  width: '50%',
                  padding: '0px'
                }
              }}
        >
            <div className="bg-gray-700 rounded-lg shadow-md p-8">
                <div className="text-xl text-white my-2">
                    Submitted Code
                </div>
                <CodeMirror
                    value={code}
                    height="400px"
                    theme={darcula}
                    extensions={[python()]}
                    // onChange={setCode}
                    options={{
                        readOnly: "nocursor",
                        cursorBlinkRate: -1,
                        cursorHeight: 0
                      }}
                    className="text-base"
                />
                <button 
                    onClick={()=>closeModal()}
                    className="text-white p-2 my-2 bg-zinc-900 hover:bg-zinc-700 rounded-md "
                >
                    Close
                </button>
            </div>
            
        </ReactModal>
    )
}