import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import InstagramPost from "@/components/organisms/InstagramPost";

const DetailPost = () => {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-white shadow-xl relative">
      <Link className="flex pt-4 py-2 items-center px-4 gap-4" to="/profile">
        <ArrowLeft size={24} />
        <span className="text-lg font-semibold">Postingan</span>
      </Link>
      <InstagramPost post={{
        id: 'p2',
        user: { id: 'u11', username: 'ikhbaldwiyan', avatarUrl: 'https://res.cloudinary.com/dreday4jy/image/upload/v1768069075/Inner_Oval_2_tvx48e.png' },
        location: 'Lembang',
        imageUrl: 'https://picsum.photos/seed/art_post/1080/1080',
        likes: 600,
        caption: 'Exploring some abstract forms today. What do you think of this piece? 🎨✨',
        timestamp: '6 hours ago',
        comments: 8,
        shares: 4
      }} />
    </div>
  )
}

export default DetailPost