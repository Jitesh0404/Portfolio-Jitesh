
function Contact({ Icon, heading, txt }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="w-24 h-24 rounded-full bg-[#FFFFFF1A] flex justify-center items-center">
        {Icon}
      </div>
        <h3 className="text-white text-lg">{heading}</h3>
      <div className="w-40 m-auto">
        <h3 className="text-[#999999] text-base text-center">{txt}</h3>
      </div>
    </div>
  );
}

export default Contact;
