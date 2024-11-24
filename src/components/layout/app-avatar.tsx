import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

const AppAvatar = () => {
  const imageUrl = 'https://i.pravatar.cc/300';
  return (
    <Avatar>
      <AvatarImage src={imageUrl} width={10} height={10} alt='avatar' className={cn('w-10 h-10 rounded')} loading="lazy" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default AppAvatar;
