"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Cloud: React.FC = () => {
    return (
        <motion.div
            style={{ position: "absolute", top: "20%", left: "0" }}
            animate={{ x: ["0%", "100%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
            <Image src={"/cloud.jpg"} alt="Cloud" width={100} height={60} />
        </motion.div>
    );
};

export default Cloud;
