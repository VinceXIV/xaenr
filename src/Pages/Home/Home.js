import React, {useRef, useState} from "react";
import Canvas from '../../Components/Canvas/Canvas'
import SampleItems from '../../Components/SampleItems/SampleItems';
import "./Home.css"

function Home(){
    const defaultState = {
        activeSample: null,
        sampleImages: [1, 2, 3],
        resultImages: [1, 2],
        painting: true
      }
      const previousStatus = useRef(defaultState)
      const [status, setStatus] = useState(defaultState)


    function changeBtnColor(e){
        e.target.classList.add('visited')
        setTimeout(()=>{
          e.target.classList.remove('visited')
        }, 200)
    }
    
    function clearInputs(e){
        changeBtnColor(e)
        previousStatus.current = status
    
        if(status.activeSample === null){
          setStatus(defaultState)
        }else {
          const newSampleImages = status.sampleImages.map((sampleImage, index) => {
            if(status.activeSample === index){
              return status.activeSample
            }else {
              return sampleImage
            }
          })
    
          setStatus(status => ({...status, sampleImages: newSampleImages }))
        }
    }
    
    function undoChange(e){
        changeBtnColor(e)
        setStatus(previousStatus.current)
    }
      
    return (
        <div id="home" className='container'>
            <div className='canvas-item-container'>
            <Canvas
                status={status}
                setStatus={setStatus}
                previousStatus={previousStatus}/>
            </div>
  
            <div className='sample-items-container'>
            <SampleItems
                images={status.sampleImages}
                sampleType="sample"
                status={status}
                setStatus={setStatus}
                previousStatus={previousStatus}/>

            <div className='start-match-container'>
            </div>

            <div id='results-and-buttons'>
                <div id='matching-btn-container'>
                <button className='btn clear-btn' onClick={clearInputs}> Clear </button>
                <button className='btn undo-btn' onClick={undoChange}>Undo</button>
                <button className='btn start-matching-btn'>Start Matching</button>
                </div>

                <SampleItems
                images={status.resultImages}
                sampleType="results"
                status={status}
                setStatus={setStatus}/>
            </div>
        </div>
      </div>
    )
}

export default Home;