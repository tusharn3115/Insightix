/**
 * @copyright 2024 tushxr05
 * @license Apache-2.0
 */

// framer motion
import { motion } from "motion/react";
import * as variants from "@/lib/motionVariants";

// constants
import { overviewData } from "@/constants";

// components
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { AspectRatio } from "./ui/aspect-ratio";
import ReactPlayer from "react-player";

// assets
import { overviewBanner } from "@/assets";
import { Play } from "lucide-react";

const Overview = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <motion.p
            variants={variants.fadeInUp}
            initial="start"
            whileInView="end"
            viewport={{ once: true }}
            className="section-subtitle"
          >
            {overviewData.sectionSubtitle}
          </motion.p>

          <motion.h2
            variants={variants.fadeInUp}
            initial="start"
            whileInView="end"
            viewport={{ once: true }}
            className="section-title"
          >
            {overviewData.sectionTitle}
          </motion.h2>

          <motion.p
            variants={variants.fadeInUp}
            initial="start"
            whileInView="end"
            viewport={{ once: true }}
            className="section-text"
          >
            {overviewData.sectionText}
          </motion.p>
        </div>

        <div>
          <motion.div
            variants={variants.fadeInScale}
            initial="start"
            whileInView="end"
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto shadow-xl"
          >
            <figure className="">
              <img
                src={overviewBanner}
                width={900}
                height={601}
                alt="overviewBanner"
              />
            </figure>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150"
                >
                  <div className="sr-only">Play Video</div>
                  <Play fill="#fff" size={50} />
                </Button>
              </DialogTrigger>

              <DialogContent className="p-0 overflow-hidden max-w-[640px] xl:max-w-[1000px]">
                <AspectRatio ratio={16 / 9}>
                  <ReactPlayer
                    url="https://youtu.be/dQw4w9WgXcQ?si=AOfWry8sRJIS0-k-"
                    style={{
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </AspectRatio>
              </DialogContent>
            </Dialog>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-5 mt-8 md:mt-16 xl:grid-cols-[3fr,2.5fr] xl:items-center">
            <motion.p
              variants={variants.fadeInRight}
              initial="start"
              whileInView="end"
              viewport={{ once: true }}
              className="section-title text-center lg:max-w-[30ch] lg:mx-auto xl:text-left"
            >
              {overviewData.listTitle}
            </motion.p>

            <motion.div
              variants={variants.staggerContainer}
              initial="start"
              whileInView="end"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-5 md:gap-10 xl:gap-8"
            >
              {overviewData.list.map(({ title, text }, index) => (
                <motion.div
                  variants={variants.fadeInLeft}
                  className="text-center"
                  key={index}
                >
                  <h3 className="text-3xl">{title}</h3>

                  <p className="text-muted-foreground">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
