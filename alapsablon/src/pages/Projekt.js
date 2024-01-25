import { Carousel } from "react-bootstrap";
import { kepek } from "../KepLista";

export default function Projekt() {
  return (
    <div>
       <h2>A projekt Lényege</h2>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias non tenetur reiciendis molestias, nobis quo asperiores aspernatur dolorum ex, porro labore dolor quibusdam similique quos at voluptate nisi. Quas, doloremque.
       Corrupti accusantium commodi a dicta quos sit. Atque, impedit repudiandae! Accusantium voluptatum reiciendis cum voluptatibus quos tempora eum vero beatae dolorem consequuntur quasi, cupiditate, corrupti excepturi fuga repellat illum ipsa.
       Omnis dicta, distinctio animi sunt ipsam labore rerum accusantium asperiores blanditiis officia perspiciatis odit! Possimus illum saepe quaerat officia aliquam ad maxime impedit illo, itaque eligendi error ducimus veniam quas?</p>
       <div className="mt-5 d-flex justify-content-center">
          <Carousel style={{ width: "40%" }}>
            {kepek.map((kep) => (
              <Carousel.Item key={kep.id}>
                <img className="d-block w-100" src={kep.src} alt={kep.cim} />
                <Carousel.Caption>
                  <h5>{kep.leiras}</h5>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
       <h2>Iskolánk szerepe</h2>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet aperiam a, enim quas provident consequuntur, voluptatum blanditiis sunt odit asperiores cumque quidem neque odio officiis earum sint! Molestiae, temporibus necessitatibus?
       Quisquam, laboriosam nulla eum iste dolore quasi maxime quod unde reiciendis at soluta corporis nisi beatae porro ratione obcaecati totam quidem! Eaque eligendi nostrum sequi eum, ex labore veritatis accusamus.</p>
       <div className="mt-5 d-flex justify-content-center">
          <Carousel style={{ width: "40%" }}>
            { kepek.map((kep) => (
              <Carousel.Item key={kep.id}>
                <img className="d-block w-100" src={kep.src} alt={kep.cim} />
                <Carousel.Caption>
                  <h5>{kep.leiras}</h5>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
    </div>
    
  );
}
