import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'

const Projects = () => {
    // currentInd: index of the first visible slide/card in the slider
    // initial value 0 => start from the first project
    const [currentInd, setCurrentInd] = useState(0);

    // cardsToshow: how many cards should be visible at once in the slider viewport
    // initial value 1 => mobile-first approach (show one card on small screens)
    const [cardsToshow, setCardsToshow] = useState(1);

    useEffect(()=>{
        // updateCardsToShow: determines how many cards to show based on window width.
        // - If viewport width >= 1024 pixels, we set cardsToshow to the total number of projects,
        //   effectively letting all project cards be visible side-by-side.
        // - Otherwise (narrow screens), we display 1 card at a time to behave like a carousel.
        const updateCardsToShow = () =>{
            if(window.innerWidth>=1024){
                // Show all cards side-by-side on wide screens (desktop)
                setCardsToshow(projectsData.length);
            }
            else{
                // Show only one card at a time on narrow screens (mobile/tablet)
                setCardsToshow(1);
            }
        };

        // Run once to set initial value based on current viewport size.
        updateCardsToShow();

        // Add a resize event listener so the layout responds when the user resizes the window.
        // This keeps cardsToshow in sync with the viewport width at all times.
        window.addEventListener('resize', updateCardsToShow);

        // Cleanup function: remove the event listener when the component unmounts
        // or when useEffect re-runs, preventing memory leaks and duplicated listeners.
        return ()=> window.removeEventListener('resize', updateCardsToShow );
    }, []) // empty dependency array => run once after mount

    // moveForward: advances the slider by one card.
    // setCurrentInd uses the functional form so we always base the new index on the previous state.
    // The modulo (%) with projectsData.length makes the index wrap around to 0 after the last item,
    // creating an infinite-looping carousel behavior.
    const moveForward = () =>{
        setCurrentInd(prevInd=> (prevInd+1) % projectsData.length)
    }

    // moveBack: moves the slider backward by one card.
    // When at index 0 we wrap to the last project's index (projectsData.length - 1)
    // to provide wrap-around/backwards infinite carousel behavior.
    const moveBack = () =>{
        setCurrentInd(prevInd=> prevInd === 0 ? projectsData.length-1 : prevInd-1)
    }

  return (
    <div className='container mx-auto py-4 pt-6 px-6 md:px-20 lg:px-30 my-20 w-full overflow-hidden' id='projects'>
        {/* Section title and subtitle */}
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
            Projects
            <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span>
        </h1>
        <p className='text-center text-gray-700 mb-8 max-w-80 mx-auto'>
            Building dream houses and let your dreams come true
        </p>

        {/* Slide navigation buttons (previous / next) */}
        <div className='flex justify-end items-center mb-8'>
            {/* Previous button:
                - onClick triggers moveBack to decrement currentInd (with wrap-around)
                - aria-label improves accessibility for screen readers */}
            <button onClick={moveBack} className='p-3 bg-gray-300 rounded mr-2 cursor-pointer' aria-label='Previous Project'>
                <img src={assets.left_arrow} alt="previous" />
            </button>

            {/* Next button:
                - onClick triggers moveForward to increment currentInd (with wrap-around)
                - aria-label should describe the action for assistive tech */}
            <button onClick={moveForward} className='p-3 bg-gray-300 rounded mr-2 cursor-pointer' aria-label='Next Project'>
                <img src={assets.right_arrow} alt="next" />
            </button>
        </div>

        {/* Project slider viewport container.
            - overflow-hidden ensures only the visible portion of the sliding track shows,
              preventing off-screen cards from being visible.
        */}
        <div className='overflow-hidden'>
            {/* Sliding track:
                - display:flex lays out each project card horizontally in a row
                - gap-8 adds spacing between cards
                - transition-transform + duration-500 + ease-in-out animate the translateX change
                  so slides move smoothly when currentInd updates
                - style transform calculates how far to translate the track to show the current card(s)
            */}

            <div className='flex gap-8 transition-transform duration-500 ease-in-out'
            style={{
                // The translateX calculation:
                // - currentInd is the index of the first visible card
                // - We use percentage translation so it works responsively with card widths
                // - If cardsToshow === 1 (mobile): each card occupies 100% of viewport width.
                //   translateX = -(currentInd * 100)%
                // - If cardsToshow === projectsData.length (desktop showing all cards),
                //   then the denominator reduces the translate step accordingly so the layout
                //   behaves as expected. In that desktop case, (currentInd*100)/cardsToshow
                //   will produce smaller per-index translations (often 0 if all are visible).
                //
                // Note: This formula assumes card widths and the track are sized so that
                // 100% corresponds to one card width when cardsToshow === 1.
                transform: `translateX(-${(currentInd*100)/cardsToshow}%)`
            }}>
                {projectsData.map((project, ind)=>(
                    // Each project card:
                    // - key uses the index for identity (acceptable if projectsData is stable;
                    //   prefer stable unique ids if available)
                    // - 'shrink-0' prevents the flex item from shrinking when the track is sized
                    // - w-full means on smallest screens the card takes full width of the viewport
                    // - sm:w-1/4 applies a smaller width starting at the 'sm' breakpoint (tailwind)
                    <div key={ind} className='relative shrink-0 w-full sm:w-1/4'>
                        {/* Project image: responsive, fills width of the card */}
                        <img src={project.image} alt={project.title} className='w-full h-auto mb-14 '/>

                        {/* Overlay card with project metadata (title, price, location):
                            - absolute positioned at the bottom of the card
                            - left-0 right-0 centers the inner block horizontally
                            - inline-block with width (w-3/4) constrains the white info box
                            - shadow-md gives slight elevation for readability over the image
                        */}
                        <div className='absolute left-0 right-0 bottom-5 flex-justify-center'>
                            <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                <h2 className='text-xl font-semibold text-gray-800'>
                                    {project.title}
                                </h2>
                                <p>
                                    {project.price} <span>|</span> {project.location}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </div>
  )
}

export default Projects