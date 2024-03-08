export default function TextShadow({ text }) {
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-white text-9xl font-black opacity-10 shadow-white absolute top-6 m-auto">
        {text}
      </h1>
    </div>
  );
}
