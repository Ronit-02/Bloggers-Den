import '../../styles/write.css'

export default function Write() {
  
  // const textarea = document.querySelector("textarea");
  // textarea.addEventListener("keyup", e => {

  //   textarea.style.height = "59px";
  //   let scHeight = e.target.scHeight;
  //   textarea.style.height = `${scHeight}px`;
  // });

  return (
    <div className='write'>
      
      <form className='write__form'>
          <input className='write__title' type="text" placeholder='Title' autoFocus={true} />
          <textarea className='write__text' type="text" placeholder='Tell me your story...' required/>
          <button className="write__publish">Publish</button>
      </form>

    </div>
  )
}
