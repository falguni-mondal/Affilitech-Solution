import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// images import
import brand1 from "../../../../assets/brands/coinDCX.png";
import brand2 from "../../../../assets/brands/alibaba.png";
import brand3 from "../../../../assets/brands/bajaj-finserve.png";
import brand4 from "../../../../assets/brands/axis.png";
import brand5 from "../../../../assets/brands/icici.png";
import brand6 from "../../../../assets/brands/indusland.png";
import brand7 from "../../../../assets/brands/blitz.png";
import brand8 from "../../../../assets/brands/dhani.png";
import brand9 from "../../../../assets/brands/dominos.png";
import brand10 from "../../../../assets/brands/equtas.png";
import brand11 from "../../../../assets/brands/flipkart.png";
import brand12 from "../../../../assets/brands/frankfinn.png";
import brand13 from "../../../../assets/brands/godreg.png";
import brand14 from "../../../../assets/brands/groww.png";
import brand15 from "../../../../assets/brands/HDFC.png";
import brand16 from "../../../../assets/brands/kent.png";
import brand17 from "../../../../assets/brands/monster.png";
import brand18 from "../../../../assets/brands/Skill-lync.png";
import brand19 from "../../../../assets/brands/sunstone.png";
import brand20 from "../../../../assets/brands/tata-mutual-fund.png";
import brand21 from "../../../../assets/brands/tvs_sport.png";

const BrandMarquees = () => {
    const marquee1 = useRef(null);
    const marquee2 = useRef(null);
    const marquee3 = useRef(null);

    const brands = [
        [brand1, brand2, brand3, brand4, brand5, brand6, brand7],
        [brand8, brand9, brand10, brand11, brand12, brand13, brand14],
        [brand15, brand16, brand17, brand18, brand19, brand20, brand21],
    ];

    useEffect(() => {
        let tl1, tl2, tl3;

        if (marquee1.current) {
            const distance1 = marquee1.current.scrollWidth / 2;
            tl1 = gsap.to(marquee1.current, {
                x: -distance1,
                duration: 30,
                ease: "linear",
                repeat: -1,
                modifiers: { x: (x) => (parseFloat(x) % -distance1) + "px" },
            });
        }

        if (marquee2.current) {
            const distance2 = marquee2.current.scrollWidth / 2;
            tl2 = gsap.timeline({ repeat: -1 });
            tl2.fromTo(
                marquee2.current,
                { x: -distance2 },
                { x: 0, duration: 30, ease: "linear" }
            );
        }

        if (marquee3.current) {
            const distance3 = marquee3.current.scrollWidth / 2;
            tl3 = gsap.to(marquee3.current, {
                x: -distance3,
                duration: 30,
                ease: "linear",
                repeat: -1,
                modifiers: { x: (x) => (parseFloat(x) % -distance3) + "px" },
            });
        }

        const handleScroll = () => {
            [tl1, tl2, tl3].forEach((tl) => tl && tl.timeScale(3));
            clearTimeout(window.scrollEndTimer);
            window.scrollEndTimer = setTimeout(() => {
                [tl1, tl2, tl3].forEach((tl) => tl && tl.timeScale(1));
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="w-full overflow-hidden py-10 px-10 space-y-6 mt-[5vh]" id="brand-marquee-section">
            <h2 className='text-[3rem] font-semibold leading-none tracking-tight mb-[3vh]'><span className='block p-0 m-0 text-[5rem] font-semibold leading-[3rem] tracking-tight prime-txt'>#Trust</span> matters.</h2>

            <div className="flex space-x-10 whitespace-nowrap" ref={marquee1}>
                {[...brands[0], ...brands[0], ...brands[0], ...brands[0]].map(
                    (brand, i) => (
                        <img
                            key={i}
                            src={brand}
                            alt={`brand1-${i}`}
                            className="h-16 w-auto object-contain"
                        />
                    )
                )}
            </div>

            <div className="flex space-x-10 whitespace-nowrap" ref={marquee2}>
                {[...brands[1], ...brands[1], ...brands[1], ...brands[1]].map(
                    (brand, i) => (
                        <img
                            key={i}
                            src={brand}
                            alt={`brand2-${i}`}
                            className="h-16 w-auto object-contain"
                        />
                    )
                )}
            </div>

            <div className="flex space-x-10 whitespace-nowrap" ref={marquee3}>
                {[...brands[2], ...brands[2], ...brands[2], ...brands[2]].map(
                    (brand, i) => (
                        <img
                            key={i}
                            src={brand}
                            alt={`brand3-${i}`}
                            className="h-16 w-auto object-contain"
                        />
                    )
                )}
            </div>
        </section>
    );
};

export default BrandMarquees;
