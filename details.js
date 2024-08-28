let imagedisplay = document.getElementById("imagedisplay")

function showImage(){
const src = localStorage.getItem("img", "clickedImageSrc")
// localStorage.clear()
        imagedisplay.innerHTML += `<div><img src="${src}" class="h-[60vh] w-full">
        <h1 class="text-3xl font-bold m-8">Nature Images: A Visual Symphony of the World</h1>
        <p class="text-xl ml-8 max-w-[90vw]">Nature images capture the beauty, diversity, and wonder of our planet. They showcase the intricate details of flora and fauna, the grandeur of landscapes, and the awe-inspiring forces of nature.</p>
       <h1 class="text-3xl font-bold m-8">Types of Nature Images</h1>
<p class="text-xl ml-8 max-w-[90vw] mb-8">
Landscapes: Panoramic views of mountains, forests, deserts, oceans, and other natural formations.
Wildlife: Close-up shots of animals in their natural habitats, including mammals, birds, reptiles, amphibians, and insects.
Flora: Images of plants, flowers, trees, and other botanical wonders.
Weather: Pictures of storms, rainbows, sunsets, and other atmospheric phenomena.
Macro: High-resolution images of tiny objects, such as insects, flowers, and crystals.
Aerial: Photographs taken from above, often using drones or airplanes, to capture vast landscapes and aerial perspectives.
Elements of a Great Nature Image
Composition: The arrangement of elements within the frame, such as the rule of thirds, leading lines, and symmetry.
Lighting: The use of natural or artificial light to create mood, highlight details, and balance shadows.
Focus: The sharpness of the subject matter, ensuring that the main focus is clear and crisp.
Color: The use of color to evoke emotions, create contrast, and enhance the overall aesthetic.
Storytelling: The ability to convey a story or emotion through the image, capturing a moment in time.
The Impact of Nature Images
Inspiration: Nature images can inspire creativity, imagination, and a sense of wonder.
Education: They can teach us about the diversity of life on Earth, the importance of conservation, and the interconnectedness of ecosystems.
Relaxation: Viewing nature images can have a calming and stress-reducing effect.
Appreciation: They can help us appreciate the beauty and fragility of our planet.
Would you like to explore a specific type of nature image or discuss a particular technique used in nature photography?</p>
        </div>`
    }
    showImage()       
    
    console.log(localStorage.getItem("img"));
 