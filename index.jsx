import React from "react";
import AURORAVIA33 from "./AURORAVIA-3-3.png";
import AURORAVIA51 from "./AURORAVIA-5-1.png";
import { Person } from "./Person";
import ellipse5 from "./ellipse-5.png";
import ellipse6 from "./ellipse-6.png";
import ellipse7 from "./ellipse-7.png";
import ellipse8 from "./ellipse-8.png";
import ellipse9 from "./ellipse-9.png";
import image from "./image.svg";
import line5 from "./line-5.svg";
import line6 from "./line-6.svg";
import line7 from "./line-7.svg";
import rectangle3 from "./rectangle-3.png";
import rectangle4 from "./rectangle-4.png";
import rectangle10 from "./rectangle-10.svg";
import vector2 from "./vector-2.svg";
import vector3 from "./vector-3.svg";
import vector4 from "./vector-4.svg";
import vector6 from "./vector-6.svg";
import vector7 from "./vector-7.svg";
import vector8 from "./vector-8.svg";
import vector9 from "./vector-9.svg";
import vector10 from "./vector-10.svg";
import vector11 from "./vector-11.svg";
import vector from "./vector.svg";

export const HomePage = () => {
  const studioData = [
    { id: 1, name: "GMMTV", image: ellipse5 },
    { id: 2, name: "BE ON CLOUD", image: ellipse6 },
    { id: 3, name: "Wabi Sabi", image: ellipse7 },
    { id: 4, name: "DOMUNDI", image: ellipse8 },
    { id: 5, name: "Mandee", image: ellipse9 },
  ];

  const recommendedShows = [
    {
      id: 1,
      title: "F4",
      image: rectangle3,
      description:
        "F4 Thailand: Boys Over Flowers adalah seri televisi Thailand yang dibintangi oleh Tontawan Tantivejakul, Vachirawit Chiva-aree, Jirawat Sutivanichsak, Metawin Opas-iamkajorn, dan Hirunkit Changkham.",
      genre: "Genre : Romansa,Komedi,Drama",
      top: "387px",
    },
    {
      id: 2,
      title: "Break Up",
      image: rectangle4,
      description:
        "Break Up Service adalah sebuah seri televisi Thailand tahun 2025 yang dibintangi oleh Off Jumpol Adulkittiporn dan Jorin Khumpiraphan. Seri tersebut berdasarkan webtoon Thailand berjudul sama karya Komai",
      genre: "Genre : Romansa,Komedi",
      top: "604px",
    },
  ];

  const bottomNavItems = [
    { id: 1, icon: vector7, position: "left-7" },
    { id: 2, icon: vector2, iconSecondary: vector3, position: "left-[107px]" },
    { id: 3, icon: vector4, position: "left-[185px]" },
    { id: 4, icon: vector6, position: "left-[266px]" },
    { id: 5, component: Person, position: "left-[347px]" },
  ];

  return (
    <main className="bg-black grid justify-items-center [align-items:start] w-screen">
      <div className="bg-black overflow-hidden w-[393px] h-[852px] relative">
        {/* Bottom Navigation */}
        <nav
          className="absolute w-[393px] h-[31px] top-[821px] left-0 bg-[#d9d9d9]"
          role="navigation"
          aria-label="Bottom navigation"
        >
          {bottomNavItems.map((item) => (
            <div
              key={item.id}
              className={`absolute w-6 h-6 top-[3px] ${item.position} aspect-[1]`}
            >
              {item.component ? (
                <item.component className="!absolute !w-6 !h-6 !top-0 !left-0" />
              ) : item.iconSecondary ? (
                <div className="relative w-[18px] h-[18px] top-[3px] left-[3px]">
                  <img
                    className="absolute w-[15px] h-[15px] top-0 left-0"
                    alt="Navigation icon"
                    src={item.icon}
                  />
                  <img
                    className="absolute w-1.5 h-1.5 top-3 left-3"
                    alt="Navigation icon secondary"
                    src={item.iconSecondary}
                  />
                </div>
              ) : (
                <img
                  className="absolute w-4 h-[18px] top-[3px] left-1"
                  alt="Navigation icon"
                  src={item.icon}
                />
              )}
            </div>
          ))}
        </nav>

        {/* Header Menu */}
        <header className="absolute w-[110px] h-[118px] top-[-11px] left-[7px]">
          <button
            className="absolute w-[25px] h-[17px] top-[26px] left-0"
            aria-label="Menu"
          >
            <img
              className="top-[-3px] absolute w-[25px] h-[3px] left-0"
              alt=""
              src={line5}
            />
            <img
              className="top-1.5 absolute w-[25px] h-[3px] left-0"
              alt=""
              src={line6}
            />
            <img
              className="top-3.5 absolute w-[25px] h-[3px] left-0"
              alt=""
              src={line7}
            />
          </button>

          <div className="absolute top-[102px] left-[5px] [font-family:'League_Spartan-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
            Trending :
          </div>

          <div className="absolute w-[101px] h-[117px] top-0 left-[9px] rotate-[-0.16deg]">
            <div className="relative h-[107px] top-[11px]">
              <img
                className="absolute w-[101px] h-[90px] top-0 left-0 rotate-[0.16deg] aspect-[1] object-cover"
                alt="Aurora Via logo"
                src={AURORAVIA33}
              />
              <img
                className="absolute w-[99px] h-[99px] top-[7px] left-px rotate-[0.16deg] aspect-[1] object-cover"
                alt="Aurora Via logo overlay"
                src={AURORAVIA51}
              />
            </div>
          </div>
        </header>

        {/* Search Bar */}
        <div className="absolute w-[190px] h-[33px] top-[68px] left-[196px]">
          <div className="absolute w-[190px] h-[33px] top-0 left-0">
            <div className="h-[33px]">
              <div className="relative w-[190px] h-[33px]">
                <div className="w-9 h-[33px] left-0 bg-white rounded-[17.95px/16.33px] absolute top-0" />
                <div className="w-9 h-[33px] left-[154px] bg-white rounded-[17.95px/16.33px] absolute top-0" />
                <div className="absolute w-[159px] h-[33px] top-0 left-4 bg-white" />
              </div>
            </div>
          </div>

          <button
            className="left-[7px] absolute w-6 h-6 top-[5px] aspect-[1]"
            aria-label="Search"
          >
            <div className="relative w-[18px] h-[18px] top-[3px] left-[3px]">
              <img
                className="absolute w-[15px] h-[15px] top-0 left-0"
                alt=""
                src={vector9}
              />
              <img
                className="absolute w-1.5 h-1.5 top-3 left-3"
                alt=""
                src={vector10}
              />
            </div>
          </button>

          <button
            className="absolute w-6 h-6 top-[5px] left-[157px] aspect-[1]"
            aria-label="Voice search"
          >
            <img
              className="absolute w-3.5 h-[19px] top-0.5 left-[5px]"
              alt=""
              src={vector11}
            />
          </button>

          <input
            type="search"
            placeholder="Search"
            className="absolute w-20 top-1 left-[34px] [font-family:'Poppins-Light',Helvetica] font-light text-black text-[15px] tracking-[0] leading-[normal] bg-transparent border-none outline-none"
            aria-label="Search shows"
          />
        </div>

        {/* Recommended Shows */}
        <section className="absolute w-[606px] h-[119px] top-[257px] left-5">
          <div className="absolute w-[602px] h-[103px] top-0 left-1">
            <div className="absolute w-[346px] h-[55px] top-0 left-0">
              {studioData.map((studio, index) => (
                <img
                  key={studio.id}
                  className={`w-[55px] h-[55px] object-cover absolute top-0`}
                  style={{ left: `${index * 73}px` }}
                  alt={`${studio.name} logo`}
                  src={studio.image}
                />
              ))}
            </div>

            <button className="absolute w-[290px] top-[79px] left-[312px] [font-family:'Lato-Regular',Helvetica] font-normal text-white text-[10px] tracking-[0] leading-[normal]">
              Show All &gt;
            </button>

            {studioData.map((studio, index) => (
              <div
                key={studio.id}
                className={`absolute w-[59px] top-[${index === 0 ? "59" : index === 2 ? "56" : "58"}px] ${
                  index === 0
                    ? "left-2"
                    : index === 1
                      ? "left-[68px]"
                      : index === 2
                        ? "left-[154px]"
                        : index === 3
                          ? "left-[215px]"
                          : "left-[289px]"
                } [font-family:'Lato-Regular',Helvetica] font-normal text-white text-[10px] ${
                  index === 0 ? "" : "text-center"
                } tracking-[0] leading-[normal]`}
              >
                {studio.name}
              </div>
            ))}
          </div>

          <h2 className="absolute w-[302px] top-[87px] left-0 [font-family:'Khula-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]">
            Recommended :
          </h2>
        </section>

        {/* Show Cards */}
        {recommendedShows.map((show, index) => (
          <article key={show.id} className="relative">
            <img
              className={`absolute w-32 h-[195px] top-[${show.top}] ${index === 0 ? "left-[19px]" : "left-5"} object-cover`}
              alt={`${show.title} poster`}
              src={show.image}
            />

            <h3
              className={`absolute w-[${index === 0 ? "63" : "156"}px] top-[${index === 0 ? "390" : "599"}px] left-[169px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[normal]`}
            >
              {show.title}
            </h3>

            <p
              className={`absolute w-[220px] top-[${index === 0 ? "442" : "651"}px] left-[169px] [font-family:'Lato-Regular',Helvetica] font-normal text-white text-[10px] tracking-[0] leading-[normal]`}
            >
              {show.description}
            </p>

            <div
              className={`absolute w-[220px] top-[${index === 0 ? "522" : "736"}px] left-[168px] [font-family:'Lato-Regular',Helvetica] font-normal text-white text-[10px] tracking-[0] leading-[normal]`}
            >
              {show.genre}
            </div>

            <button
              className={`absolute w-[15px] h-[15px] top-[${index === 0 ? "554" : "769"}px] left-[${index === 0 ? "171" : "168"}px] aspect-[1]`}
              aria-label={`Play ${show.title}`}
            >
              <img
                className="absolute w-[13px] h-[11px] top-0.5 left-px"
                alt=""
                src={index === 0 ? image : vector}
              />
            </button>
          </article>
        ))}

        {/* Top Right Icons */}
        <div className="absolute w-8 h-[17px] top-[15px] left-[350px]">
          <div className="absolute w-[15px] h-2 top-0 left-0 bg-white" />
          <div className="absolute w-[15px] h-2 top-[9px] left-0 bg-white" />
          <div className="absolute w-[15px] h-2 top-0 left-[17px] bg-white" />
          <div className="absolute w-[15px] h-2 top-[9px] left-[17px] bg-white" />
        </div>

        {/* Featured Content Banner */}
        <section className="absolute w-[377px] h-[136px] top-[113px] left-3 bg-[url(/rectangle-9.png)] bg-[100%_100%]">
          <img
            className="absolute w-[79px] h-6 top-28 left-px"
            alt="Trending badge"
            src={rectangle10}
          />
          <div className="absolute w-[67px] top-[118px] left-1 [font-family:'Poppins-Light',Helvetica] font-light text-white text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
            Trending No 1
          </div>
        </section>

        {/* Notification Icon */}
        <button
          className="absolute w-6 h-6 top-[11px] left-[310px] aspect-[1]"
          aria-label="Notifications"
        >
          <img
            className="absolute w-[18px] h-[21px] top-0.5 left-[3px]"
            alt=""
            src={vector8}
          />
        </button>
      </div>
    </main>
  );
};
