import { useState } from 'react';
import { Heart, MessageCircle, Bookmark, Send, MoreHorizontal } from 'lucide-react';
import { UnsplashPhoto } from '../model';

export const Post = ({ ...props }: UnsplashPhoto) => {
  const { alt_description, created_at, description, likes, urls, user, topic_submissions } = props

  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);
  const [comment, setComment] = useState('');

  const handleLike = () => {
    if (liked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked);
  };

  const formatDate = (dateString: Date) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((Number(now) - Number(date)) / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) {
      return '오늘';
    } else if (diffInDays === 1) {
      return '어제';
    } else if (diffInDays < 7) {
      return `${diffInDays}일 전`;
    } else {
      return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
    }
  };

  return (
    <div className="w-md rounded shadow-xl border border-gray-300">
      {/* 헤더 */}
      <div className="flex items-center justify-between p-3 border-b">
        <div className="flex items-center">
          {/* 프로필 */}
          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
            <img className="object-cover" src={user.profile_image.large} />
          </div>
          {/* 유저 정보 */}
          <div className="ml-3">
            <div className='flex items-baseline gap-2'>
              <div className="font-semibold text-sm">{user.username}</div>
              <div className="text-gray-500 text-xs">{formatDate(new Date(created_at))}</div>
            </div>
            <div className="text-xs text-gray-500">{user.location}</div>
          </div>
        </div>
        <button>
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* 이미지 */}
      <div className="flex items-center w-full min-h-[31.25rem] bg-black">
        <img src={urls.full} alt={alt_description ?? ""} className="w-full" />
      </div>

      {/* 액션 버튼 */}
      <div className="p-3">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <button className="cursor-pointer" onClick={handleLike}>
              <Heart size={24} className={liked ? "text-red-500 fill-red-500" : ""} />
            </button>
            <button>
              <MessageCircle size={24} />
            </button>
            <button>
              <Send size={24} />
            </button>
          </div>
          <button className="cursor-pointer" onClick={() => setSaved(!saved)}>
            <Bookmark size={24} className={saved ? "fill-black" : ""} />
          </button>
        </div>

        {/* 좋아요 */}
        <div className="mt-2 font-semibold text-sm">좋아요 {likesCount.toLocaleString()}개</div>

        {/* 캡션 */}
        <div className="mt-1">
          <span className="font-semibold text-sm">travel_lover</span>
          <span className="text-sm ml-2">{description}</span>
        </div>

        {/* 해시태그 */}
        <div className="text-blue-500 text-sm mt-1">
          {Object.entries(topic_submissions).map(([key]) => (
            <span key={key} className="mr-2">#{key}</span>
          ))}
        </div>
      </div>

      {/* 댓글 입력 */}
      <div className="flex items-center border-t p-3">
        <input
          type="text"
          placeholder="댓글 달기..."
          className="flex-1 text-sm focus:outline-none"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className={`text-blue-500 font-semibold text-sm ${comment ? '' : 'opacity-50'}`}
          disabled={!comment}
        >
          게시
        </button>
      </div>
    </div>
  );
};

