import React from "react";
import './Gallery.css';


const images = [
  {
    src: "https://media.istockphoto.com/id/1338737959/photo/little-kids-schoolchildren-pupils-students-running-hurrying-to-the-school-building-for.jpg?s=612x612&w=0&k=20&c=u2eZV7PY4TTGKvxRBRkhiaDoFFEFPKeOlCsYARCqFSI=",  
  },
  {
    src: "https://media.istockphoto.com/id/1151191727/photo/little-driver.jpg?s=612x612&w=0&k=20&c=Ax3pLukbCvlsK0GcmSAb2D42jHReJJUiR9LDvGf8lag=", 
  },
  {
    src: "https://media.istockphoto.com/id/1696713978/photo/group-of-happy-indian-kids-wearing-colorful-cloths-lying-on-grass-in-the-summer-park-playful.jpg?s=612x612&w=0&k=20&c=xrS1ZBsnPzQZ1U_dYHqUSW3g7k8WGGTEr5QnbhFlLos=",
  },
  {
    src: "https://media.istockphoto.com/id/1185931783/photo/beautiful-toddler-boy-playing-with-construction-blocks-at-kindergarten.jpg?s=612x612&w=0&k=20&c=vJieGWgFYj3caNTdFq750W6vcmCXOAp8cQixPSF6ljs=",  
  },
  {
    src: "https://media.istockphoto.com/id/589961490/photo/children-playing-with-colorful-blocks-building-a-block-tower.jpg?s=612x612&w=0&k=20&c=65mogYttliQ54CD7JElf6Y9DvfktYnE-qRGdsu65HwQ=", 
  },
  {
    src: "https://media.istockphoto.com/id/185236261/photo/preschoolers-and-teacher.jpg?s=612x612&w=0&k=20&c=biRLsOdYs-CafeGaDjxdilqZ_a9BrursuojPQaa7mGQ=",
  },
  {
    src: "https://media.istockphoto.com/id/983418152/photo/cheerful-little-children-having-fun-doing-finger-painting.jpg?s=612x612&w=0&k=20&c=DfkQNYZXjiouKO0lBzx7PZoAKAvZLr6WBq-uVjRbBOg=",  
  },
  {
    src: "https://media.istockphoto.com/id/2150364938/photo/reading-is-fun.jpg?s=612x612&w=0&k=20&c=0Xk20ZPtD5cgoAcD2IFQgn-Fq5IvCd2vHNsLqELcx00=", 
  },
  {
    src: "https://media.istockphoto.com/id/520648150/photo/little-girls-and-teacher-learning-at-preschool.jpg?s=612x612&w=0&k=20&c=M1HN-lDsm55pvUxXQbeY8iFrLPx6ZmPhQxte9W-pfBI=",
  },  

];

const Gallery = () => {
  return (
   <div>
    <h1>Event held by our School</h1>
      {images.map((image) => (
        <div className="col-md-4 cart">
          <div >
            <img src={image.src} className="card-img"/>
          </div>
        </div>
      ))}
    </div>

  )
};



export default Gallery;

