import { NavLink } from "react-router-dom";
import Slider from "react-slick";

export default function Rekomendasi({ slide, picSlide1, picSlide2 }) {
    
  return (
    <section id="rekomendasi" className="my-11">
      <Slider id="slide" {...slide}>
        {picSlide1.map((e, i) => (
          <div key={i} className="rekomend me-10 h-[230px] rounded-md">
            <div className="flex w-[inherit] h-[inherit] p-5 pt-7 gap-5 items-center">
              <img src={e} className="w-[150px]" alt="phone" />
              <div>
                <p className="text-orange-400">{picSlide2[i][0]}</p>
                <h1 className="text-[20px] text-black font-semibold">
                  {picSlide2[i][1]}
                </h1>
                <p className="text-orange-400 mb-5">{picSlide2[i][2]}</p>
                <NavLink
                  to="/DetailBarang"
                  className="px-7 py-1 border hover:bg-black hover:duration-150 hover:text-white border-black rounded-full"
                >
                  Beli
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
