import { useRef } from 'react';
import './styles.css';

const VerificationPopUp = ({setIsModalOpen}) => {
  // ref is created to access all input elments in the form
  const formRef = useRef();

  function handleKeyDown(e) {
    e.preventDefault();

    if(e.code === 'ArrowLeft') prev(e.target) //move focus to previous input
    else if(e.code === 'ArrowRight') next(e.target); //move focus to next input
    else if(e.code === 'Backspace'){  //delete value and move focus to prvious input element
      e.target.value = '';
      prev(e.target);
    }else if(e.code.includes('Digit')){ //change value and move focus to next input element      
      e.target.value = e.key;
      next(e.target)
    }
  }

  //paste clipboard data to each input
  function handlePaste(e) {
    e.preventDefault();
    let data = e.clipboardData.getData('text/plain');
    if(isNaN(data)) return;
    for(let i = 0; i < 6 ; i++) formRef.current.children[i].value = data[i] || '';
  }

  // shift focus to next input element of node
  function next(node) {
    let elem = node.nextElementSibling;
    if(elem && elem.tagName === 'INPUT') elem.focus();
  }

   // shift focus to previous input element of node
  function prev(node) {
    let elem = node.previousElementSibling;
    if(elem && elem.tagName === 'INPUT') elem.focus();
  }

  return (
    <div role='modal' className='verification-popUp'>

        <button className='close-popup' role='close button' onClick={() => setIsModalOpen(false)}>
            <span className="material-symbols-outlined">close</span>
        </button>

        <h1>Phone Verification</h1>
        <p>Enter the OTP you received on 8630-7XX-XXX</p>

        <form className='otp-code' ref={formRef}>
          {Array.from({length:6}).map((x, i) => 
            <input key={i} type='text' onKeyDown={handleKeyDown} onPaste={handlePaste} /> 
          )}
        </form>

        <p className='form-actions'>
            <button>Change Number</button>
            <button>Re-send OTP</button>
        </p>

        <button className='verify'>Verify Phone Number</button>
    </div>
  )
}

export default VerificationPopUp;