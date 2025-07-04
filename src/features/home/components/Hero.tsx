import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section
      style={{
        background: "linear-gradient(to bottom, #1e5fff, #87ceeb, #f0f8ff)",
      }}
      className="pt-40"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-end">
          <div className="flex flex-col gap-6 py-10 lg:py-24">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              تعليم يفتح افاق المستقبل
            </h1>
            <p className="text-lg text-muted-foreground">
              سيان تقدم لكم تجربة تعليمية متطورة معززة بالذكاء الاصطناعي أنشئ
              منصتك التعليمية لبيع محتواك التعليمي بسهولة.
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/auth/signup"
                className={`${buttonVariants({ size: "lg" })}`}
              >
                انضم الان
              </Link>
            </div>
          </div>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="/assets/images/home/hero.png"
              alt="Hero"
              loading="eager"
              className="w-full min-h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
