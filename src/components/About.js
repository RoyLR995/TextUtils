import React from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'

    // })

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#788495' : 'white',
    }
    // const [btntext,setBtnText]=useState("Enable dark mode")
    // const toggleStyle = () => {
    //     if(myStyle.color === 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border:'1px solid white'
    //         })
    //         setBtnText("Enable Light mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText("Enable Dark mode")
    //     }
    // }    
  return (
      <div className='container'>
      <h2 className='my-3' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>About TEXTUTILS</h2>    
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id='headingOne'>
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze your Text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby='headingOne' data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                TextUtils gives you a way to analyze your text quickly and
                efficiently.Be it word count, Character Count or any other.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id='headingTwo'>
                <button className="accordion-button collapsed" style={myStyle} type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                    aria-controls="collapseTwo">
                <strong>Free To Use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby='headingTwo' data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                TextUtils is a free character counter tool that provides instant character count and word count
                statistics for a given text. TextUtils reports the number of words and characters.
                Thus it is suitable for writing text with word/character limit.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id='headingThree'>
                <button className="accordion-button collapsed" style={myStyle} type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                    aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby='headingThree' data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer,
            Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document,
            essays etc.
            </div>
            </div>
        </div>
          </div>
          {/* <div className='container'>
              <button onClick={toggleStyle} type='button' className='btn btn-primary'>{btntext}
          </button>
          </div> */}
    </div>
  )
}
