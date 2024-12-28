/**
 * @copyright 2024 tushxr05
 * @license Apache-2.0
 */

// constants
import { blogData } from "@/constants";


// components
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"


// framer motion
import { motion } from "motion/react";
import * as variants from "@/lib/motionVariants";

const Blog = () => {
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
            {blogData.sectionSubtitle}
          </motion.p>

          <motion.h2
            variants={variants.fadeInUp}
            initial="start"
            whileInView="end"
            viewport={{ once: true }}
            className="section-title"
          >
            {blogData.sectionTitle}
          </motion.h2>

          <motion.p
            variants={variants.fadeInUp}
            initial="start"
            whileInView="end"
            viewport={{ once: true }}
            className="section-text"
          >
            {blogData.sectionText}
          </motion.p>
        </div>

        <motion.div
        variants={variants.staggerContainer}
        initial="start"
        whileInView="end"
        viewport={{ once: true }}
         className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {blogData.blogs.map(({imgSrc, title, badge, author:{authorName, avatarSrc, publishDate, readingTime}}, index) => (
                <motion.div key={index} variants={variants.fadeInUp}>
                    <Card className="group">
                      <CardHeader>
                        <figure className="rounded-lg overflow-hidden">
                          <img src={imgSrc} alt={title} className="img-cover group-hover:scale-105 transition-transform duration-500" />
                        </figure>
                      </CardHeader>

                      <CardContent>
                        <Badge className="bg-[#F1943A] mb-3">{badge}</Badge>

                        <CardTitle className="leading-normal">
                          <a href="#" className="hover:text-[#F1943A] transition-colors">{title}</a>
                        </CardTitle>
                      </CardContent>

                      <CardFooter className="gap-3">
                        <Avatar>
                          <AvatarImage src={avatarSrc} />
                          <AvatarFallback>{authorName}</AvatarFallback>
                        </Avatar>

                        <div>
                          <p className="text-sm mb-0.5">{authorName}</p>

                          <div className="flex items-center gap-1.5">
                            <time dateTime={publishDate} className="text-sm text-muted-foreground">{publishDate}</time>

                            <span className="w-1 h-1 bg-muted-foreground/50 rounded-full"></span>

                            <p className="text-xs text-muted-foreground">{readingTime}</p>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
