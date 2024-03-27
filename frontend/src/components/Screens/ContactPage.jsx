import { motion } from "framer-motion";
import ShadowContainer from "../CommonComponets/ShadowContainer";
import Contact from "../CommonComponets/Contact";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { IoMdMailUnread } from "react-icons/io";
export default function ContactPage() {
  return (
    <div id="contact" className="h-full">
      <div>
        <ShadowContainer
          title="Contact Me"
          shadowText="Contact"
          text="Bad programmers worry about the code. Good programmers worry about data structures and their relationships."
        />
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          }}
          viewport={{ once: true, amount: 0.8 }}
        >
        <div className="w-[50%] m-auto mt-14 flex flex-wrap gap-12 justify-around">
          <Contact Icon={<IoLocationSharp color="#FFBD39" size={30}/>} heading={'ADDRESS'} txt={'Suncity, Sikar Road, Jaipur, 302013'}/>
          <Contact Icon={<IoMdCall color="#FFBD39" size={30}/>} heading={'CONTACT NUMBER'} txt={'+91 9929878107'}/>
          <Contact Icon={<IoMdMailUnread color="#FFBD39" size={30}/>} heading={'EMAIL'} txt={'jitesh04sharma@gmail.com'}/>
        </div>
        <div className=" w-[90%] md:w-[80%] lg:w-[60%] p-14 m-auto mt-20 bg-[#1A2228] rounded-lg">
          <h2 className="text-white text-4xl font-bold">Get in touch.</h2>
          <form action="#" className="mt-10 flex flex-col md:flex-row flex-wrap gap-4">
            <input required type="text" placeholder="First Name " className="w-[90%] md:w-[80%] p-4 rounded-xl text-xl text-gray-700 border-none outline-none"/>
            <input required type="text" placeholder="Last Name " className="w-[90%] md:w-[80%] p-4 rounded-xl text-xl text-gray-700 border-none outline-none"/>
            <input required type="email" placeholder="Email " className="w-[90%] md:w-[80%] p-4 rounded-xl text-xl text-gray-700 border-none outline-none"/>
            <input required type="text" placeholder="Subject" className="w-[90%] md:w-[80%] p-4 rounded-xl text-xl text-gray-700 border-none outline-none"/>
            <div className="flex flex-col gap-y-4 w-[90%] md:w-[80%]">
              <textarea required placeholder="Message" className="w-[90%] md:w-[80%] p-4 rounded-xl min-w-[100%] text-xl text-gray-700 border-none outline-none border border-red-700"/>
              <input type="submit" value='Submit' className="w-[90%] md:w-[80%] p-4 rounded-xl self-center bg-[#FFBD39] text-xl text-white border-none cursor-pointer "/>
            </div>
          </form>
        </div>
        </motion.div>
      </div>
    </div>
  );
}
