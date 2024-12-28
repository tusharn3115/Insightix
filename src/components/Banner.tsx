/**
 * @copyright 2024 tushxr05
 * @license Apache-2.0
 */

// framer motion
import { motion } from "motion/react";
import * as variants from "@/lib/motionVariants";

// assets
import { brands } from "@/assets";

const Banner = () => {
  return (
    <section className="section">
      <div className="container max-w-screen-lg">
        <motion.p
          variants={variants.fadeInUp}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="text-center mb-4 md:mb-6"
        >
          Delivering actionable insights and in-depth, detailed data analytics
          solutions.
        </motion.p>

        <motion.div
          variants={variants.staggerContainer}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="flex justify-center flex-wrap gap-5 md:gap-10"
        >
          {brands.map((brand, index) => (
            <motion.figure variants={variants.fadeInUp} key={index}>
              <img src={brand} alt="brand imgs" className="opacity-[0.6]" />
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
