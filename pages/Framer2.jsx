import { useRef } from "react";
import { motion } from "framer-motion";

export default function App() {
  const borderRef = useRef(null);

  return (
    <div 
      ref={borderRef} 
      style={{ 
        width: "100vw", 
        minHeight: "150vh", 
        padding: "10px",
        backgroundColor: "gray" 
      }}
    >      
      <motion.button
        whileHover={{ 
          scale: 1.1, 
          backgroundColor: "darkblue" 
        }} 
        drag                        
        dragConstraints={borderRef} 
        dragSnapToOrigin={true}  
        style={{ 
          padding: "15px 30px", 
          cursor: "grab", 
          marginBottom: "100px",
          backgroundColor: "blue", 
          color: "white",             
          border: "none",
          borderRadius: "50px",
          fontSize: "16px",           
          fontWeight: "bold",         
          boxShadow: "0 8px 15px rgba(0,0,0,0.1)" 
        }}
      >
        Beni Sürükle
      </motion.button>

      <motion.img
        src={"https://pasifikteknoloji.com/uploads/9558z9fyjgo4kg08s4.png"}
        alt="React Logo"
        animate={{
          rotate: 360,    
          scale: [1, 2, 1], 
          x: [0, 100, -100, 0]     
        }}
        transition={{
          duration: 2,             
          repeat: Infinity         
        }}
        style={{ width: "100px", margin: "10px auto", display: "block" }}
      />

      <div style={{ marginTop: "50vh" }}>
        <motion.img
          src={"https://pasifikteknoloji.com/uploads/73vxzrmvbh0c40oss.png"}
          alt="React Logo Scroll"
          whileInView={{           
            rotate: 360,
            scale: [1, 2, 1]
          }}
          transition={{ duration: 2 }}
          style={{ width: "100px", display: "block", margin: "0 auto" }}
        />
      </div>
    </div>
  );
}