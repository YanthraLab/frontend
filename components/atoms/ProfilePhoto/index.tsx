import React from 'react';
import { User, Camera } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ProfilePhotoProps {
    src?: string;
    alt?: string;
    size?: number;
    className?: string;
    editable?: boolean;
    onEdit?: () => void;
}

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({
    src,
    alt = 'Profile Photo',
    size = 100,
    className,
    editable = false,
    onEdit,
}) => {
    return (
        <div
            className={cn(
                'relative rounded-full overflow-hidden bg-muted border-2 border-border shrink-0 text-muted-foreground flex items-center justify-center',
                className
            )}
            style={{ width: size, height: size }}
        >
            {src ? (
                <Image
                    src={src}
                    alt={alt}
                    width={size}
                    height={size}
                    className="object-cover w-full h-full"
                />
            ) : (
                <User size={size * 0.5} />
            )}
            {editable && (
                <div
                    onClick={onEdit}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer text-white"
                >
                    <Camera size={size * 0.3} />
                </div>
            )}
        </div>
    );
};

export default ProfilePhoto;
