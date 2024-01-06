import FrontEndSelector from "@/components/HomePage/FrontEndSelector/FrontEndSelector";
import VideoSelector from "@/components/HomePage/VideoSelector/VideoSelector";


export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="bg-white  flex flex-row flex-wrap w-full h-96">
        <VideoSelector/>
        <FrontEndSelector/>
      </div>
    </main>
  );
}
