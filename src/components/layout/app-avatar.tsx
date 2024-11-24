import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

type avatarProps = {
  imageUrl? : string,
  extraClass? : string,
  width?: number,
  height?: number,
  alt?: string
}
const AppAvatar = (avatarSettings:avatarProps) => {
  const { imageUrl, width, height, alt, extraClass } = avatarSettings;
  return (
    <Avatar>
      <AvatarImage
        src={imageUrl}
        width={width || 10}
        height={height || 10}
        alt={alt || 'avatar'}
        className={cn(extraClass || 'w-10 h-10 rounded')}
        loading='lazy'
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default AppAvatar;
